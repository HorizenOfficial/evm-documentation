---
title: Linking Mainchain and EON $ZEN Addresses
---

Because Snapshot is not compatible with Horizen’s mainchain, it has been integrated into EON, which is Ethereum-compatible. This means that $ZEN tokenholders will need to “link” their mainchain $ZEN address with an EON address in order to capture their full voting power for proposals in Snapshot. 

## Overview

To enable voting power to all accounts within the Horizen ecosystem, the **Governance Linking** app provides a mechanism to link multiple mainchain addresses to one  EON address. Upon linking, a user’s voting power for the Horizen DAO will be the sum total of their ZEN balance on EON, plus the ZEN balance of all of their linked mainchain addresses. This makes it easier for users to vote with the totality of their ZEN without having to move assets. 

### Configuring a Network

Before linking an EON wallet, make sure that the appropriate network is available. If not, add the network to the EON wallet and set it as the primary network. 

See [Connect your Wallet](/horizen_eon/connect/connect_your_wallet) in the EON documentation.


## Linking Addresses 

Perform the following steps to link one EON address to one or more mainchain addresses.

**Note:** MetaMask is used for providing the EON address.



1. Open the [Horizen Governance ](https://eon.horizen.io/governance/dao)page. 


<p>
<img src={require("/img/docs/dao/dao_gov_landingpage.png").default} alt="Gov Landing Page" width="700" height="500" />
</p>

2. Click **Connect Wallet**. The EON wallet (MetaMask) appears in the top-right corner. Once connected, the **EON addres** field is automatically filled with the connected EON address. 

**Note:** If the EON wallet (MetaMask) was previously connected to the Horizen Governance app, then it is automatically connected. 

<p>
<img src={require("/img/docs/dao/dao_gov_walletconnected2.png").default} alt="Wallet Connected" width="300" height="200" />
</p>



3. Open **[Sphere](https://www.horizen.io/wallets/spherebyhorizen/)** and navigate to the mainchain wallet address you want to link to the EON address. Click the **Information** icon.  



<p>
<img src={require("/img/docs/dao/dao_sphere_addressicon3.png").default} alt="Wallet Connected" width="300" height="200" />
</p>


4. The wallet address information pane appears. Click **copy** to obtain the address in a clipboard.


<p>
<img src={require("/img/docs/dao/dao_sphere_addresscopy4.png").default} alt="Wallet Connected" width="300" height="200" />
</p>

5. In the **Horizen Governance Linked Addresses** pane, click **Link Mainchain Address**.
6. The **Link Address** pop-up appears. Paste the Sphere wallet address in the **Mainchain Address** field.

<p>
<img src={require("/img/docs/dao/dao_gov_mcaddress1.png").default} alt="Mainchain Address" width="300" height="200" />
</p>


### Create a Signature in Sphere



7. Copy the **EON address** from the connected wallet to the **Horizen Governance** app.
8. In **Sphere**, go to the **Addresses** pane. Click the **compose** icon (hand holding pencil).  

<p>
<img src={require("/img/docs/dao/dao_sphere_sig6.png").default} alt="Compose Icon" width="300" height="200" />
</p>



9. The **Sign message with address** pop-up appears. Paste the EON address in the message field. 

<p>
<img src={require("/img/docs/dao/dao_sphere_sigcreate7.png").default} alt="Create Signature" width="300" height="200" />
</p>



10. Click **Create signature**. The mainchain signature appears below the message field.

<p>
<img src={require("/img/docs/dao/dao_sphere_copysig8.png").default} alt="Copy Signature" width="300" height="200" />
</p>



11. Click **COPY TO CLIPBOARD**.


### Link Accounts on Link Address Pane



12. In the **Horizen Governance Linked Addresses** pane, paste the signature in the **Mainchain Signature** field.  

<p>
<img src={require("/img/docs/dao/dao_gov_addresslink1.png").default} alt="Link Addresses" width="300" height="200" />
</p>



13. Click **Link**. The Pending pop-up appears stating that the transaction is being submitted.

<p>
<img src={require("/img/docs/dao/submitted.png").default} alt="Pending Spin" width="300" height="200" />
</p>

14. The MetaMask Notification appears. Read the information details. Click **Confirm**.

<p>
<img src={require("/img/docs/dao/dao_gov_walletnotification3.png").default} alt="Wallet Notification" width="300" height="200" />
</p>



15. The **Linked Address** appears showing that the EON Address and Mainchain Address are linked. 

<p>
<img src={require("/img/docs/dao/dao_gov_linkmultiple4.png").default} alt="Addresses Linked" width="300" height="200" />
</p>


#### Link Multiple Mainchain Addresses 

Repeat the steps discussed in Linking Addresses to link additional mainchain addresses with the EON address. 


#### Unlink an Account

To unlink an account (mainchain address), perform the following steps:



1. In the **Horizen Governance Linked Addresses** pane, select the desired account (mainchain address) you wish to unlink.

<p>
<img src={require("/img/docs/dao/dao_gov_unlinkicon.png").default} alt="Unlinked Address" width="300" height="200" />
</p>



2. Click on the **Unlink** icon. The **Unlink Address** pop-up appears.

<p>
<img src={require("/img/docs/dao/dao_gov_unlink.png").default} alt="Unlinked Address" width="300" height="200" />
</p>



3. Click **Unlink**. The selected mainchain address is unlinked and no longer listed in the **Linked Address** pane.
