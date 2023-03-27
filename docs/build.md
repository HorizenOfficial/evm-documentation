---
sidebar_position: 4
---

# Build

*Learn how to write smart contracts and get basic information from EON EVM.*


## Smart Contracts

There are many development environment tools you can use in creating and deploying a smart contract. For EON, the use of **Truffle**, **Hardhat**, or **Remix IDE** are highly recommended.

This section shows how *__Truffle__* and *__Remix IDE__* are used for implementing the smart contract examples.

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

**NodeJS (v18.0) **-  Install the long-term support (LTS) version. This bundle includes **NPM**.

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

**Note**: Make sure that the Solidity version (example: <code>solidity ^0.8.0;</code>) corresponds to the version in <code>truffle.config.js</code>.

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
		provider: () => new HDWalletProvider("word1 … word12", `https://evm-tn-m2.horizenlabs.io/ethv1`),
      network_id: 1661,  
      production: false
    }
…
```

**WARNING:** The use and storage of your mnemonic seed phrase is your **sole responsibility**.


**Note**: In the account field, replace “**word1 … word12**” with a mnemonic seed phrase for a valid wallet. Use the following [instructions](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) to retrieve your mnemonic seed phrase from MetaMask.

The <code>network_id</code> is dependent on the environment in use and corresponds to the Chain ID. For Dune Testnet, the Chain ID is **1661**.

Next, add this line at the top of the file:

```// const HDWalletProvider = require('@truffle/hdwallet-provider');```

**Note**: The [Truffle HDWallet Provider](https://docs.google.com/document/d/1Eg0S8f0aKUltwQyMPZiAlSzXgWuv4dbWV8G140EfLPc/edit#heading=h.a5ho8bfasvz3) helps in configuring the network connection as well as to sign transactions for addresses derived from the 12-word mnemonic.

Then, use NPM to install HDWallet Provider by running the command:

```
npm install @truffle/hdwallet-provider
```



### Set EON EVM as Network Provider

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
1661
```



#### Gas Cost


```
truffle(zen)> web3.eth.getGasPrice()
"7"
```

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

![alt_text](/img/docs/build/remixlaunch.png)

### Create a Project Contract
A project contract is a smart contract that you will create in order to test, deploy, and subsequently interact with. You will use a sample contract template to create your project contract. 

1. Go to the **File Explorer** pane. Click on the **Create New File** icon. 

![alt_text](/img/docs/build/createnewfile.png)

2. A new file name field appears. Enter your desired file name.

![alt_text](/img/docs/build/newfilename.png)

3. Use this sample project contract by copy and paste it in the Editor panel. This sample contract is written in Solidity.

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

![alt_text](/img/docs/build/contractcode.png)

### Compile a Contract
Before compiling your project contract, you can configure the Solidity compiler to perform a specific task(s). See the [Solidity Compiler](https://remix-ide.readthedocs.io/en/latest/compile.html) webpage for detailed information. Depending on the complexity of your smart contract, you can use the auto-compilation option as required. 

Perform the following steps to compile your contract:

1. In the **Icon panel**, click the **Solidity Compiler** icon. 
2. The Solidity Compiler appears in the Side panel. 
3. Click **Compile &lt;Your contract file name&gt;**. In this example, the filename is *MyProjectContract.sol*.

![alt_text](/img/docs/build/soliditycompiler.png)

**Note:** A check mark appears next to the task icons once the operation is complete.
### Deploy a Contract
Once you have compiled your smart contract, use the Deploy and Run module to run and send transactions to the current environment. 

Perform the following steps to run and deploy your smart contract:

1. In the **Icon panel**, click the **Deploy and Run** icon. The **Deploy and Run module** appears in the **Side panel**.

![alt_text](/img/docs/build/deployrun.png)

2. For EON, configure the **Deploy and Run module** settings with the following:

**Environment** - Click the drop-down menu to select the **Injected Provider** option.
This option allows Remix to use your wallet (e.g. Metamask). Your wallet must be active and running.  The Environment option details information about your wallet, such as the ChainID.

**Note:** Make sure that **Yuma Testnet** is selected as the current environment in your wallet. See [Get Started](https://eon.horizen.io/docs/) chapter for details on configuring Yuma Testnet to your wallet.


By default, the **Remix VM** (previously called JavaScript VM) is used to connect to a sandbox blockchain in the web browser. The London version refers to the London fork of Ethereum. 

**Account** - Click the drop-down menu to display a list of accounts associated with the current environment (and their associated balances). Since the Environment option is set to the **Injected Provider**, the menu shows the available accounts in your wallet. 

**Gas Limit** - This field sets the maximum amount of gas that will be allowed for all the transactions created in Remix. The Gas Limit value can be **ignored** at this time.

**Value** - This field sets the amount of **ZEN**. Given that Remix is a tool for Ethereum, the tokens listed in the drop-down menu reflect the amount of digits you wish to use for the value that is sent to a contract or a payable function.

Select one of the symbol you wish for the ZEN token conversion:

| Symbol/Unit | Value to use |
| ------ | ------ |
| Wei | ZEN*10^18 |
| Gwei | ZEN*10^9 |
| Ether | ZEN |

The **Value** field is always reset to 0 after each transaction execution. This field **DOES NOT** include gas.


3. Click **Deploy**. The **Deployed Contract** pane displays your contract set as TESTCONTRACT and location. This indicates that your smart contract is deployed and ready for interaction.

![alt_text](/img/docs/build/deployedcontracts.png)

### Interact with a Contract Instance

Interacting with your smart contract can be a simple transaction such as sending a payable amount of Ether, for example. A transaction will change the state of the EVM.

Perform the following steps to interact with run your smart contract:

1. In the **Deployed Contract** pane, click on the **right arrow** next to the filename to expand. In this example, the filename is TESTCONTRACT. The functions of the deployed contract are displayed.

![alt_text](/img/docs/build/threebuttons.png)

Upon expanding the pane, your contract instance displays three actions that corresponds to the functions:

**SetP (red button)** - This is a payable function that sends value (ZEN) to the contract instance.

**SetNP (orange button)** - This is a non-payable function, where it is not possible to send value (ZEN) to the contract.

**get (blue button)** - The get function does not execute a transaction, therefore it does not change the state (the value variable in your contract) of your contract instance. However, it is a view function and a return value is shown.

2. Click on the **down arrow** next to the **setP** field to expand the function.

![alt_text](/img/docs/build/expandfunction.png)

#### Non-Payable Functions

For **non-payable functions**, DO NOT specify a value other than zero (0). Any value more than 0 is not accepted by the smart contract and the transaction will fail (in this example, Value is 100 and setNP is 18).

![alt_text](/img/docs/build/nonpayablefunction.png)

#### Payable Functions

For **payable functions**, you can specify an amount of ZEN in the Value field to be paid to the smart contract. A successful execution of the transaction subtracts this value amount including the required fees for a *normal* smart contract method call.

![alt_text](/img/docs/build/payablefunction.png)




If any issues arise, the Remix IDE will provide a status notification before confirming the operation.

![alt_text](/img/docs/build/confirmation.png)

3. In the expanded function (**setP**), enter a **desired value** in the **value** field. Currently, this field is filled with 256. 

4. Click **transact**. The Terminal panel displays a success status for the interaction with your smart contract.

![alt_text](/img/docs/build/successmessage.png)
