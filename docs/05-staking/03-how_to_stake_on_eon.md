---
title: How to stake on EON
---

## How to stake on EON
A forger is required to run a node; if you still don't have a node, here are some [instructions](../04-develop_and_deploy_smart_contracts/04-local_build_and_deploy.md). \
The steps below require some basic general knowledge; a web application for staking is under construction and will be made available soon.

#### Create Forger keys
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

At this point there are two ways of staking on EON: via HTTP endpoint or via smart contract.
#### HTTP endpoint
Make a `POST` request to `/transaction/makeForgerStake` with body
```
{
    "forgerStakeInfo": {
        "ownerAddress": "e8674062598b86d8258257a4d79e99d15594d864", 
        "blockSignPublicKey": "e8674062598b86d8258257a4d79e99d15594d864", 
        "vrfPubKey": "4439cbfd50af1b846e5ef06889d3192ef7a459bdd4640dc6da506062de43113c80", 
        "value": 10000
    }
}
```
where:
- `ownerAddress`: is the address that is requesting to stake such amount and the only one allowed to unstake (withdraw) the specified amount;
- `blockSignPublicKey`: is the address that will sign the block when forged. It can be the same address as the ownerAddress or a different one (delegate forging); if this value is not specified the ownerAddress will be used;
- `vrfPubKey`: this is the key created in the previous step;
- `value`: the amount of ZEN expressed in Satoshis (10^8) to put on stake, that will represent your voting power.

#### How to create a forging stake using web3js
Below there is an example (written in javascript to run in Remix IDE) of how to create the forging stake by interacting with the contract:
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
⚠️ **Please, remember to replace YOUR_BLOCK_SIGN and YOUR_VRF_KEY with the actual keys, and make sure to specify the path of the native contract ABI (not provided in the documentation, but available here together with the complete Remix workspace)!** \
⚠️ **Please, notice that with this operation you are increasing the voting power of the forger defined by the blockSignPublicKey and forgerVrfKey, and with that the chance to produce blocks. The operation is a delegation of stake but no rewards will be automatically forwarded to you if you are not the owner of both blockSignPublicKey and forgerVrfKey. Double check them before executing the transaction.
The transaction is reversible by executing a transaction signed by the ownerAddress.**

#### Enable forging
At last make a `POST` request to `/block/startForging` to command the node to start forge blocks (if the node is not yet running you can set to true the `automaticForging` parameter in the `forger` section of the config file). \
To stop forging you can call a similar endpoint `/block/stopForging`.

#### Stake maturity
When a forger stake is created is not immediately ready to let the forger take part into the forgers' election. It needs **2 consensus epochs** before the stake reaches the maturity period; after that, the forger will be ready to take part into the slot leader lottery and be able to forge new blocks. 

#### Verify the stake is created
To make sure the operations above were successful, you can make a `POST` request to `/transaction/allForgingStakes` and verify the publicKey used to create the forger stake appears in the returned list.