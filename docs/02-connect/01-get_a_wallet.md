---
title: Get a Wallet
---



To interact with smart contracts in the EVM, you need a valid EVM-compatible wallet. Use one of the following wallets to connect to the EON network:

* [Cobalt](https://chrome.google.com/webstore/detail/cobalt-development-build/apkeonngfjnmcggdgdoljjdnkmdmdlno/related)
* [MetaMask](https://metamask.io/)

## Using Cobalt Wallet

Cobalt is a web browser extension wallet available using Chrome or Brave. Like a physical wallet, Cobalt holds ZEN cryptocurrency and tokens. Connecting Cobalt to the EON network (Gobi Testnet) allows you to interact with the EON sidechain (Horizen’s EVM) and dApps.

Cobalt allows you to create and restore wallets from any EVM-compatible network. Once you have configured the network in Cobalt, you can set a link to the corresponding block explorer to view your account transaction history. 

### Before You Begin

In this discussion, the [Chrome web browser](https://chrome.google.com/webstore/detail/cobalt-development-build/apkeonngfjnmcggdgdoljjdnkmdmdlno/related) is used to illustrate the instructions to install and use the Cobalt wallet. 

In a web browser, open the Cobalt web extension in the Chrome Web Store. Add the Cobalt extension. Then, click the Cobalt icon in the top-right corner of your browser.  The Cobalt Welcome! page appears.

![cobalt welcome](/img/docs/build/cobalteon-welcome.png)

### Create an Account
To begin, create an account for your wallet. Make sure that your password meets the following criteria:

* Your password must contain at least 16-characters.
* No common passwords are accepted, such as password, 12345, etc.
* Your password cannot be saved to a keychain, therefore keep your password in a safe place.

Perform the following steps:

1. Enter a **password**. 
2. Enter your password again to **confirm**.
3. Click **Terms of Use**. After reading the terms and conditions, click the **checkbox** to agree on the terms.
4. Click **Create**.

### Create a New Wallet

1. To create the new wallet, click **Create Wallet**.

![cobalt-get-started](/img/docs/get-started/cobalteon-import-wallet.png)

2. The **Choose a wallet** page appears. Click **Horizen EON** or **TokenMint** to create a wallet on a supported sidechain. 

![cobalt-choose-wallet](/img/docs/build/cobalteon-choose-wallet.png)

3. The **Create wallet for EON Testnet** page appears. Enter your wallet’s name. Click **Next**.

   **Note:** The name of the current EON Testnet is displayed as part of the page title. In this example (below) the **Dune EON Testnet** name is shown. 

![cobalt-walletname](/img/docs/get-started/cobalteon-wallet-name.png)

4. The **Seed Phrase** page appears. Write down your seed phrase. Click **Next**.

![cobalt-fried-seed](/img/docs/get-started/cobalteon-FriedSard-seed.png)

5. The **Confirm seed phrase** page appears. Select the word in the correct order to confirm your seed phrase. 

![cobalt-seed-confirm](/img/docs/get-started/cobalteon-FSseed-confirm.png)

6. Click **Confirm**. Cobalt displays your wallet name.

![cobalt-wallet-complete](/img/docs/build/cobalteon-wallet-complete.png)

### Import a Wallet

To restore a previously created wallet, use the **Import Wallet** option. Before you restore a wallet, you need the wallet’s name, password, and seed phrase. 

After installing Cobalt, perform the following steps to import a wallet:

1. In the **Get Started** page, click **Import Wallet**.

![cobalt-import-wallet](/img/docs/get-started/cobalteon-import-wallet.png)

2. The **Choose a wallet** page appears. Select either **Horizen EON** or **TokenMint** for your public sidechain. 

![cobalt-importwallet-choose](/img/docs/get-started/cobalteon-importwallet-choose.png)

3. The **Importing wallet for TokenMint Chain** page appears. Enter the wallet name and password. Click **Next**. 

![cobalt-import-walletname](/img/docs/get-started/cobalteon-import-walletname.png)

4. The **Enter seed** page appears. Enter your wallet’s 24-words seed phrase. Click **Confirm**. 

![cobalt-importwallet-seed](/img/docs/get-started/cobalteon-importwallet-seed1.png)

5. When the import is complete, the Cobalt wallet displays the restored wallet.

![cobalt-importwallet-complete](/img/docs/get-started/cobalteon-importwallet-complete.png)

### Account Settings

The Cobalt wallet provides a setting feature where you can manage your account. 

Click on the the **Account icon** on the top-right corner of the page to display the Account menu:

![cobalt-account](/img/docs/get-started/cobalteon-account.png)

To manage your Cobalt wallet, use the Account settings to perform the following options:

* **Security** - view your private key or recovery seed phrase
* **Lock** - lock your wallet
* **Connect Sites** - display a list of connected sites
* **Manage Accounts** - rename your wallet name, hide your wallet from view, or add a new account
* **Manage Networks** - delete networks that you configured or add a custom network
* **Terms of Use** - display the Terms of Use page

#### Security
The Cobalt wallet allows you to view and copy your wallet’s private key. You need the wallet’s private key if you change your web browser or computer. You can also view the recovery seed phrase of your wallet. 

1. In the **Account** menu, click **Security**. The **Security** page appears. 

![cobalt-account-security](/img/docs/get-started/cobalteon-account-security.png)

##### View Private Key

2. Click **View Private Key**. The private key is used to access your account. It is highly recommended that you write down your private key and keep it in a safe place. Enter your password to access your private key. Click **Next**.

![cobalt-account-privatekey](/img/docs/get-started/cobalteon-account-privatekey.png)

##### View Recovery Seed Phrase

3. In the **Security** page, click **View Recovery Seed Phrase**. You will need your wallet’s seed phrase if you change browser or computer. The **View Recovery Seed Phase** page appears. 

![cobalt-account-recovery](/img/docs/get-started/cobalteon-account-recovery.png)

4. The **View Recovery Seed Phase** page displays your secret recovery phrase. Write it down and keep it safe. Click **Close**.

![cobalt-account-seedphrase](/img/docs/get-started/cobalteon-account-seedphrase.png)

#### Lock 
The Cobalt wallet allows you to lock and unlock your wallet. Use the lock option for security reasons. 

1. In the **Account** menu, click **Lock**. Your wallet is locked. The **Welcome Back!** page appears.

![cobalt-account-welcomeback](/img/docs/get-started/cobalteon-account-welcomeback.png)

2. To unlock, enter your password.  Click **Unlock**.

#### Connected Sites

The Cobalt wallet displays the network addresses that are connected. The Connected Sites page is populated with all site URLs connected to your account, automatically. You can disconnect to a network address if desired. 

1. In the **Account** menu, click **Connected Sites**. A list of connected network addresses is displayed.

![cobalt-connectsite](/img/docs/get-started/cobalteon-connect-site.png)

2. If desired, you can disconnect from a site by hovering your cursor over the chain icon, where a **Disconnect button** appears. Click the **Disconnect icon** to delete the address.

![cobalt-connectsite-disconnet](/img/docs/get-started/cobalteon-connectsite-disconnect.png)

#### Manage Account

You can manage your wallet accounts. The Manage Account option allows you to rename your account or hide your account from being displayed in Cobalt. This option also allows you to add a new account.

1. In the **Account** menu, click **Manage Account**. A list of valid wallet names and associated addresses are displayed.

![cobalt-manageacct-list](/img/docs/get-started/cobalteon-manageacct-list.png)

2. Click the **pencil icon** next to the wallet name you want to modify. The Rename page appears. In the Account name field, make the changes to the wallet  name. Click **Confirm**.

![cobalt-manageacct-rename](/img/docs/get-started/cobalteon-manageacct-rename.png)

3. Toggle the **eye icon** next to the wallet name you want to be visible or not. This option does not delete the account but rather hides the account in the setting option.

![cobalt-manageacct-visible](/img/docs/get-started/cobalteon-manageacct-visible.png)

4. You can also add an account to your wallet. In the **Manage Account** page, click **Add account**.

   **Note:** When adding a new account, the account’s seed phrase is the same as its initial phrase.

![cobalt-manageacct-list](/img/docs/get-started/cobalteon-manageacct-list.png)

5. The **Add Account** page appears. Enter the account name and password. Click **Confirm**. The added account name is then displayed in the **Manage Accounts** page.

![cobalt-manageacct-add](/img/docs/get-started/cobalteon-manageacct-add.png)

#### Manage Networks

The Cobalt wallet displays a list of networks connected to your wallet. You can add or delete an EVM-compatible network if desired. 

1. In the **Account** menu, click **Manage Networks**. A list of networks is displayed. These are the networks currently added to your wallet.

![cobalt-managenet-list](/img/docs/get-started/cobalteon-managenet-list.png)

2. Click **Add Custom Network** to add a new network. The **Add Custom Network** page appears. Configure your network with the following:

* **Name** - enter your network name
* **Chain ID** - the chain ID of your network
* **Token symbol** - the symbol of the native coin/currency associated with your network
* **RPC URL address** - the URL address for your network
* **Block Explorer** - the URL address for the EON Explorer

![cobalt-managenet-mumbai](/img/docs/get-started/cobalteon-managenet-mumbai.png)

   **Note:** Continue scrolling down on this page to display the **Assign color** field.

3. In the **Assign color** field, use the drop-down menu to select a color for your new network. The color helps you quickly identify your network from the rest of the networks in the list. Select a color and click **Submit**.

![cobalt-managenet-color](/img/docs/get-started/cobalteon-managenet-color.png)

#### Terms of Use

The Cobalt wallet provides the **Terms of Use** webpage. This page contains the term usage, legal information, and user restrictions required to use Cobalt. 

1. In the **Account** menu, click **Terms of Use**. The **Horizen - Privacy Policy** web page appears.

![cobalt-termofuse](/img/docs/get-started/cobalteon-terms-policy.png)

2. Read and understand the information contained in the Terms of Use and accept. 

### Import Token

The Cobalt wallet allows for importing ERC-20 tokens. Before importing a token, make sure that you set the network in the Cobalt wallet with the corresponding contract’s network. 

To illustrate Cobalt wallet’s versatility, this example uses a contract address in the Mumbai Testnet network. The Chainlink LINK token is imported. After the token import, the balance of LINK and MATIC (the native token) are retrieved from the Mumbai Testnet network.

1. In the **Assets** page, click **Import token**.

![cobalt-import-token-matic](/img/docs/get-started/cobalteon-import-matic.png)

2. The **Import token** page appears. Enter the **contract address** and click **Import**.

![cobalt-import-token-address](/img/docs/get-started/cobalteon-import-token-address.png)

3. The **Import token** page displays the import token details. Review the token information. Click **Import**.

* **Contract Address** - The address hosting the contract on the chain that executes functions.
* **Token Symbol** - The name of the token for coin (currency).
* **Token Decimals** - The amount of decimals a token has (divisible from 0 to 18)
* **Balance** - The amount of tokens owned in the selected network.

![cobalt-import-token-proceed](/img/docs/get-started/cobalteon-import-proceed.png)

4. Once the import transaction is complete, the Cobalt wallet displays the imported token in the Assets page.

![cobalt-import-token-complete](/img/docs/get-started/cobalteon-import-complete.png)

### Send ZEN

The Cobalt wallet allows you to send or transfer ZEN as well as other native tokens to wallets in their respective networks. 

Before sending a transaction, make sure that the appropriate network for recipient address is set in your Cobalt wallet.

To send ZEN, perform the following steps:

1. In the **Assets** page, click on the **Asset row**. 

![cobalt-send-zen](/img/docs/get-started/cobalteon-assets.png)

2. The **Send ZEN** page appears. Enter transaction details in the following fields:

* **Send to** - Enter the wallet address you want to send to,
* **Amount (ZEN)** - Enter the amount of ZEN you want to send. You can send an equal or less amount displayed in your available balance.  
* **Enter your password** - Enter your wallet’s password, which acts as a signature for this transaction.

3. Click **Next**.

![cobalt-send-zen](/img/docs/get-started/cobalteon-send-zen.png)

4. The **Send ZEN** page appears. Review the address and estimated fee. Click **Send**.

!cobalt-send-zen-estimatefee](/img/docs/get-started/cobalteon-estimated-fee.png)

5. Review the information and click **Send**. The **Transaction Submitted** page appears. 

![cobalt-send-zen-submitted](/img/docs/get-started/cobalteon-transact-submitted.png)

6. Optionally, verify that the send ZEN transaction is successful. Click **Link in the Explorer** field. The **EON Explorer** appears. It displays the recent Send transaction history.

![cobalt-send-zen-explorer](/img/docs/get-started/cobalteon-explorer-transdetails.png)

### Send ERC-20 Tokens

The Cobalt wallet allows sending standard ERC20 tokens to an Ethereum address. 

In this example, the LINK token is used for illustrating the send transaction. Make sure you have sufficient gas fees for the transaction. In this case, MATIC is the native currency of the Polygon network.

To send ERC20 tokens, perform the following steps:

1. In the **Assets** page, click on the **Asset row**

![cobalt-send-zen-explorer](/img/docs/get-started/cobalteon-send-erc20.png)

2. The **Send LINK Tokens** page appears. Enter transaction details in the following fields:

* **Send to** - Enter the wallet address you want to send to,
* **Amount (LINK)** - Enter the amount of LINK you want to send. You can send an equal or less amount displayed in your available balance.  
* **Enter your password** - Enter your wallet’s password, which acts as a signature for this transaction.

![cobalt-send-zen-explorer](/img/docs/get-started/cobalteon-erc20-link.png)

3. Click **Next**. The **Send Link Tokens** page displays the token amount that is specified, the recipient address, and estimated gas fee for the send transaction. 

![import-link](/img/docs/get-started/cobalteon-erc20-gasfee.png)

4. Review the information and click **Send**. The **Transaction Submitted** page appears. 

![import-link](/img/docs/get-started/cobalteon-erc20-checkmark.png)

5. Optionally, verify that the send ERC20 transaction is successful. Click **Link** in the Explorer field. The **Polyscan Explorer** appears. It displays the recent transaction history.

![import-link](/img/docs/get-started/cobalteon-erc20-explorer.png)


## Using MetaMask

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

