---
title: How to Stake on EON
---

# How to Stake on EON
A forger is required to run a node. See [How to Locally Build and Deploy](../04-develop_and_deploy_smart_contracts/04-local_build_and_deploy.md) and [Forger Node Requirements](./04-forger_node.md) for information on creating and running a node.  
The following steps require some basic general knowledge; a web application for staking is under construction and will be made available soon.

#### Create Forger Keys
On your local node, create new forger keys by making a `POST` request to `/wallet/createVrfSecret`.
The request will return your `publicKey` (later called `vrfPubKey`), while the privateKey will be stored in the node's wallet.

```
{
  "result" : {
    "proposition" : {
      "publicKey" : "4439cbfd50af1b846e5ef06889d3192ef7a459bdd4640dc6da506062de43113c80"
    }
  }
}
``` 

Then you need to create a blockSignPublicKey by making a `POST` request to `/wallet/createPrivateKey25519`.
```
{
  "result" : {
    "proposition" : {
      "publicKey" : "01b3bc756eca50bd878649072bf3d2876fa02bcdbdb1acaf3f37cb8bdf5600d99f1f9046cb"
    }
  }
}
```

Then you need to generate an Ethereum compatible address key pair called `PrivateKeySecp256k1`.
In order to do that you can either import it by including it in the `wallet.genesisSecrets` conf section, or create it by making a `POST` request to `wallet/createPrivateKeySecp256k1`.
```
{
  "result": {
    "proposition": {
      "address": "e8674062598b86d8258257a4d79e99d15594d864"
    }
  }
}
```

At this point there are two ways of staking on EON: via HTTP endpoint or via smart contract.
#### HTTP Endpoint
Make a `POST` request to `/transaction/makeForgerStake` with body
```
{
    "forgerStakeInfo": {
        "ownerAddress": "e8674062598b86d8258257a4d79e99d15594d864", 
        "blockSignPublicKey": "01b3bc756eca50bd878649072bf3d2876fa02bcdbdb1acaf3f37cb8bdf5600d99f1f9046cb", 
        "vrfPubKey": "4439cbfd50af1b846e5ef06889d3192ef7a459bdd4640dc6da506062de43113c80", 
        "value": 10000
    }
}
```
where:
- `ownerAddress`: is the address that is requesting to stake such amount and the only one allowed to unstake (withdraw) the specified amount;
- `blockSignPublicKey`: is the address that will sign the block when forged. It can be the same address as the ownerAddress or a different one (delegate forging); if this value is not specified the ownerAddress will be used;
- `vrfPubKey`: this is the key created in the previous step;
- `value`: the amount of ZEN expressed in "Zen Wei" (10^18 Zen wei = 1 zen) to put on stake, that will represent your voting power.

#### Create a Forging Stake using Web3js
Here is an example (written in JavaScript to be run in the Remix IDE) of creating the forging stake with a smart contract interaction:
```
(async () => {
    try {

        console.log('Running testWeb3 - Delegate or create a new Forging Stake script...')

        const smartContractAddress = "0x0000000000000000000022222222222222222222";
        const amount = 0.001; // amount of ZEN of the new stake
        const accounts = await web3.eth.getAccounts();
        console.log('Account ' + accounts[0]);

        const abi = require("browser/contracts/artifacts/abi_fs.json"); // Change this for different path

        const contract = new web3.eth.Contract(abi, smartContractAddress, {from: accounts[0]});

        // Testing method:  delegate
        const ownerAddress = accounts[0];
        // pick one of the existing forgers, or create a new forger
        const blockSignPublicKey = "0x" + YOUR_BLOCK_SIGN; // the address that will sign the block when forged; it can be the same address as the ownerAddress or a different one (delegate forging); if this value is not specified the ownerAddress will be used
        const forgerVrfPublicKey = "0x" + YOUR_VRF_KEY; // this is the key created in the previous step
        const first32BytesForgerVrfPublicKey = forgerVrfPublicKey.substring(0, 66);
        const lastByteForgerVrfPublicKey = "0x" + forgerVrfPublicKey.substring(66, 68);

        methodName = 'delegate';
        console.log('Response for '+ methodName);

        const response = await contract.methods.delegate(blockSignPublicKey,first32BytesForgerVrfPublicKey,lastByteForgerVrfPublicKey,ownerAddress).send({value: amount *10**18}).then(console.log);

    } catch (e) {
        console.log("Error:" + e.message);
    }
  })()
```
⚠️ **Remember to replace YOUR_BLOCK_SIGN and YOUR_VRF_KEY with the actual keys, and to specify the path of the native contract ABI. The contract ABI is not provided here, but it is available with the complete Remix workspace.**  
⚠️ **Notice that this operation involves increasing the voting power of the forger defined by the blockSignPublicKey and forgerVrfKey, and with that the chance to produce blocks. In case of delegation of stake no rewards will be automatically forwarded to you if you are not the owner of both blockSignPublicKey and forgerVrfKey. Ensure ownership before executing the transaction.
The transaction is reversible by executing a transaction signed by the ownerAddress.**

#### Enable Forging
Make a `POST` request to `/block/startForging` to command the node to start forging blocks. If the node is not yet running, set the `automaticForging` parameter to `true` in the `forger` section of the config file.  
To stop forging, call the endpoint `/block/stopForging`.

#### Stake Maturity
When a forger stake is created, it is not immediately ready to let the forger take part in the forgers' election. The stake will start to be accounted in the slot leader lottery from the beginning of the  **second consensus epoch** following the one where its creation happened.
For example: if the stake transaction was included in the middle of epoch 10, it will be accounted from the beginning of the epoch 12.

#### Verify the Stake Creation
To make sure the operation was successful, make a `POST` request to `/transaction/allForgingStakes` and verify the publicKey used to create the forger stake appears in the returned list.

#### EON fee redistribution system
The probability that a forger will be elected as a slot leader will be proportional to the amount of stake he owns versus the total stake present on the chain.\
If a forger wins the forger's lottery and is able to produce a new block, and the block is accepted by the other peers, it will earn a fee reward.\
The transactions' fee mechanism in EON mimics the one defined in Ethereum. Every transaction has a fee computed with the following formula:
```
transaction fee = gasUsed * baseFeePerGas + gasUsed *maxPriorityFeePerGas
```
- baseFeePerGas is a minimum rate a user has to pay to include their transaction in the next block. This value is generated with every block header by the protocol and may change block by block, based on how full the previous block was. 
- The other part of the fee is determined by maxPriorityFeePerGas and represents the so called "forger tip": it is an additional fee the transaction submitter is willing to pay to have its transaction included as soon as possible.
- there is another user specified parameter in the transaction:
maxFeePerGas - represents the maximum fee a user is willing to pay for a transaction.
This parameter actually limits the maxPriorityFeePerGas with tthis rule:\
if ( baseFeePerGas + maxPriorityFeePerGas) > 	maxFeePerGas, then maxPriorityFeePerGas will be reduced in order to maintain the upper bound of the 	maxFeePerGas.
- Finally, we can have also legacy (non EIP-1559) transactions, with only a gasPrice parameter that we use for both maxFeePerGas and maxPriorityFeePerGas values


The baseFee in EON is collected in a pool and redistributed at the end of each consensus epoch to all the forgers of the epoch, proportionally to the number of blocks they forged in the epoch. (this is a distinction from the Ethereum protocol, where the baseFee is burned).\
Additionally, each forger earns all the forger tips of the transactions included in the blocks he forgerd. Also forger's tips are redistributed at the end of each consensus epoch (consensus epoch length is 15000 slots * 3 seconds per slot =  12h30minutes).

Fee payments are calculated automatically by every node and enforced at consensus level. They can also be checked in the EON Explorer at this address: [https://eon-explorer.horizenlabs.io/fee-payment](https://eon-explorer.horizenlabs.io/fee-payment)




