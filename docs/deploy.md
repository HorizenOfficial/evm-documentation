---
sidebar_position: 5
---

# Deploy
*Learn how to deploy a simple Solidity-based smart contract in Dune Testnet or Yuma Testnet using the Truffle or Hardhat framework.*

## Deploying a Contract using Truffle

Once the DemoToken contract is successfully compiled, it can now be deployed. 
However, before deploying, make sure that the account you plan to use has sufficient ZEN. See [Get Started](/#connect-to-a-wallet) to install the MetaMask wallet, if needed. To deploy a contract on Dune Testnet or Yuma Testnet, your account must have sufficient ZEN. You can get some free test ZEN by using the [**Faucet**](https://faucet.horizen.io/).


Add the deployment script, [1_deploy_DEMOToken.js](https://github.com/rocknitive/zen-sidechain-truffle/blob/master/migrations/1_deploy_DemoToken.js)  (below) in the `/migrations` folder:


```
const DemoToken = artifacts.require("DemoToken");

module.exports = function(deployer) {
  deployer.deploy(DemoToken);
};
```


Next, deploy the contract by running the command:


```
truffle migrate --network zen
```



## Interact with a Contract Instance

To interact with your deployed contract, you first need to get the contract instance. First, run the Truffle console again by running the command:

```
truffle console --network zen
```

Then get the contract instance by running the command:
```
truffle(zen)> const contract = await DemoToken.deployed()
```


Next, you will get some information from the ERC20 contract by calling the token methods from [EIP-20](https://eips.ethereum.org/EIPS/eip-20). Be aware of the method names by looking at the ABI of the contract or look at the code itself. 


### Get the token name


```
truffle(zen)> contract.name()
'Demo Token'
```



### Get the token symbol


```
truffle(zen)> contract.symbol()
'DEMO'
```



### Get the account balance 

In this example, use the main (first) account, where 20 bytes of an account can be directly specified. 


```
truffle(zen)> const myAccounts = await web3.eth.getAccounts()
truffle(zen)> contract.balanceOf(myAccounts[0])
BN {
  negative: 0,
  words: [ 100, <1 empty item> ],
  length: 1,
  red: null
}
```



### Send token to an account 

Send 12 tokens to the following account:


```
0x03f14683E2f95883815f0df3C9145Efe24575163
```


Here is the code:


```
truffle(zen)> contract.transfer("0x03f14683E2f95883815f0df3C9145Efe24575163", 12)
{
  tx: '0xa19ffcb54152804ed10c778828215d505656d7a112921f11e7c9ffb47c749341',
  receipt: ...,
  logs: ...
}
```


The balance is now reduced by 12 (tokens):


```
truffle(zen)> contract.balanceOf(myAccounts[0])
BN { negative: 0, words: [ 88, <1 empty item> ], length: 1, red: null }
```


 


## EOA to EOA transactions 

Send ZEN from the main address to a known address.


```
truffle(zen)> web3.eth.sendTransaction({ from: myAccounts[0], to: "0x03f14683E2f95883815f0df3C9145Efe24575163", value: 100 })
{
  type: '0x02',
  transactionHash: '0x8577a509da611abb479bed415677e04c7083d75d96b45f4f38ad794f8b2a0799',
  transactionIndex: 0,
  blockHash: '0x14c0a80f8d913e0433d69af367d249c4f431935911df51201e6a77aa31860a57',
  blockNumber: 3633,
  from: '0x7507cebb915af00019be3a5fe8897b2ee115b166',
  to: '0x03f14683e2f95883815f0df3c9145efe24575163',
  cumulativeGasUsed: 21000,
  gasUsed: 21000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  effectiveGasPrice: 2500000007
}

```



## Interact with native smart contracts 

There is no difference between interacting with an abstraction of a native smart contract (abstract contract or child contract created from base contract) and a traditional smart contract. In this example, you will send ZEN from an EON EVM address to the Horizen mainchain for two main functionalities (backward transfer and forgers) provided through native smart contracts.

To interact with the native contract, you will use the function, **backward transfer** (also called, **withdrawal request**) at the reserved address as:

<strong><code>0x0000000000000000000011111111111111111111</code></strong> 

You can also send ZEN using the smart contract address and the ABI. In this example, the Solidity file, **WithdrawalRequests.sol** (below) is used to demonstrate the interaction.

You can obtain a copy of the [WithdrawalRequests.sol](https://github.com/rocknitive/zen-sidechain-truffle/blob/master/contracts/WithdrawalRequests.sol) file and put it in the <code>/contracts</code> folder. 

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

type MCAddress is bytes20;

// contract address: 0x0000000000000000000011111111111111111111
interface WithdrawalRequests {

    struct WithdrawalRequest {
        MCAddress mcAddress;
        uint256 value;
    }

    function getWithdrawalRequests(uint32 withdrawalEpoch) external view returns (WithdrawalRequest[] memory);

    function submitWithdrawalRequest(MCAddress mcAddress) external payable returns (WithdrawalRequest memory);
}
```

To compile the contract, **WithdrawalRequests.sol**, go to the <code>contracts/</code> directory and run the command:

```
truffle compile
```

Next, get the contract abstraction. Run the command:


```
truffle(zen)> const withdrawalContract = await WithdrawalRequests.at("0x0000000000000000000011111111111111111111")
undefined
```



## Interact with native smart instance 

To interact with a native contract instance, use the method, <strong><code>submitWithdrawalRequest</code></strong>.


```
truffle(zen)> withdrawalContract.submitWithdrawalRequest(mcAddress, { value: 1000000000000 })
```


**Note:** The mcAddress needs to be defined or replaced by the string containing the Horizen mainchain address. 

The target mainchain address of a backward transfer has to be a valid address: starting with “**zn**” for *mainnet* or “**zt**” for *testnet*.



```
{
  tx: '0x07d1efe3e4cba65ae9049a456650960c6a8b8dd547c71a8db751d0deac9dd86d',
  receipt: {
    type: '0x02',
    transactionHash: '0x07d1efe3e4cba65ae9049a456650960c6a8b8dd547c71a8db751d0deac9dd86d',
    transactionIndex: 0,
    blockHash: '0xdfca20a6aeb95d43fd9d813e70ca5d9ee54bda0e96fb8a22e7d6932ddc518d14',
    blockNumber: 3637,
    from: '0x7507cebb915af00019be3a5fe8897b2ee115b166',
    to: '0x0000000000000000000011111111111111111111',
    cumulativeGasUsed: 24167,
    gasUsed: 24167,
    logs: [],
    logsBloom: '0x01000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000400000000000000000010000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000008000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000001000000000000000000000',
    status: true,
    effectiveGasPrice: 2500000007,
    rawLogs: [ [Object] ]
  },
  logs: []
}

```

## Deploying a Contract using Hardhat
To deploy a contract, you will use a deployment script that is specific for your smart contract. 
Hardhat script.  Go to the `script/` folder and find the following deploy.ts file:

### Deploy contract ERC20.sol
To deploy your contract ERC20.sol, create a folder in your Hardhat project and name it, **scripts/**. Copy this script (below) and name it **ERC20.ts**.  

Before you can deploy a contract, you need to add the import statement by running the command:

```
import {ether} from hardhat;
```


Use the deployment script for the contract, ERC20.sol:  
const deployERC20 = async () => {
   const ERC20 = await ethers.getContractFactory("ERC20"); const erc20 = await ERC20.deploy("Test", "TST");
   await erc20.deployed();
   console.log(erc20.address); 
};
deployERC20();
Run the command to deploy the contract:

```
npx hardhat run ./scripts/ERC20.ts
```
You will see the following execution results:

```
0x82534fBC27671eEd1F99d342CAd6be213f541a87
```

### Deploy contract TestPayable.sol

Before you can deploy a contract, you need to add the import statement by running the command:

```
import {ether} from hardhat;
```

To deploy your contract **TestPayable.sol**, create a folder in your Hardhat project and name it, **scripts/**. Copy this script (below) and name it **Payable.ts**.  



```
const deployPayable = async () => {
   const Payable = await ethers.getContractFactory("TestPayable"); const payable = await Payable.deploy();
   await payable.deployed();
   console.log(payable.address);
   await payable.pay({ value: ethers.utils.parseEther("1") });
   console.log((await ethers.provider.getBalance(payable.address)).toString()); };
   return payable.address;
};
```
Run the command to deploy the contract:

```
npx hardhat run ./scripts/Payable.ts
```

You will see the following execution results:

```
0xCE3Ab1fC99a77C4648c9c471c16d4D5e4568cE9A 1000000000000000000
```


## Interact with a Contract Instance

To interact with your deployed smart contract, create a folder in your Hardhat project and name it, **tests/**. You will add test scripts that are specific to your contract instance as well as other contracts.

### Interact with TestPayable: With ABI and Without ABI
Interact with TestPayable by passing the ABI and without passing the ABI. Copy the script (below) into your **test/** folder:

```
const contractInteraction = async () => {
   const payableAddress = await deployPayable();
   // passing the ABI
   const payable = await ethers.getContractAt("TestPayable", payableAddress); await payable.pay({ value: ethers.utils.parseEther("1") });
   // without passing the ABI
   const [sender] = await ethers.getSigners(); await sender.sendTransaction({
      to: payableAddress,
      value: ethers.utils.parseEther("1"), 
   });
   console.log((await ethers.provider.getBalance(payableAddress)).toString()); };
   contractInteraction();
```

Run the command to interact with this contract instance:

```
npx hardhat test
```

You will see the following execution results:

```
2000000000000000000
```


### Interact with TestPayable: Read → Call 
Interact with TestPayable by using Read. Copy the script (below) into your **test/** folder:

```
const read = async () => {
const payable = await ethers.getContractAt(
"TestPayable",
await deployPayable() );
console.log(await payable.sentence()); };
read();
```

Run the command to interact with this contract instance:

```
npx hardhat test
```
You will see the following execution results:

```
This is payable
```

### Interact with TestPayable: Call Non-Payable Function
Interact with TestPayable by calling a non-payable function along with ZEN to verify that an error is thrown (as expected). Copy the script (below) into your **test/** folder:

```
const invalidPayment = async () => {
   const payable = await ethers.getContractAt(
      "TestPayable",
      await deployPayable() 
   );
   // @ts-ignore
   await payable.dontPay({ value: ethers.utils.parseEther("1") }); };
   invalidPayment();
```

Run the command to interact with this contract instance:

```
npx hardhat test
```

You will see the following execution results:

```
/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/logg er/src.ts/index.ts:269
const error: any = new Error(message); ^
Error: non-payable method cannot override value (operation="overrides.value", value={"type":"BigNumber","hex":"0x0de0b6b3a7640000"}, code=UNSUPPORTED_OPERATION, version=contracts 5.7.0)
at Logger.makeError (/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/logg er/src.ts/index.ts:269:28)
at Logger.throwError (/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/logg er/src.ts/index.ts:281:20)
at /home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/contr acts/src.ts/index.ts:268:20
at step (/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/cont racts/lib/index.js:48:23)
at Object.next (/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/cont racts/lib/index.js:29:53)
at fulfilled (/home/marko/Documents/Projects/hardhat-investigation/node_modules/@ethersproject/cont racts/lib/index.js:20:58) {
reason: 'non-payable method cannot override value',
code: 'UNSUPPORTED_OPERATION',
operation: 'overrides.value',
value: BigNumber { _hex: '0x0de0b6b3a7640000', _isBigNumber: true }
}
```

### Interact with ERC20: Using Approve or Transfer Methods
You can interact with the ECR20 contract instance by using the approve or transfer methods to check for emit events. Copy the script (below) into your **tests/** folder:

```
const testApproveAndTransfer = async () => {
   const testERC20 = await deployTestERC20();
   const receiver = "0xF102765ba64849f77A2AC31a58e787B23480a6E0";
   const approveReceipt = await (await testERC20.approve(receiver, 1)).wait(); const approveEvent = approveReceipt.events?.filter(
(e) => e.event === "Approval" );
   console.log(approveEvent);
   const transferReceipt = await (await testERC20.transfer(receiver, 1)).wait(); const transferEvent = transferReceipt.events?.filter(
(e) => e.event === "Transfer" );
   console.log(transferEvent); };
   testApproveAndTransfer();
}
```

Run the command to interact with this contract instance:

```
npx hardhat test
```
You will see the following execution results:

```
[
{
transactionIndex: 0, blockNumber: 47, transactionHash:
'0x932466bc7136971d0b3fb87c2a291f339bddcd9aad926625b20a5e774d32fe06', address: '0x29E9954586d5248A162D1bC9e128175dcAe7402e',
topics: [
'0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
'0x00000000000000000000000010c6b6538860f3409bd6a16bbe7d6cb7bb371cbe',
'0x000000000000000000000000f102765ba64849f77a2ac31a58e787b23480a6e0' ],
data: '0x0000000000000000000000000000000000000000000000000000000000000001',
logIndex: 0,
blockHash: '0x9d0c7f96ce3bb91c489ed32116aa4832de188a8c32436d53aac54a326264e40f',
args: [
'0x10C6b6538860f3409Bd6a16BBe7d6CB7BB371cBe', '0xF102765ba64849f77A2AC31a58e787B23480a6E0', BigNumber { value: "1" },
owner: '0x10C6b6538860f3409Bd6a16BBe7d6CB7BB371cBe', spender: '0xF102765ba64849f77A2AC31a58e787B23480a6E0', value: BigNumber { value: "1" }
],
decode: [Function (anonymous)],
event: 'Approval',
eventSignature: 'Approval(address,address,uint256)', removeListener: [Function (anonymous)],
getBlock: [Function (anonymous)],
getTransaction: [Function (anonymous)], getTransactionReceipt: [Function (anonymous)]
} ]
[ {
'0x2d0a4bf9182bf77949b37e66492844558b8a0011bf2e6270cf781f2481b2b80e', address: '0x29E9954586d5248A162D1bC9e128175dcAe7402e', topics: [
'0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
'0x00000000000000000000000010c6b6538860f3409bd6a16bbe7d6cb7bb371cbe',
'0x000000000000000000000000f102765ba64849f77a2ac31a58e787b23480a6e0' ],
data: '0x0000000000000000000000000000000000000000000000000000000000000001',
logIndex: 0,
blockHash: '0x5d68062189c3dfd49ae3d0f99b6850f1a19d96dea82a2798e4b5706b7209c2c1',
args: [
'0x10C6b6538860f3409Bd6a16BBe7d6CB7BB371cBe', '0xF102765ba64849f77A2AC31a58e787B23480a6E0', BigNumber { value: "1" },
from: '0x10C6b6538860f3409Bd6a16BBe7d6CB7BB371cBe', to: '0xF102765ba64849f77A2AC31a58e787B23480a6E0', value: BigNumber { value: "1" }
],
decode: [Function (anonymous)],
event: 'Transfer',
eventSignature: 'Transfer(address,address,uint256)', removeListener: [Function (anonymous)],
getBlock: [Function (anonymous)],
transactionIndex: 0, blockNumber: 48, transactionHa
getTransaction: [Function (anonymous)],
getTransactionReceipt: [Function (anonymous)] }
]
```

### Interact with ERC20: EOA to EOA Transaction
You can also interact with the ECR20 contract instance by making an EOA to EOA transaction. Copy the script (below) into your **tests/** folder:

```
const eoaToEoa = async () => {
   const receiver = "0xF102765ba64849f77A2AC31a58e787B23480a6E0"; 
   console.log(
`Receiver balance before: ${(
await ethers.provider.getBalance(receiver)
).toString()}` );
   const [sender] = await ethers.getSigners(); await sender.sendTransaction({
      to: receiver,
      value: ethers.utils.parseEther("1"), 
   });
   console.log(
`Receiver balance after: ${(
await ethers.provider.getBalance(receiver) ).toString()}`
); };
   eoaToEoa();
}
```

Run the command to interact with this contract instance:

```
npx hardhat test
```

You will see the following execution results:

```
Receiver balance before: 0
Receiver balance after: 1000000000000000000
```

## Connect to a Dapp
To connect your smart contract to an external client, such as your Dapp or MetMask, you first need to run the Hardhat Network as a standalone. Run the Hardhat Network by running the command:

```
npx hardhat node
```
You will see the following:

```
$ npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:9045/
```
This exposes a JSON-RPC interface to the Hardhat Network. Use the address, **http://127.0.0.1:9045/** in your Dapp.

**Note:** The port number may vary.  Check in your ***.conf** file.

