---
title: Backward Transfer
---

In the Horizen ecosystem, transferring funds from the sidechain to the Horizen mainchain is called a **backward transfer**.

Initiate a backward transfer with the **Transfer** tab in the EON dApp.

## Before You Start

Before performing a backward transfer of assets, make sure that you have the following information available:


* Wallet connected to EON dApp
* Mainchain wallet address (Sphere)

 **Note:** Download [Sphere](https://www.horizen.io/wallets/spherebyhorizen/) to create a mainchain wallet, if needed.


# Perform Backward Transfer

To perform a backward transfer in the Horizen ecosystem, use the following steps:

1. Navigate to the [Transfer](https://eon.horizen.io/app/transfer) page in the EON application. 

<p>
<img src={require("/img/docs/backward/backward_launchpage1.png").default} alt="Landing Page" width="800" height="600" />
</p>

2. Click **Connect Wallet**.

 **Note:** The **MetaMask** crypto wallet is used for the EON address in this example.

<p>
<img src={require("/img/docs/backward/backward_connectwallet2.png").default} alt="Wallet Connect" width="600" height="400" />
</p>

3. Select a wallet to connect. If you have connected a recent crypto wallet, it will appear at the top right of the page. Otherwise, get a wallet and configure it with the **Horizen EON** network. Make sure that you have ZEN to perform a backward transfer. 
4. Once your crypto wallet is connected, the wallet balance appears. In the **Amount **field, enter the amount of ZEN you wish to transfer.

<p>
<img src={require("/img/docs/backward/backward_transferzen4.png").default} alt="Wallet Balance" width="300" height="200" />
</p>

5. In the Mainchain Address field, enter your **Sphere wallet address**. Click **Transfer**.
6. The connected crypto wallet appears with the transaction details. Review the details and click **Confirm**.

<p>
<img src={require("/img/docs/backward/backward_metamaskconfirm5.png").default} alt="Wallet Confirm" width="300" height="200" />
</p>

7. The transaction is submitted. Once complete, a notification appears showing the **Transaction ID**. 

<p>
<img src={require("/img/docs/backward/backward_viewexplorer7.png").default} alt="Explorer Notification" width="300" height="200" />
</p>


8. Click **View in Block Explorer**. The Block Explorer appears. Review the transaction details to verify a successful transfer. 

<p>
<img src={require("/img/docs/backward/backward_blockexplorer8.png").default} alt="Block Explorer" width="800" height="600" />
</p>

9. Open **Sphere** to confirm the ZEN transfer in your mainchain wallet. Typically a backward transfer on EON can take up to four and a half hours to show up in the mainchain.

 **Note:** In the **Sphere Activity** page, review the **Transaction Type** and **Amount** columns for verification. The transaction type, **Sidechain bw transfer**, indicates a successful transaction.

<p>
<img src={require("/img/docs/backward/backward_spherebwtransfer9.png").default} alt="Block Explorer" width="800" height="600" />
</p>
