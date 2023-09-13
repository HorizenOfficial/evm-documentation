---
title: How to stake on EON
---

## How to stake on EON
First, you need to run a node; you can find how to do so [here](../04-develop_and_deploy_smart_contracts/04-local_build_and_deploy.md). \
Then you need to create a VrfKey pair by making a `POST` request to `/wallet/createVrfSecret`, the endpoint will return something like
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
- `ownerAddress`: is the address that is requesting to stake such amount and will be able to unstake it in the future;
- `blockSignPublicKey`: is the address that will sign the block when forged; it can be the same address as the ownerAddress or a different one (delegate forging); if this value is not specified the ownerAddress will be used;
- `vrfPubKey`: this is the key created in the previous step;
- `value`: the amount to put on stake.

#### Smart contract
This is an example of how to call the smart contract written in javascript:
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
        const forgerVrfPublicKey = "0x" + YOUR_VRFKEY; // this is the key created in the previous step
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
⚠️ **Please, remember to replace YOUR_BLOCK_SIGN and YOUR_VRF_KEY with the actual keys!**

At last make a `POST` request to `/block/startForging` to command the node to start forge blocks (if the node is not yet running you can set to true the `automaticForging` parameter in the `forger` section of the config file). \
To stop forging you can call a similar endpoint `/block/stopForging`.