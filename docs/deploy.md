---
sidebar_position: 4
---

# Deploy


## Smart Contracts

There are many development environment tools you can use in creating and deploying your smart contract. For our EVM implementation, the use of **Truffle, Hardhat**, or **Remix IDE** are highly recommended.

In this first integration guide we will cover Truffle with examples.


## Deploying Smart Contract: Using Truffle

Use Truffle to create and deploy smart contracts. Truffle is a development environment where you can develop smart contracts with its built-in testing framework, smart contract compilation, deployment, and interactive console.


### Prerequisites

Before you can begin to deploy your smart contract, make sure you have completed the following:



* Install Truffle 
* Create a project contract 
* Compile a contracts
* Test a contract


### Install Truffle 

To install Truffle, you first need to install the following to your localhost:

**NodeJS (v14.17.0) **-  Install the long-term support (LTS) version. This bundle includes **NPM**.

**Note:** Do not use the sudo command to install Truffle. It may cause permission errors to occur.


```
npm install -g truffle
```


To confirm that Truffle is installed correctly, run the command:


```
truffle version
```



### Create a Project

Create a folder to put your Truffle project. In your localhost, perform the following commands:


```
mkdir truffle-project
cd truffle-project
truffle init
```


Next, In the `truffle-project` directory, create a subfolder called, `contracts/` for your smart contract(s). Use the following sample contract, <strong><code>ForgerStakes.sol</code></strong>:


```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

type StakeID is bytes32;

// contract address: 0x0000000000000000000022222222222222222222
interface ForgerStakes {

    struct StakeInfo {
        StakeID stakeId;
        uint256 stakedAmount;
        address owner;
        bytes32 publicKey;
        bytes32 vrf1;
        bytes1 vrf2;
    }

    function getAllForgersStakes() external view returns (StakeInfo[] memory);

    function delegate(bytes32 publicKey, bytes32 vrf1, bytes1 vrf2, address owner) external payable returns (StakeID);

    function withdraw(StakeID stakeId, bytes1 signatureV, bytes32 signatureR, bytes32 signatureS) external returns (StakeID);
}
```



### Compile a Contract

To compile the sample contract, <strong><code>ForgerStakes.sol, go to</code></strong> <code>contracts/</code> directory and run the command:


```
truffle compile
```


You should see:


```
Compiling your contracts...
===========================
> Compiling ./contracts/ForgerStakes.sol
> Artifacts written to /Users/<home>/…/contracts
> Compiled successfully using:
- solc: 0.8.13+commit.abaa5c0e.Emscripten.clang
```



### Support for the ZEN Network

In order to deploy your smart contract, you will need a network. In the configuration file, **truffle-config.js** (below), add in the network section with the the following:

**Note:** In the account field, replace “**word1 … word12**” with a mnemonic seed phrase for a valid wallet. The <strong><code>network_id</code></strong> is dependent on the environment in use.


```
…networks: {    
	zen: {
		provider: () => new HDWalletProvider("word1 … word12", `https://evm-tn-m2.horizenlabs.io/ethv1`),
      network_id: 1661,  
      production: false
    }
…
```


Next, uncomment the following line:


```
// const HDWalletProvider = require('@truffle/hdwallet-provider');
```


Then, use NPM to install HDWallet Provider by running the command:


```
npm install @truffle/hdwallet-provider
```



### Set EVM Sidechain as Network Provider

Set the EVM sidechain as the network provider to get an interactive console to execute commands. 

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



#### chainId 


```
truffle(zen)> web3.eth.getChainId()
1661
```



#### Gas Cost


```
truffle(zen)> web3.eth.ethGasPrice()
7
```



### Deploy a Contract

Once you have compiled your smart contract, then you can deploy it. In this deployment example, you will use the standard ERC20 contact by [OpenZeppelin](https://www.openzeppelin.com/).

Install the OpenZeppelin contract by using NPM. Run the command:


```
npm install @openzeppelin/contracts
```


Create the sample contract, [ERC20.sol](https://github.com/rocknitive/zen-sidechain-truffle/blob/master/contracts/DemoToken.sol) (below) in your `/contract` folder:


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



### Interact with a Contract Instance

To interact with your deployed contract, you first need to get the contract instance. Run the command:


```
truffle(zen)> const contract = await DemoToken.deployed()
```


Next, you will get some information from the ERC20 contract by calling the token methods from [EIP-20](https://eips.ethereum.org/EIPS/eip-20). Be aware of the method names by looking at the ABI of the contract or look at the code itself. 


#### Get the token name


```
truffle(zen)> contract.name()
'Demo Token'
```



#### Get the token symbol


```
truffle(zen)> contract.symbol()
'DEMO'
```



#### Get the account balance 

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



#### Send token to an account 

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


 


#### EOA to EOA transactions 

Send ZEN from the main address to a known address.


```
truffle(zen)> web3.eth.sendTransaction({ from: myAccounts[0], to: "0x03f14683E2f95883815f0df3C9145Efe24575163", value: 100 })
```


You will see the expected output:


```
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



#### Interact with native smart contracts 

There is no difference between getting an abstraction of a native smart contract and a traditional smart contract. In this exercise, you will send ZEN from the EVM sidechain address to the Horizen mainchain using web3 pages for two main functionalities (backward transfer and forgers) provided through native smart contracts. 

To interact with the native contract, you will use the function, **backward transfer** (also called, **withdrawal request**) at the reserved address as:

<strong><code>0x0000000000000000000011111111111111111111</code></strong> 

You can also send ZEN using the smart contract address and the ABI. However, in this example, a Solidity interface (below) will be used:


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


You can now get the contract abstraction. Run the command:


```
truffle(zen)> const withdrawalContract = await WithdrawalRequests.at("0x0000000000000000000011111111111111111111")
undefined
```



#### Interact with native smart instance 

To interact with a native contract instance, use the method, <strong><code>submitWithdrawalRequest</code></strong>.


```
truffle(zen)> withdrawalContract.submitWithdrawalRequest(mcAddress, { value: 1000000000000 })
```


**Note:** The mcAddress needs to be defined or replaced by the string containing the Horizen mainchain address. 

You will see the expected output:


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
```


    <strong><code>logsBloom: '0x01000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000400000000000000000010000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000008000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000001000000000000000000000',</code></strong>


```
    status: true,
    effectiveGasPrice: 2500000007,
    rawLogs: [ [Object] ]
  },
  logs: []
}
```


**Note:** The target address of a backward transfer has to be a z-address (starting with “**zn**” for _mainnet_ or “**zt**” for _testnet_ network).

**Note:** If your dapp requires a specific interface not available in this document, we do not guarantee it is available, but please open a ticket with as much details as possible in our Discord.
