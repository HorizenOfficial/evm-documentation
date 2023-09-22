---
title: Truffle
---





## Using Truffle

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
1663
```



#### Gas Cost


```
truffle(zen)> web3.eth.getGasPrice()
"7"
```
## Deploying a Contract using Truffle

Once the DemoToken contract is successfully compiled, it can now be deployed. 
However, before deploying, make sure that the account you plan to use has sufficient ZEN. See [Get Started](/#connect-to-a-wallet) to install the MetaMask wallet, if needed. To deploy a contract on Dune Testnet or Gobi Testnet, your account must have sufficient ZEN. You can get some free test ZEN by using the [**Faucet**](https://gobi-testnet-faucet.horizen.io/ ).


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

