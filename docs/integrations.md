---
sidebar_position: 6
---

# Integrations

*Learn how to deploy pre-built smart contracts with thirdweb.* 


## Using thirdweb for Internet's Next Generation

thirdweb is a development framework for building web3 apps. thirdweb provides tools for developers and creators to deploy smart contracts to a blockchain network (mainnet or testnet) with the interaction of crypto wallets.  

The thirdweb platform provides easy-to-use templates to deploy pre-built smart contracts as well as custom and original contracts from your own source. Additionally, thirdweb allows you to connect to dApps, games, and a number of web3 projects.  


## Connect thirdweb to a Wallet

Use the following steps to connect to a wallet. In this example, the MetaMask wallet is connected to thirdweb.


1. Click **Connect Wallet** at the top-right of the page.

![alt_text](/img/docs/integrations/thirdweb-start-quickly.png)

2. A drop-down menu appears. Select **MetaMask**.

![alt_text](/img/docs/integrations/thirdweb-wallet-menu.png)

3. Enter the password for your wallet. 

**Note:** If you have forgotten your password, MetaMask allows you to create a new password, however, you will need to provide your 12-word seed phrase for your wallet.

4. Optional. Click on your wallet to display its details. Once you have connected your wallet, you can configure a new network connection.

![add-network](/img/docs/integrations/thirdweb-add-network.png)

## thirdweb Deployment Platform 

There are three methods of deploying a smart contract using thirdweb:

* Select and deploy from a collection of popular contracts
* Create a custom contract using ContractKit
* Deploy an existing contract from its source using CLI

### Deploy Pre-built Smart Contracts

To deploy from a collection of popular contracts, thirdweb provides pre-built smart contracts from:

* NFTs template
* ERC20 Tokens template
* Marketplace (an open marketplace to buy and sell ERC721 and ERC1155 NFTs) 

See thirdweb’s [Choosing the Right Pre-built Contract](https://portal.thirdweb.com/pre-built-contracts) for detailed information. 

### Deploy Custom Contracts using ContractKit

thirdweb allows you to create and deploy custom contracts by using the ContractKit with Solidity and SDK. Use the ContractKit to build a complete smart contract project from scratch or add features to existing smart contracts. ContractKit provides the following features:

* Base Contract template (ERC721Base) 
* Extension Contracts where plug-in are used for Permission Control and Royalty Fees functionality
* Interfaces to interact with other contracts (through the ContractKit)

See thirdweb’s [ContractKit](https://portal.thirdweb.com/contractkit) for detailed information. 

### Deploy Contracts from a Source
You can deploy an existing smart contract from a source to the blockchain by using thirdweb’s CLI tool. To deploy a contract, use the CLI tool to perform these three steps:


* Compile your contract
* Upload your contract source code (ABI) to an IPFS
* Open the thirdweb dashboard to a network (such as Horizen Yuma Testnet)

See thirdweb’s [Deploy from Source](https://portal.thirdweb.com/getting-started/contracts#deploy-contract-section) for detailed information.

## Deploy a Pre-built Popular Contract
In the **Explore** page, you can choose from a collection of popular deployed contracts, which includes NFTs, tokens, and marketplaces. For this exercise, a pre-built token is deployed.


#### Deploy Token
Perform the following steps to deploy a token. 

1, Select **Token**.

![explore-page](/img/docs/integrations/thirdweb-explore.png)

2. The **Token** page appears. Read the description. Click **Deploy now**.

![token-contract](/img/docs/integrations/thirdweb-token-contract.png)

3. The **Contract Metadata** page appears. Enter metadata about your token in the following fields:

* Name - the name of your token (required)
* Symbol - the name of your currency  (required)
* Image - an image of your token  (not required)
* Description - a brief description of your token (not required)
* Recipient Address - automatically populates with your wallet address

![token-tzen](/img/docs/integrations/thirdweb-token-tzen.png)

4. Click **Deploy Now**. The **Deploy Status** page appears. It states that your wallet will prompt you to sign the transaction.

![deploy-status](/img/docs/integrations/thirdweb-deploy-status.png)

5. The MetaMask wallet displays a confirmation of the transaction. Click **Confirm**.

![confirm-deploy](/img/docs/integrations/metamask-confirm-deploy-tzen.png)

6. The MetaMask wallet displays a second confirmation of the transaction. Click **Confirm**.

![confirm-second](/img/docs/integrations/metamask-confirm-second-tzen.png)

7. The MetaMask wallet displays a signature notification. A signature is needed to add the transaction to the thirdweb dashboard. Read the content fully before signing. Use the down-arrow to scroll to the bottom of the page.


![signature-request](/img/docs/integrations/metamask-signature-request.png)

8. Read and fully understand the content. Click **Sign**.

![signature-second](/img/docs/integrations/metamask-signature-second.png)

The **Deploy Status** notification appears displaying an **Adding to dashboard** message.


![deploy-status](/img/docs/integrations/thirdweb-deploy-status-dashboard.png)

When the process completes, the **Overview** page displays your token. Review your token details. You can now create additional tokens using the minting process. To mint, click **Tokens** (under Extensions) in the left-column menu.

![tzen-details](/img/docs/integrations/thirdweb-tzen-details.png)

9. Your contract token details are displayed. Since your token is newly deployed, the token’s **Total Supply** value is zero (0). Click **Mint**.

![tzen=mint](/img/docs/integrations/thirdweb-tzen-mint.png)

10. The **Mint additional tokens** page appears. In the **Additional Supply** field, enter an amount to mint additional tokens. In this example, 100 units are entered.

![mint-token](/img/docs/integrations/thirdweb-mint-tokens.png)


11. The MetaMask wallet displays a confirmation notification. Read the transaction details and click **Confirm**.

![mint-confirm](/img/docs/integrations/metamask-mint-confirm.png)

12. When the transaction completes, the **Tokens** page displays your token information. Review your token details. In this example, the Total Supply is the amount that is minted. 

![tzen-verify](/img/docs/integrations/thirdweb-tzen-verify.png)

## View Contracts

A thirdweb dashboard is a multi-purpose tool for deploying pre-built smart contracts, viewing the details of deployed smart contracts, and interacting with the contracts. Additionally, you can modify its features, such as metadata, royalty fees, primary sales recipient, platform fees, and permission controls.
 
To view your deployed contract(s), click **Contracts** in the top-left menu on the thirdweb launch webpage. The **Deployed contracts** page appears. 


![mycontract-dashboard](/img/docs/integrations/thirdweb-my-contract-dashboard.png)

The **Deployed contracts** page lists all of your deployed contracts and pertinent information:


* **Name** - The user-defined contract name. 
* **Contract Type** - The type of smart contract deployed. In this example, the contract type was selected from the thirdweb Explore page. 
* **Network** - The network name that the contract was deployed on. The network name was defined when connecting thirdweb to a wallet.

* **Contract Address** - The address assigned to your deployed contract. This field allows for copying the address to the clipboard.

You can click on any field to display the contract’s **Overview** page. In this example, the *GOSURF Token* is displayed.

![tzen-tokendetails](/img/docs/integrations/thirdweb-tzen-tokendetails.png)

The **Token Details** page displays current information about your deployed token as well as transaction history. The following information fields include:

* **Total Supply** - This is the amount of minted token supply available. 

  **Note:** The initial supply amount is set through the minting process.

* **Owned by you** - This is the amount of tokens that you own.
* **Decimals** - By default, the value is 18, which tokens opt to imitate the relationship between Ether and Wei. This value can change if your ERC20 explicitly overrides it.
* **Latest Events** - This field displays the transactions in chronological order starting from the latest.
* **Transaction Hash** - This is the transaction address. You can copy the address to the clipboard.
* **Events** - This field displays the type of transaction from start to finish.
* **Permissions** - This field shows the controls you can set for user permissions.
* **Member** - The member is identified by the wallet address to use the contract.
* **Roles** - This field displays the roles that the member can perform, such as admin, minter, and transfer.

thirdweb provides several smart contract templates and development tools for you to explore. Visit [thirdweb](https://thirdweb.com/) for more information.







