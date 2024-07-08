---
title: Verifying a Smart Contract on Blockscout
---




# Verifying a Smart Contract on Blockscout

Any deployed smart contract can be verified using the EON Explorer.  The verification process begins with submitting the smart contract's source code to EON Explorer. The EON Explorer compares the submitted source code with the deployed byte code. If there is a match, then the smart contract is verified successfully, whereby the EON Explorer generates an interface to call the methods of the contract.

**Note:** It is highly recommended that you use the **Chrome web browser** to interact with the **EON Explorer** for optimized user experience.

The major steps for verifying a smart contract are:

* Deploy a smart contract to the Gobi Testnet network


* Flatten the smart contract, if needed
* Check for the deployed contract using the EON Explorer
* Verify and publish the contract

Make sure that you deploy your contract to the Gobi Testnet. If you are using a wallet, you must connect it to the Gobi Testnet network.

Use the following parameters to connect to Gobi Testnet:

```
Network name:  Gobi Testnet 
New RPC URL:  https://gobi-rpc.horizenlabs.io/ethv1 
Chain ID: 1663 
Currency symbol: ZEN
```

In this exercise, the [EON Explorer](https://gobi-explorer.horizenlabs.io/) is connected to the Gobi Testnet. The smart contract was developed and deployed to the Gobi Testnet network. The verification process will be performed using the **Via flattened source code** option in the EON Explorer.

### Flatten the Smart Contract

Before using the EON Explorer for verification, make sure the Gobi Testnet network has the deployed smart contract you want to verify. You need to flatten the smart contract if the contract inherits from other contracts or if it uses a library. Flattening a smart contract refers to combining all Solidity code into one file instead of multiple source files, thereby having the imported code be embedded in the same file. 

All smart contract development tools have a source code flattener. For example: 

* **Truffle** - uses the [Truffle Flattener](https://www.npmjs.com/package/truffle-flattener)
* **Hardhat** - uses the [Hardhat Flattener](https://hardhat.org/hardhat-runner/docs/advanced/flattening) 
* The [POA Solidity Flattener](https://github.com/poanetwork/solidity-flattener) can be used to flatten a smart contract
* **Remix** - provides a built-in flattener tool
 
**Note:** In the **Remix Explorer**, select your smart contract file ( **.sol** ) to flatten, then right-click on the flattener tool. 

### Check for the Deployed Contract

In the [EON Explorer](https://gobi-explorer.horizenlabs.io/), perform the following steps to begin the verification process:

1. Once you have deployed your contract, your developer tool will display the address the network has assigned your contract to. Copy that address.

2. Open the EON Explorer and paste the contract address into the **Search** field.

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
  
8. Click the **Read Contract** tab or **Write Contract** tab to display and interact with the contract details and any related transactions. In case of a partial match (cases where the compiled bytecode matches the deployed bytecode except for the metadata hash) a message will appear like in the following image and it's possible to verify again the contract.

![alt_text](/img/docs/deploy/verifysuccess1.png)

![alt_text](/img/docs/deploy/verifysuccess2.png)
