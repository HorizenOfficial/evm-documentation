---
sidebar_position: 1
slug: /
title: Get Started
description: Dive into the official Horizen EON documentation portal to learn how to communicate, interact, and build on Horizen’s EVM sidechain.
image: https://eon.horizen.io/docs/img/MetaData_img_blueprint_eon-doc.jpg
---

<head>
  <title>Horizen EON Documentation</title>
</head>

_Learn how to communicate with Horizen EVM (Ethereum Virtual Machine) using the JSON-RPC to retrieve data from a node._

EON is Horizen's Ethereum Virtual Machine. EON has adopted Ethereum’s Account-based transaction model to represent assets as balances within accounts. The Account model, in VM capable blockchains, differentiate account types on whether they represent a _normal_ account balance or an account which is bound to some **code** that has has to be executed by the VM (Virtual Machine). The conventional terminology to differentiate those is:

- **Externally Owned Account** (**EOA**)
- **Contract** account

In both cases, the account has a balance.

## Connect to a Wallet

In order to interact with smart contracts in the EVM, you need a valid EVM-compatible wallet such as [MetaMask](https://metamask.io/). The wallet needs to connect to the EON network.

### Install MetaMask

**Note:** The MetaMask connection is illustrated using the Chrome browser.

1. Download the MetaMask wallet extension into your browser by going to the [MetaMask](https://metamask.io/download/) website.
2. Use the **Extension Manager** to _pin_ the MetaMask extension to your browser. The **MetaMask Welcome** page appears. Click **Get Started** to begin the configuration.
3. The **Help us improve MetaMask** page appears. Either click **No thanks** or **I agree** to continue.
4. The **New to MetaMask** page appears. Either **Import wallet** or **Create a wallet** to continue. For this example, click **Create a wallet**.
5. The **Create password** page appears. Enter a **password** and confirm. Check the agree box for the **Terms of use**. Click **Create**.
6. The **Secure your wallet** page appears. Watch the **Secret Recovery Phrase** video. The secret recovery phrase is a 12-word phrase that is the master key to your wallet and funds. Click **Next**.
7. The **Secret Recovery Phrase** page appears. Click the box to **Reveal Secret Words**. You can **download** the Secret Recovery Phrase, if desired. Click **Next**.
8. The **Confirm your Secret Recovery Phrase** page appears. Select each phrase in the order to confirm that your secret recovery phrase is correct. Click **Confirm**.
9. If successful, the **Congratulations** page appears. Read the tips on storing your secret recovery phrase. Click **All done**.
10. Your MetaMask wallet appears showing Account 1 as the wallet name and 0 ETH as the balance.

    **Note:** You can rename your account name of your MetaMask wallet by clicking on the **three dots** at the top right of your wallet. Next, click **Account details** then click on the pencil icon next to the wallet name to edit the account name.

![alt_text](/img/docs/get-started/metamask-acct-details.png)

### Add a Network

You can add a network to your MetaMask wallet by specifying the RPC endpoint and Chain ID to make a connection. Perform the following steps to make a connection. Use the table (below) to enter the appropriate values.

1. To add a network connection, click on the **network menu** at the top right of your MetaMask wallet.

![alt_text](/img/docs/get-started/metamask-networks-dd.png)

2. The **Settings** page appears. At the bottom of the page, click **Add a network manually**.
3. The **Add a network manually** page appears. Enter the following fields with the appropriate values:

   **Network name** - The name of network to add

   **New RPC URL** - The URL address for remote procedure call (RPC server).

   **Chain ID** - The chain ID of the network to add.

   **Currency symbol** - The currency symbol supported by the network.

   **Note:** For this example, ZEN is the currency symbol used. However, when you get free ZEN from the Horizen Faucet, you are actually receiving **TZEN**, as it is required for the **Yuma Testnet** network.

   **Block explorer URL** - Optionally, add the URL address of the supported block explorer.

Adding a network example:

![alt_text](/img/docs/get-started/metamask-add-network2.png)

##### Yuma Testnet

      Network name:  Yuma Testnet
      New RPC URL:  https://yuma-testnet.horizenlabs.io/ethv1
      Chain ID: 1662
      Currency symbol: ZEN
      Block Explorer: https://yuma-explorer.horizen.io/

Once you have specified the RPC endpoint and Chain ID to make a connection, a notification appears stating, **“Yuma Testnet was successfully added”**.

## RPC Server

The RPC (Remote Procedure Call) endpoint works as a node's address: it's a URL where requests for blockchain data can be sent to. The Ethereum JSON-RPC specification defines some industry standard methods which can be used to retrieve data from a node.

<table>
  <tr>
   <td><strong>Environment</strong>
   </td>
   <td><strong>URL</strong>
   </td>
  </tr>
  <tr>
   <td>LocalHost
   </td>
   <td>127.0.0.1 (a local node is required)
   </td>
  </tr>
  <tr>
   <td>Yuma Testnet
   </td>
   <td>https://yuma-testnet.horizenlabs.io/ethv1
   </td>
  </tr>
  <tr>
   <td>Mainnet
   </td>
   <td>TBD
   </td>
  </tr>
</table>

## Chain ID

The `chainId` was introduced by Ethereum to prevent replay attacks on different networks, where every EVM-compatible blockchain should have its own and unique Chain ID.

<table>
  <tr>
   <td><strong>Environment</strong>
   </td>
   <td><strong>Chain ID</strong>
   </td>
  </tr>
  <tr>
   <td>LocalHost
   </td>
   <td>1997
   </td>
  </tr>
  <tr>
   <td>Yuma Testnet
   </td>
   <td>1662
   </td>
  </tr>
  <tr>
   <td>Mainnet
   </td>
   <td>TBD
   </td>
  </tr>
</table>
