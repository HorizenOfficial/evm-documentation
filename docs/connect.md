---
sidebar_position: 2
---

# Get a Wallet

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

# Connect your Wallet

You can add a network to your MetaMask wallet by specifying the RPC endpoint and Chain ID to make a connection. Perform the following steps to make a connection.  Use the table (below) to enter the appropriate values.



1. To add a network connection, click on the **network menu** at the top right of your MetaMask wallet.

        

![alt_text](/img/docs/get-started/metamask-networks-dd.png)



2. The **Settings** page appears. At the bottom of the page, click **Add a network manually**.
3. The **Add a network manually** page appears. Enter the following fields with the appropriate values:

  **Network name** - The name of network to add

  **New RPC URL** - The URL address for remote procedure call (RPC server).

  **Chain ID** - The chain ID of the network to add.

  **Currency  symbol** - The currency symbol supported by the network. 

  **Note:** For this example, ZEN is the currency symbol used. However, when you get free ZEN from the Horizen Faucet, you are actually receiving **TZEN**, as it is required for the **Gobi Testnet** network.

  **Block explorer URL** - Optionally, add the URL address of the supported block explorer.


Adding a network example:



![alt_text](/img/docs/get-started/metamask-add-network2.png)



##### Gobi Testnet

      Network name:  Gobi Testnet
      New RPC URL:  https://gobi-testnet.horizenlabs.io/ethv1
      Chain ID: 1663 
      Currency symbol: ZEN
      Block Explorer: https://gobi-explorer.horizen.io/

Once you have specified the RPC endpoint and Chain ID to make a connection, a notification appears stating, **“Gobi Testnet was successfully added”**.


*********************************
# Get tZEN from the Faucet

In order to deploy a smart contract, the account (in the wallet) that is associated with EON EVM requires some amount of currency for transactions. You can add TZEN to your wallet by using the **Horizen Faucet**.

Perform the following steps to add TZEN to your wallet:



1. In your MetaMask wallet, copy the **wallet address** to the clipboard.
2. Click the link for the Horizen [Faucet](http://faucet.horizen.io/). The **Horizen Test Token Faucet** page appears:



![alt_text](/img/docs/getting-zen/yuma-faucet.png)



3. In the **Select Testnet** field, use the pull-down menu and select **Gobi Testnet**.
4. In the Wallet Address field, paste your MetaMask wallet address.
5. Click **Request 0.51 TZEN**.
6. After a few minutes, check your MetaMask wallet for **TZEN**.



![alt_text](/img/docs/getting-zen/metamask-zen.png)



## Deposit ZEN into an account

You can choose one of the two options below to deposit some test ZEN into an account:



* Go to the **_[Horizen Faucet](https://gobi-testnet-faucet.horizen.io/) - _** and get some free test ZEN.
* Make a *_Forward Transfer - _* The forward transfer is the process of transferring assets from the mainchain to the sidechain.

The first option is faster and it’s available for testing purposes (in **Gobi Testnet**, without real value), while the second option moves a balance of ZEN from the Horizen *_mainchain _* to EON EVM.  Use Horizen [Sphere](https://github.com/HorizenOfficial/Sphere_by_Horizen/) to make a forward transfer.

**Important:** Using a Smart Contract address as target of the Forward Transfer (FT) will lead to a loss of ZEN.



