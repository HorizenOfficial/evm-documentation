---
sidebar_position: 4
---

# Build

*Learn how to write smart contracts and get basic information from EON EVM.*


## Smart Contracts

There are many development environment tools you can use in creating and deploying a smart contract. For EON, the use of **Truffle**, **Hardhat**, or **Remix IDE** are highly recommended.

This section shows how *__Truffle__* and *__Hardhat__* are used for implementing the smart contract examples.

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
		provider: () => new HDWalletProvider("word1 … word12", `https://gobi-rpc.horizenlabs.io/ethv1`),
      network_id: 1663,  
      production: false
    }
…
```

**WARNING:** The use and storage of your mnemonic seed phrase is your **sole responsibility**.


**Note**: In the account field, replace “**word1 … word12**” with a mnemonic seed phrase for a valid wallet. Use the following [instructions](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) to retrieve your mnemonic seed phrase from MetaMask.

The <code>network_id</code> is dependent on the environment in use and corresponds to the Chain ID. For Gobi Testnet, the Chain ID is **1663**.

Next, add this line at the top of the file:

```const HDWalletProvider = require('@truffle/hdwallet-provider');```

**Note**: The [Truffle HDWallet Provider](https://docs.google.com/document/d/1Eg0S8f0aKUltwQyMPZiAlSzXgWuv4dbWV8G140EfLPc/edit#heading=h.a5ho8bfasvz3) helps in configuring the network connection as well as to sign transactions for addresses derived from the 12-word mnemonic.

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
1663
```



#### Gas Cost


```
truffle(zen)> web3.eth.getGasPrice()
"7"
```

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
      url: ‘https://gobi-rpc.horizenlabs.io/ethv1',
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



## Build a dApp Locally

*Learn how to set up a local environment or a local Gobi testnet node to build a dApp (decentralized application).*

In this section, you will accomplish the following:

* Deploy an existing dApp into a local environment or Gobi Testnet
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

* compose-evm-regtest-simplified → for GOBI SANDBOX
* compose-evm-testnet-simplified → for GOBI TESTNET

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

**Note:** GOBI TESTNET requires time to synchronize the entire blockchain. While waiting, check the progress by comparing the last block in the [Gobi Explorer](https://gobi-explorer.horizen.io) with the response of the following RPC method:

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

##### GOBI SANDBOX

```
Network name:  Gobi Sandbox 
New RPC URL:  http://127.0.0.1:9545/ethv1
Chain ID: 1997 
Currency symbol: ZEN
Block Explorer: _leave blank_
```
**Note:** The **Gobi Explorer** is not available for this sandbox environment.

##### GOBI TESTNET (localhost)

```
Network name:  Gobi Testnet Local
New RPC URL:  http://127.0.0.1:9545/ethv1 
Chain ID: 1663
Currency symbol: ZEN
Block Explorer: https://gobi-explorer.horizen.io
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


