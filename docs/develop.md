---
sidebar_position: 3
---


# Develop and Deploy - Smart Contracts

There are many development tools you can use in creating and deploying a smart contract. For EON, the use of **Remix IDE**, **Hardhat**, or **Truffle** are highly recommended.

This chapter discusses how *__Remix IDE__*, *__Hardhat__* and *__Truffle__* are used for compiling, deploying, and interacting with the smart contract examples.


## Building Smart Contracts: Using Remix IDE

Use the Remix IDE to create and deploy smart contracts. It is an open source tool that helps you write Solidity contracts straight from a web browser. Remix IDE has modules for creating, testing, debugging, and deploying smart contracts.

### Prerequisites

To deploy a smart contract, complete the steps below:

* Install Remix IDE or use the online web version
* Create a project contract 
* Compile a contract
* Deploy a contract


**Important:** The following instructions to perform the prerequisites listed above should first be completed using the sample file provided in the Remix directory structure. Once you are comfortable using Remix, then you can perform the same tasks using the smart contract(s) that you actually created.
### Install Remix IDE

To install Remix, you can use the [online version](https://remix.ethereum.org/) or [download](https://github.com/ethereum/remix-desktop/releases) the app. Follow the instructions on the website to install Remix IDE.

Once you have installed the Remix IDE, the tool layout appears:

![launchpage](/img/docs/build/remixlaunch.png)

### Create a Project Contract
A project contract is a smart contract that you will create in order to test, deploy, and subsequently interact with. You will use a sample contract template to create your project contract. 

1. Go to the **File Explorer** pane. Click on the **Create New File** icon. 

![createfile](/img/docs/build/createnewfile.png)

2. A new file name field appears. Enter your desired file name.

![newfile](/img/docs/build/newfilename.png)

3. Use this sample project contract by copying and pasting it in the Editor panel. This sample contract is written in Solidity.

```

// SPDX-License-Identifier: GPL-3.0


pragma solidity ^0.7.6;


contract testContract {


    uint256 value;


    constructor (uint256 _p) {
        value = _p;
    }


    function setP(uint256 _n) payable public {
        value = _n;
    }


    function setNP(uint256 _n) public {
        value = _n;
    }


    function get () view public returns (uint256) {
        return value;
    }
}

```

In the **Editor** panel, your file name tab is active and the Solidity code appears. 

![code](/img/docs/build/contractcode.png)

### Compile a Contract
Before compiling your project contract, you can configure the Solidity compiler to perform a specific task(s). See the [Solidity Compiler](https://remix-ide.readthedocs.io/en/latest/compile.html) webpage for detailed information. Depending on the complexity of your smart contract, you can use the auto-compilation option as required. 

Perform the following steps to compile your contract:

1. In the **Icon panel**, click the **Solidity Compiler** icon. 
2. The Solidity Compiler appears in the side panel. 
3. Click **Compile &lt;Your contract file name&gt;**. In this example, the filename is *MyProjectContract.sol*.

![compiler](/img/docs/build/soliditycompiler.png)

**Note:** A check mark appears next to the task icons once the operation is complete.

## Deploying a Contract using Remix IDE

Once you have compiled your smart contract, use the Deploy and Run module to run and send transactions to the current environment. 

Perform the following steps to run and deploy your smart contract:

1. In the **Icon panel**, click the **Deploy and Run** icon. The **Deploy and Run module** appears in the **side panel**.

![deployrun](/img/docs/deploy/deployrun.png)

2. For EON, configure the **Deploy and Run module** settings with the following:

**Environment** - Click the drop-down menu to select the **Injected Provider** option.
This option allows Remix to use your wallet (e.g. MetaMask). Your wallet must be active and running.  The Environment option details information about your wallet, such as the ChainID.

**Note:** Make sure that **Yuma Testnet** is selected as the current environment in your wallet. See the [Get Started](https://eon.horizen.io/docs/) section for details on configuring Yuma Testnet to your wallet.


By default, the **Remix VM** (previously called JavaScript VM) is used to connect to a sandbox blockchain in the web browser. The London version refers to the London fork of Ethereum. 

**Account** - Click the drop-down menu to display a list of accounts associated with the current environment (and their associated balances). Since the Environment option is set to the **Injected Provider**, the list displays the available account(s) in your wallet. This is the account where the smart contract is deployed from. 

**Gas Limit** - This field sets the maximum amount of gas that will be allowed for all the transactions created in Remix. The Gas Limit value can be **ignored** at this time.

**Value** - This field sets the amount of **ZEN**. Given that Remix is a tool for Ethereum, the tokens listed in the drop-down menu reflect the amount of digits you wish to use for the value that is sent to a contract or a payable function.

Select one of the symbol you wish for the ZEN token conversion:

| Symbol/Unit | Value to use |
| ------ | ------ |
| Wei | ZEN x 10<sup>18</sup> |
| Gwei | ZEN x 10<sup>9</sup> |
| Ether | ZEN |

The **Value** field is always reset to 0 after each transaction execution. This field **DOES NOT** include gas.

3. Click **Deploy**. The **Deployed Contract** pane displays your contract set as TESTCONTRACT and location. This indicates that your smart contract is deployed and ready for interaction.

![deployedcontract](/img/docs/deploy/deployedcontracts.png)

### Interact with a Contract Instance

Interacting with your smart contract can be a simple transaction, such as sending some amount of Ether to trigger an action, unlike a generic smart contract method call, where a transaction will change the state of the EVM.

Perform the following steps to interact with run your smart contract:

1. In the **Deployed Contract** pane, click on the **right arrow** next to the filename to expand. In this example, the filename is TESTCONTRACT. The functions of the deployed contract are displayed.

![threebuttons](/img/docs/deploy/threebuttons.png)

Upon expanding the pane, your contract instance displays three actions that corresponds to the functions:

**SetNP (orange button)** - This is a non-payable function, where it is not possible to send value (ZEN) to the contract.

**SetP (red button)** - This is a payable function that sends value (ZEN) to the contract instance.

**get (blue button)** - The get function does not execute a transaction, therefore it does not change the state (the value variable in your contract) of your contract instance. However, it is a view function and a return value is shown.

2. Click on the **down arrow** next to the **setP** field to expand the function.

![expandfunction](/img/docs/deploy/expandfunction.png)

#### Non-Payable Functions

For **non-payable functions**, DO NOT specify a value other than zero (0). Any value more than 0 is not accepted by the smart contract and the transaction will fail.

![nonpayfunction](/img/docs/deploy/nonpayablefunction.png)

#### Payable Functions

For **payable functions**, you can specify an amount of ZEN in the Value field to be paid to the smart contract. A successful execution of the transaction subtracts this value amount including the required fees for a *normal* smart contract method call.

![payfunction](/img/docs/deploy/payablefunction.png)

If any issues arise, the Remix IDE will provide a status notification before confirming the operation.

![confirmation](/img/docs/deploy/confirmation.png)

3. In the expanded function (**setP**), enter a **desired value** in the **value** field.  

   **Note:** Initially, the fields, **setP** and **setNP** display *uint256*. This indicates that it is expecting an unsigned integer (256 bit) type to store non-negative integers.  

4. Click **transact**. The Terminal panel displays a success status for the interaction with your smart contract.

![sucessmessage](/img/docs/deploy/successmessage.png)

### Interaction with Sample Contract 

To illustrate interaction with smart contracts, the **EonWorkspace** is created in Remix. This workspace provides a set of script files to perform specific tasks, such as displaying information or executing a transaction within the blockchain.

In the **Remix File Explorer**, the scripts are located in the **examples** folder. To execute a script, select the desired filename.js file. Right-click to open the drop-down menu. Select **Run**. 

![eonworkspace](/img/docs/deploy/remix-script-rightclick.png)


### Get Basic Information

The script, **get basic information.js** displays the basic information that includes:

* Block Height
* Block 
* Chain ID
* Gas Price 

The **Remix Terminal** displays the results. 

![basicinfo](/img/docs/deploy/basic-info-remix.png)

### Deploy a Contract

The script, **deploy a contract.js** displays the contract address. 

The MetaMask wallet connected with Remix appears with a notification of the contract deployment. Click **Confirm** to proceed with the deployment.

![deployconfirm](/img/docs/deploy/metamask-deploy-confirm.png)

The **Remix Terminal** displays the results. 

![deploycontract](/img/docs/deploy/deploy-contract-remix.png) 

### Interact with Existing Contracts 
The script, **Interact with existing contracts.js** displays the wallet address invoking a contract.

The MetaMask wallet connected with Remix appears with a notification of the payable transaction of ZEN (TZEN). Click **Confirm** to proceed with the transaction.

![interactconfirm](/img/docs/deploy/metamask-interact-confirm.png)

The **Remix Terminal** displays the results. 

![remixinteract](/img/docs/deploy/interact-contract-remix.png)

The MetaMask wallet connected with Remix appears with a second notification of the payable transaction of **ZEN (TZEN)**. Click **Confirm** to complete the transaction.

![interactcomplete](/img/docs/deploy/metamask-interact-complete.png)

### EOA to EOA transaction 

The script, **Make EOA to EOA transactions.js** displays an EOA to EOA transaction.

The MetaMask wallet connected with Remix appears with a notification of the pending transaction of sending **ZEN (TZEN)** to the receiving address. Click **Confirm** to proceed with the transaction.

![eoaconfirm](/img/docs/deploy/metamask-eoa-confirm.png)

The **Remix Terminal** displays the results. 

![eoaeoa](/img/docs/deploy/eoa-eoa-remix-ok.png)

The MetaMask wallet appears with a second notification of the **Send** transaction of **ZEN (TZEN)** to the receiving address. 

![eoasend](/img/docs/deploy/metamask-eoa-send.png)

### Interact with Native Smart Contracts

The script, **Interact with native smart contracts.js** displays a [backwards transfer](/gethelp#backward-transfer) contract (native contract). 

The MetaMask wallet connected with Remix appears. Read the transaction information and click **Confirm**.

![nativeconfirm](/img/docs/deploy/metamask-native-confirm.png)

The **Remix Terminal** displays the results. 

![nativeinteract](/img/docs/deploy/native-interact-remix.png)

## Building Smart Contracts: Using Hardhat

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
      url: ‘https://yuma-testnet.horizenlabs.io/ethv1',
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


## Interact with a Contract Instance

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


## Building Smart Contracts: Using Truffle

Use Truffle to create and deploy smart contracts. Truffle is a development environment where you can develop smart contracts with its built-in testing framework, smart contract compilation, deployment, and interactive console.

### Prerequisites

To deploy a smart contract, complete the steps below:

* Install Truffle 
* Create a project contract 
* Compile a contract
* Test a contract

### Install Truffle

Install the following to your localhost:

**NodeJS (v18.0)** -  Install the long-term support (LTS) version. This bundle includes **NPM**.

To install **NodeJS** in your local system, perform the following steps:

1. Download the installer from [NodeJS](https://nodejs.org/en/download/) website.
2. Run the installer.
3. Follow the steps, agree on the license agreement.
4. Restart your local system.

**Note:** Do not use the sudo command to install Truffle. It may cause permission errors to occur.


```
npm install -g truffle
```


To confirm that Truffle is installed correctly, run the command:


```
truffle version
```



### Create a Project

Use the <strong><code>truffle init</code></strong> command to create the project folder and subfolders to put your Truffle project. In your localhost, perform the following commands:


```
mkdir truffle-project
cd truffle-project
truffle init
```

Next, go to the `truffle-project/contracts` directory for your smart contract(s). Use the following sample contract, **DemoToken.sol**:


```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 
contract DemoToken is ERC20 {
    constructor() ERC20("Demo Token", "DEMO"){
        // mint 100 tokens to the sender on deployment
        _mint(msg.sender, 100);
    }
}

```

**Note**: Make sure that the Solidity version (example: <code>solidity ^0.8.0;</code>) corresponds to the version in <code>truffle-config.js</code>.

Near the top of the sample contract is an import statement for the **ERC20** contract, which **DemoToken** inherits. Use NPM to install the contract. Run the command:

```
npm install @openzeppelin/contracts
```



### Compile a Contract

To compile the sample contract, <strong><code>DemoToken.sol</code></strong>, go to the <code>contracts/</code> directory and run the command:


```
truffle compile
```


You should see:


```
Compiling your contracts...
===========================
 
 
> Compiling ./contracts/DemoToken.sol
> Artifacts written to /Users/<home>/…/contracts
> Compiled successfully using:
- solc: 0.8.13+commit.abaa5c0e.Emscripten.clang

```



### Support for the ZEN Network

A network is needed in order to deploy a smart contract. In the configuration file, **truffle-config.js** (below), add in the network section with the following:


```
…networks: {    
	zen: {
		provider: () => new HDWalletProvider("word1 … word12", `https://yuma-testnet.horizenlabs.io/ethv1`),
      network_id: 1662,  
      production: false
    }
…
```

**WARNING:** The use and storage of your mnemonic seed phrase is your **sole responsibility**.


**Note**: In the account field, replace “**word1 … word12**” with a mnemonic seed phrase for a valid wallet. Use the following [instructions](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) to retrieve your mnemonic seed phrase from MetaMask.

The <code>network_id</code> is dependent on the environment in use and corresponds to the Chain ID. For Yuma Testnet, the Chain ID is **1662**.

Next, add this line at the top of the file:

```const HDWalletProvider = require('@truffle/hdwallet-provider');```

**Note**: The [Truffle HDWallet Provider](https://www.npmjs.com/package/@truffle/hdwallet-provider) helps in configuring the network connection as well as to sign transactions for addresses derived from the 12-word mnemonic.

Then, use NPM to install HDWallet Provider by running the command:

```
npm install @truffle/hdwallet-provider
```



## Set EON EVM as Network Provider

Set EON EVM as the network provider to get an interactive console to execute commands.

Run the command:


```
truffle console --network zen
```



### Get Basic Information

Use the interactive console to get basic information for the following:


#### Block Height


```
truffle(zen)> web3.eth.getBlockNumber()
2976
```



#### Chain ID 


```
truffle(zen)> web3.eth.getChainId()
1662
```



#### Gas Cost


```
truffle(zen)> web3.eth.getGasPrice()
"7"
```
## Deploying a Contract using Truffle

Once the DemoToken contract is successfully compiled, it can now be deployed. 
However, before deploying, make sure that the account you plan to use has sufficient ZEN. See [Get Started](/#connect-to-a-wallet) to install the MetaMask wallet, if needed. To deploy a contract on Dune Testnet or Yuma Testnet, your account must have sufficient ZEN. You can get some free test ZEN by using the [**Faucet**](https://yuma-testnet-faucet.horizen.io/ ).


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

The target mainchain address of a backward transfer must be a **valid address** with the following format:

1. Use **zn** for *mainnet* or **zt** for *testnet*.


    Example: ztWBHD2Eo6uRLN6xAYxj8mhmSPbUYrvMPwt


2. The address must be decoded.


    Example: 0x2098212831547ff1a3508ae0d1c79f43bc7920c15ebfbccfefd7


3. Remove the CRC and network identifier (the network identifier is in the first two bytes).


    Example: 0x212831547ff1a3508ae0d1c79f43bc7920c15ebf 

The operation can be performed either with a library (such as a base58 for Javascript, which Horizen does not provide) or with some online editing tools.


In the example below, the mcAddress is 0x212831547ff1a3508ae0d1c79f43bc7920c15ebf.


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

## Local Build and Deploy 

*Learn how to set up a local environment or a local Yuma testnet node to build a dApp (decentralized application).*

In this section, you will accomplish the following:

* Deploy an existing dApp into a local environment or Yuma Testnet
* Run a private instance of EON 

The easiest way to deploy a dApp is to use **Docker**. The EON client will be running in a Dockerized container. See **[Node Client](#node-client)** below.

Horizen provides two separate projects to enable:

* **SANDBOX:** creating a personal sandboxed blockchain 
* **TESTNET:** starting your EON node

For using a **personal sandboxed blockchain**, there is no required configuration. A local and disposable sidechain will be created from scratch with the latest available version of EON. Check the **.env** file for the port you will use for RPC calls. 

Horizen repositories are open source, including EON. The code can be pulled from the GitHub repository and executed. However, this is not considered in the scope of the testnet documentation. 

**Note:** EON is considered a sample application of what can be built using our Sidechains-SDK, which is why you will find it in the same repository.

At the time of this writing, EON is not finalized. It is recommended to use the **M3-V2** tag.  

### Node Client
To start your node, run our Docker compose (a tool required to run our multi-container application) on your computer. Next, open a terminal and execute some simple commands.

#### Set Up

1. Remove any previous version of Docker including any Docker-compose plugins before starting.

2. Install Docker, the Docker compose v2 (which is included as a plugin with **apt install**), bc (arbitrary precision calculator language) and jq (a command-line JSON processor), using the following commands:

Update dependencies.

```
sudo apt-get update
sudo apt-get -y install bc jq pwgen
```

Install Docker by following the instructions from the [official Docker guide](https://docs.docker.com/engine/install/).

Add a Docker group if it does not exist.

```
groupadd -g 999 docker 2>&1 || groupmod -g 999 docker
```

Get *'docker compose'* bash completion.

```
curl -fsSL https://raw.githubusercontent.com/docker/cli/master/contrib/completion/bash/docker -o /etc/bash_completion.d/docker
```

**Note:** Step 2 refers to Ubuntu or almost any Debian-based Linux distro. Check the [official Docker guide](https://docs.docker.com/engine/install/) for other OS or other kinds of incompatibilities.

3. Clone this Horizen repository using the following command:

**Note:** See [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=cli) for detailed cloning instructions.

```
git clone https://github.com/HorizenLabs/$PROJECT.git
```

Where **$PROJECT** is replaced by one of the following projects, depending on what you have decided to run:

* compose-evm-regtest-simplified → for YUMA SANDBOX
* compose-evm-testnet-simplified → for YUMA TESTNET

4. Set up environment variables in the **.env** file:

```
SCNODE_NET_NODENAME= # This variable requires a name. Enter a name using characters, special characters, or numbers. 
SCNODE_WALLET_SEED= # This variable can be empty or filled with a random string.
SCNODE_REST_PASSWORD= # Use this variable only to set up authentication on the rest api endpoints, where you have to uncomment.
```

5. Build the project by using the following command:

```
./scripts/init.sh
```

You are now set, the **client** starts automatically.

**Note:** YUMA TESTNET requires time to synchronize the entire blockchain. While waiting, check the progress by comparing the last block in the [Yuma Explorer](https://yuma-explorer.horizen.io) with the response of the following RPC method:

```
curl -X POST "http://127.0.0.1:9545/ethv1/" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":"test"}' -H "accept: application/json"
```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 

### Run the Client
If you have performed the previous setup instructions and you want to restart the client, run the following command at the root folder of the project (inside the cloned repository):

```
docker compose up -d
```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 

### Configuration
Set up your network provider as **localhost (127.0.0.1)** and **port (9545)**, and also change the **Chain ID** according to the environment you are using.

##### YUMA SANDBOX

```
Network name:  Yuma Sandbox 
New RPC URL:  http://127.0.0.1:9545/ethv1
Chain ID: 1997 
Currency symbol: ZEN
Block Explorer: _leave blank_
```
**Note:** The **Yuma Explorer** is not available for this sandbox environment.

##### YUMA TESTNET (localhost)

```
Network name:  Yuma Testnet Local
New RPC URL:  http://127.0.0.1:9545/ethv1 
Chain ID: 1662
Currency symbol: ZEN
Block Explorer: https://yuma-explorer.horizen.io
```

**Note:** For configuring a wallet or network provider with the testnet local node the "RPC Server" must be the **local one (localhost)**. Use the **Chain ID** for  the  corresponding  testnet. 

### Why Should I Run a Node?

Running your own node preserves your privacy and bolsters your security. It also allows you to prove that no one is manipulating the transactions in EON or changing any rules.

### Privacy Benefits

When you run your own node, you can create and broadcast transactions directly from the node, thereby avoid using services that might compromise private information. A node also removes the need to use a block explorer to verify the status of your transactions. Block explorers allow third parties to track your transaction history by linking it to your IP address, leaking your physical location, your balance, and your financial counterparties.
Horizen does not collect private information. However, by providing free access to the code, Horizen cannot guarantee the same privacy with third-party operated dApps, and in either way the statement cannot be "**trustless**".

### Security Benefits
Using an EON node to create transactions can also improve your security by reducing or eliminating the need to expose your private keys to the internet through a web browser. The private key is required to sign the transactions before submission, while the signature generally takes place locally.

**Note:** If you own a Validator node, you will benefit from the latest secure enclave features for key management, where the documentation is shared privately. In this case, the signature occurs in a remote trusted execution environment.

# Verifying a Smart Contract on Blockscout

Any deployed smart contract can be verified using the EON Explorer.  The verification process begins with submitting the smart contract's source code to EON Explorer. The EON Explorer compares the submitted source code with the deployed byte code. If there is a match, then the smart contract is verified successfully, whereby the EON Explorer generates an interface to call the methods of the contract.

**Note:** It is highly recommended that you use the **Chrome web browser** to interact with the **EON Explorer** for optimized user experience.

The major steps for verifying a smart contract are:

* Deploy a smart contract to the Yuma Testnet network


* Flatten the smart contract, if needed
* Check for the deployed contract using the EON Explorer
* Verify and publish the contract

Make sure that you deploy your contract to the Yuma Testnet. If you are using a wallet, you must connect it to the Yuma Testnet network.

Use the following parameters to connect to Yuma Testnet:

```
Network name:  Yuma Testnet 
New RPC URL:  https://yuma-testnet.horizenlabs.io/ethv1 
Chain ID: 1662 
Currency symbol: ZEN
```

In this exercise, the [EON Explorer](https://yuma-explorer.horizen.io/) is connected to the Yuma Testnet. The smart contract was developed and deployed to the Yuma Testnet network. The verification process will be performed using the **Via flattened source code** option in the EON Explorer.

### Flatten the Smart Contract

Before using the EON Explorer for verification, make sure the Yuma Testnet network has the deployed smart contract you want to verify. You need to flatten the smart contract if the contract inherits from other contracts or if it uses a library. Flattening a smart contract refers to combining all Solidity code into one file instead of multiple source files, thereby having the imported code be embedded in the same file. 

All smart contract development tools have a source code flattener. For example: 

* **Truffle** - uses the [Truffle Flattener](https://www.npmjs.com/package/truffle-flattener)
* **Hardhat** - uses the [Hardhat Flattener](https://hardhat.org/hardhat-runner/docs/advanced/flattening) 
* The [POA Solidity Flattener](https://github.com/poanetwork/solidity-flattener) can be used to flatten a smart contract
* **Remix** - provides a built-in flattener tool
 
**Note:** In the **Remix Explorer**, select your smart contract file ( **.sol** ) to flatten, then right-click on the flattener tool. 

### Check for the Deployed Contract

In the [EON Explorer](https://yuma-explorer.horizen.io/), perform the following steps to begin the verification process:

1. Once you have deployed your contract, your developer tool will display the address the network has assigned your contract to. Copy that address.

2. Open the EON Explorer and paste the contract address into the **Search** field.

![alt_text](/img/docs/deploy/contract-address.png)

3. The **Contract Address Details** page appears. Review the information displayed. In the lower pane, click **Code**.

![alt_text](/img/docs/deploy/address-details.png)

4. The **Contract Creation Code** page appears. Click **Verify & Publish**. 

![alt_text](/img/docs/deploy/verify-publish.png)

5. The **New Smart Contract Verification** page appears. It displays the contract address and various methods for verifying. By default, the **Via flattened source code** is selected.

![alt_text](/img/docs/deploy/viaflattenedsource.png)

6. In the **New Smart Contract Verification** page, click **Next**. A form page appears. 

![alt_text](/img/docs/deploy/verifyform.png)

Set the form with the following:

  * **Contract name:** The name of the class called in the **.sol** file is the contract name. For example, *Owner* is the contract name.

  * **Include Nightly Builds:** By default, **No** is selected. Change only to **Yes** for nightly builds.

  * **Compiler:** Make sure that you select the same version that you used to compile your contract.

  * **EVM Version:** See the EVM version information. In this example, it is **default**.

  * **Optimization:** Set to **No** unless you explicitly chose *optimization* when you compiled your contract.

  * **Enter the Solidity Contract Code:** Enter your Solidity contract code in this field. For example, the content of the **Token.sol** file is entered. 

  * **Try to fetch constructor arguments automatically:** By default, **Yes** is enabled. If similar contracts exist, their constructor arguments may be available.

  * **ABI-encoded Constructor Arguments:** See the [ABI Constructor Arguments](https://docs.blockscout.com/for-users/abi-encoded-constructor-arguments) for detailed information. 

  * **Add Contract Libraries:** Enter the **name** and **0x address** of any required libraries called in the **.sol** file. If your contract is  flattened, you do not need to add a contract library.

7. Click **Verify & publish**. A checkmark symbol appears next to the **Code** tab if successful. Also, the **Read Contract** tab and the **Write Contract** tab will appear.

  **Note:** It is recommended **NOT** to use the **Brave web browser** for **EON Explorer** contract verification because of interface limitations.
  
8. Click the **Read Contract** tab or **Write Contract** tab to display and interact with the contract details and any related transactions. 

![alt_text](/img/docs/deploy/verifysuccess1.png)

![alt_text](/img/docs/deploy/verifysuccess2.png)
