---
title: Hardhat
---

## Using Hardhat

When using the Hardhat development tool, you will use the main component, Hardhat Runner, to interact with in creating and deploying your smart contract. 

**Note:** See the [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview) website for detailed information on installing and using Hardhat Runner.

### Prerequisites
**Note:** Hardhat recommends that you use TypeScript or JavaScript for the setup of your project, testing, and deployment of your contracts. However, the steps that you will be performing use TypeScript in the instructions.

Before you can begin to deploy your smart contract, make sure you have completed the following:

* Install Hardhat
* Create a project 
* Compile a contract


Afterwards, you can deploy a smart contract and then connect to your dApp.

**Important:** The following instructions to perform the prerequisites listed above should first be completed. Once you are comfortable using Hardhat, then you can perform the same tasks using the smart contract(s) that you actually created.

### Install Hardhat

To install Hardhat, you first need to install the following to your localhost:

**NodeJS (v14.17.0)** -  Install the long-term support (LTS) version. This bundle includes npm.

**Yarn** - Yarn is used to install and run itself in your JavaScript projects. 

```
npm install -g yarn
```
Install the Hardhat library in your localhost. Run the command:

```
npm install --save hardhat 
```

### Create a Project
Create a new folder for your NPM project. Run the command:

```
npm init
```
To create a smart contract project (in your project folder), run the command:

```
npx hardhat 
```
You will see the following:

$ npx hardhat
```
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888


👷 Welcome to Hardhat v2.12.0 👷‍


? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```

Create a project using TypeScript and install additional dependencies. Run the commands:

```
npm install --save-dev typescript
```

```
npm install --save-dev ts-node
```

```
npm install --save @nomicfoundation/hardhat-toolbox
 ```

Hardhat provides a list of available tasks that you can run. In your project folder, run the command:

```
npx hardhat
```
You will see the following:

```
$ npx hardhat
Hardhat version 2.12.0


Usage: hardhat [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]


GLOBAL OPTIONS:


  --config              A Hardhat config file.
  --emoji               Use emoji in messages.
  --help                Shows this message, or a task's help if its name is provided
  --max-memory          The maximum amount of memory that Hardhat can use.
  --network             The network to connect to.
  --show-stack-traces   Show stack traces.
  --tsconfig            A TypeScript config file.
  --verbose             Enables Hardhat verbose logging
  --version             Shows hardhat's version.




AVAILABLE TASKS:


  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  flatten               Flattens and prints contracts and their dependencies
  help                  Prints this message
  node                  Starts a JSON-RPC server on top of Hardhat Network
  run                   Runs a user-defined script after compiling the project
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies contract on Etherscan

To get help for a specific task run: npx hardhat help [task]
```


Hardhat provides a list of all the tasks you can perform. However, you will be performing the run, test, and compile tasks.


### Add the ZEN Network
In order to deploy your smart contract, you will need a network. In the configuration file, **hardhat.config.ts**, replace the content with the following:

**Note:** In the account field, replace “word1 … word12” with a valid seed phrase.

```
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "zen",
  networks: {
    zen: {
      url: ‘https://gobi-testnet.horizenlabs.io/ethv1',
      accounts: {mnemonic: "word1 … word12"},
      gasPrice: "auto"
    }, 
  
  }
};


export default config;
```

### Compile a Contract
In your project folder, create a folder called, **contracts/** to store all your smart contracts. Use the following sample contract files to compile and test. 

#### Sample contract ERC20.sol

Use the [ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol) file in GitHub.

```
/ SPDX-License-Identifier: MIT pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestERC20 is ERC20 {
   constructor(uint256 initialSupply) ERC20("Test", "TST") {
      _mint(msg.sender, initialSupply); 
   }
}
```

#### Sample contract TestPayable.sol

Copy and paste the **TestPayable.sol** file to your contracts folder:

```
// SPDX-License-Identifier: MIT pragma solidity ^0.8.0;
contract TestPayable {
   string public sentence = "This is payable";
   event Pay(address payer, uint256 amount); constructor() {}
   receive() external payable {}
   function pay() external payable {
      emit Pay(msg.sender, msg.value);
   }
   function dontPay() external {} 
}
```

To compile the sample contract file, run the command:

``
npx hardhat compile
``


Because you used TypeScript, the compile task also generates TypeScript bindings using [TypeChain](https://www.npmjs.com/package/typechain).

## Deploying a Contract using Hardhat
To deploy a contract, you will use a deployment script that is specific for your smart contract. Go to the `script/` folder and find the following deploy.ts file:

### Deploy contract ERC20.sol
To deploy your contract ERC20.sol, create a folder in your Hardhat project and name it, **scripts/**. Copy this script (below) and name it **ERC20.ts**.  

Before you can deploy a contract, you need to add the import statement by running the command:

```
import {ether} from hardhat;
```


Use the deployment script for the contract, ERC20.sol:

```
const deployERC20 = async () => {
   const ERC20 = await ethers.getContractFactory("ERC20"); 
   const erc20 = await ERC20.deploy("Test", "TST");
   await erc20.deployed();
   console.log(erc20.address); 
};
deployERC20();
```

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
   const Payable = await ethers.getContractFactory("TestPayable"); 
   const payable = await Payable.deploy();
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


### Interact with a Contract Instance

To interact with your deployed smart contract, create a folder in your Hardhat project and name it, **tests/**. You will add test scripts that are specific to your contract instance as well as other contracts.

### Interact with TestPayable: With ABI and Without ABI
Interact with TestPayable by passing the ABI and without passing the ABI. Copy the script (below) into your **test/** folder:

```
const contractInteraction = async () => {
   const payableAddress = await deployPayable();
   // passing the ABI
   const payable = await ethers.getContractAt("TestPayable", payableAddress); 
   await payable.pay({ value: ethers.utils.parseEther("1") });
   // without passing the ABI
   const [sender] = await ethers.getSigners(); 
   await sender.sendTransaction({
      to: payableAddress,
      value: ethers.utils.parseEther("1"), 
   });
   console.log((await ethers.provider.getBalance(payableAddress)).toString()); 
};
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
Interact with TestPayable by using the Read function. Copy the script (below) into your **test/** folder:

```
const read = async () => {
   const payable = await ethers.getContractAt(
      "TestPayable",
      await deployPayable() 
   );
   console.log(await payable.sentence()); 
};
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
   await payable.dontPay({ value: ethers.utils.parseEther("1") }); 
};
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
You can interact with the ERC20 contract instance by using the approve or transfer methods to check for emit events. Copy the script (below) into your **tests/** folder:

```
const testApproveAndTransfer = async () => {
   const testERC20 = await deployTestERC20();
   const receiver = "0xF102765ba64849f77A2AC31a58e787B23480a6E0";
   const approveReceipt = await (await testERC20.approve(receiver, 1)).wait(); 
   const approveEvent = approveReceipt.events?.filter(
(e) => e.event === "Approval" );
   console.log(approveEvent);
   const transferReceipt = await (await testERC20.transfer(receiver, 1)).wait(); 
   const transferEvent = transferReceipt.events?.filter(
(e) => e.event === "Transfer" );
   console.log(transferEvent); 
};
testApproveAndTransfer();
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
   console.log(`Receiver balance before: ${(await ethers.provider.getBalance(receiver)).toString()}` );
   const [sender] = await ethers.getSigners(); 
   await sender.sendTransaction({
      to: receiver,
      value: ethers.utils.parseEther("1"), 
   });
   console.log(`Receiver balance after: ${(await ethers.provider.getBalance(receiver)).toString()}`); 
};
eoaToEoa();
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

## Connect to a dApp
To connect your smart contract to an external client, such as your dApp or MetMask, you first need to run the Hardhat Network as a standalone. Run the Hardhat Network by running the command:

```
npx hardhat node
```
You will see the following:

```
$ npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:9045/
```
This exposes a JSON-RPC interface to the Hardhat Network. Use the address, **http://127.0.0.1:9045/** in your dApp.

**Note:** The port number may vary.  Check in your ***.conf** file.


