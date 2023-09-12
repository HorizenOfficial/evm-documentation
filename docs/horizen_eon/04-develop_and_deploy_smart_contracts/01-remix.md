---
title: Remix IDE
---



## Using Remix IDE

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

1. In the **Icon panel**, click the **DEPLOY & RUN** icon. The **DEPLOY & RUN TRANSACTIONS** appears in the **side panel**.

![deployrun](/img/docs/deploy/deployrun.png)

2. For EON, configure the **DEPLOY & RUN TRANSACTIONS** settings with the following:

**Environment** - Click the drop-down menu to select the **Injected Provider** option.
This option allows Remix to use your wallet (e.g. MetaMask). Your wallet must be active and running.  The Environment option details information about your wallet, such as the ChainID.

**Note:** Make sure that **Gobi Testnet** is selected as the current environment in your wallet. See the [Get Started](https://eon.horizen.io/docs/) section for details on configuring Gobi Testnet to your wallet.


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

**Note:** The EonWorkspace file is available as a gist link using the Remix IDE.

To use the EonWorkspace example files, perform the following:

* Access the [EonWorkspace files](https://remix.ethereum.org/#version=soljson-v0.8.18+commit.87f61d96.js&optimize=false&runs=200&gist=ba9cb95ef4cd4ad3c55f2094029d22c3) - The Remix IDE automatically loads the workspace.
* In the Remix IDE, set the execution environment to **Injected Provider** in the **DEPLOY & TRANSACTIONS** pane.
* Make sure that your **MetaMask** wallet is connected to the **Gobi Testnet**.


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

The script, **Interact with native smart contracts.js** displays a [backwards transfer](horizen_eon/get_help/terminology#backward-transfer) contract (native contract). 

The MetaMask wallet connected with Remix appears. Read the transaction information and click **Confirm**.

![nativeconfirm](/img/docs/deploy/metamask-native-confirm.png)

The **Remix Terminal** displays the results. 

![nativeinteract](/img/docs/deploy/native-interact-remix.png)


