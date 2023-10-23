---
title: Forward Transfer
---

A forward transfer transaction consists of moving assets from the mainchain to a sidechain (EON). 

**Note:** The EON address can be used in any EVM-compatible crypto wallet such as Cobalt, MetaMask, and the like.


## Before You Start

Before performing a forward transfer of assets, make sure that the following is available:



* Crypto wallet account (EON address)
* Crypto wallet configured to the** Horizen EON** network
* Sufficient funds (balance) in your Horizen Sphere account


## Send ZEN

To send ZEN from the Horizen mainchain to EON, use Sphere: 



1. Open your **Horizen Sphere**. Make sure you have sufficient funds in a Sphere address. 

<p>
<img src={require("/img/docs/forward/forward_sphere_mywalletsend2.png").default} alt="Wallet Balance" width="300" height="200" />
</p>

2. From the **Sphere wallet address** you wish to send ZEN, click on the **Send** icon (red arrow pointing up).

<p>
<img src={require("/img/docs/forward/forward_sphere_sendicon3.png").default} alt="Wallet Balance" width="300" height="200" />
</p>



3. The **Send** page appears. Your **Sphere wallet name** appears at the top of the page.

<p>
<img src={require("/img/docs/forward/forward_sphere_send2eon4.png").default} alt="Configure Send Page" width="300" height="200" />
</p>

4. Configure the following fields in the **Send** page:
* **Sidechain Transaction** slider (top right) - Enable. The Sidechain field becomes active.
* **Sidechain**  - Use dropdown to select the **Horizen EON** network.
* **Send to**  - Enter the EON address to send to.
* **Amount**  - Enter the amount you wish to send.
* **Transaction Fee** - Default to Standard. Enable Custom for a different fee from Standard.
* **Description** (optional) - Enter a brief description of the transaction.
5. Review the **Summary Pane** and click **Confirm**. If you’ve configured your wallet with a password, the **Enter wallet password to confirm** field appears. 
6. Enter your Sphere wallet** password**. Click **Confirm**.

<p>
<img src={require("/img/docs/forward/forward_sphere_confirmpass5.png").default} alt="Configure Send Page" width="300" height="200" />
</p>



7. A successful transaction notification appears. Click **View on Blockchain** to see the transaction details.

<p>
<img src={require("/img/docs/forward/forward_sphere_transuccessful6.png").default} alt="Transaction Successful" width="300" height="200" />
</p>

8. Review the Transaction Details pane for accuracy. The transaction type should be -4.

<p>
<img src={require("/img/docs/forward/forward_blockexplorer_trans7.png").default} alt="Block Explorer" width="300" height="200" />
</p>


9. Check your crypto wallet for the newly received transaction. You should see a transaction of received ZEN from Horizen mainchain.

<p>
<img src={require("/img/docs/forward/forward_metamask_zen8.png").default} alt="MetaMask with ZEN" width="300" height="200" />
</p>

