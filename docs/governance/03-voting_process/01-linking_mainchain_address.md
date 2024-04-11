---
title: Linking Mainchain and EON $ZEN Addresses
---

Because Snapshot is not compatible with Horizen’s mainchain, it has been integrated into EON, which is Ethereum-compatible. This means that $ZEN tokenholders will need to “link” their mainchain $ZEN address with an EON address in order to capture their full voting power for proposals in Snapshot. 

## Overview

To enable voting power to all accounts within the Horizen ecosystem, the **Governance Linking** app provides a mechanism to link multiple mainchain addresses to one EON address. Upon linking, a user’s voting power for the Horizen DAO will be the sum total of their ZEN balance on EON, plus the ZEN balance of all of their linked mainchain addresses. This makes it easier for users to vote with the totality of their ZEN without having to move assets. 

IMPORTANT NOTE: At this time, only $ZEN held in Sphere or on EON at the time of the voting snapshot will count towards voting power. $ZEN held elsewhere will not be captured. In advance of any vote, please ensure that all $ZEN you wish to vote with is held in Sphere or EON by the snapshot date. This date will be communicated to the community well before any vote.

### Configuring a Network

Before linking to an EON address, make sure that the appropriate network is available. If not, add the network to the EON wallet and set it as the primary network. 

See [Connect your Wallet](/horizen_eon/connect/connect_your_wallet) in the EON documentation.


## Linking Addresses 

Perform the following steps to link one EON address to one or more mainchain addresses.

**Note:** MetaMask is used for providing the EON address.



1. Open the [Horizen Governance](https://eon.horizen.io/governance/dao) page. 


<p>
<img src={require("/img/docs/dao/dao_gov_landingpage.png").default} alt="Gov Landing Page" width="700" height="500" />
</p>

2. Click **Connect Wallet**. The EON wallet (MetaMask) appears in the top-right corner. Once connected, the **EON address** field is automatically filled with the connected EON address. 

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

### Linking a Multisignature Wallet
#### Generating Signatures for Multisig Wallets
Before you can link your multisignature wallet you need to first create signatures for each of the signers for the multisignature address. In order to create a signature you will need the Sphere Wallet desktop application. Each signer will have to repeat the steps outlined below. 

1. Open Sphere and login to your account.
2. On the left hand navigation, select the Wallet that is associated with (a signer of) the multisignature wallet you are trying to link.
3. You will now be shown a list of addresses associated with that wallet. Select the _handwriting icon_ for the address in question.

<p>
<img src={require("/img/docs/dao/dao_linking_sphere_icon.png").default} alt="Sphere Handwriting Icon" width="300" height="200" />
</p>



4. Next you will be shown a window for you to sign a message. Steps for this part are as follows:
    - Enter a value into the textbox which is a combination of the **multisignature address** and **EON address** you are trying to link.
        - Example: If your EON address is _ABC_ and your multisignature address is _XYZ_, then the value you should enter is as follows: _ABCXYZ_.
    - Select the **Create Signature** button. 
    - Once your signature is shown to you, copy it to the clipboard by clicking the **Copy to Clipboard** button.

<p>
<img src={require("/img/docs/dao/dao_linking_sphere_sig.png").default} alt="Sphere Handwriting Icon" width="300" height="200" />
</p>



5. Save this signature somewhere as it will be used in the **Linking Your Multisig** step.


**Note**: Each user that is a signer to the multisignature wallet needs to repeat the steps above. For example, if there are four signers, then four signatures are needed. Once this is completed you can move to the **Linking Your Multisig** step.


#### Linking Your Multisig Wallet
Make sure you have created signatures for each wallet signer before beginning this step.

1. Go to the EON dApp via [https://eon.horizen.io/app/start-here](https://eon.horizen.io/app/start-here).
2. On the left hand navigation select _Governance -> Horizen DAO_ and you will be brought to the wallet linking page.
3. Connect your wallet by clicking the **Connect Wallet** button on the top right of the screen. 
4. Select the **Link Mainchain Address** button.

<p>
<img src={require("/img/docs/dao/dao_linking_link_modal.png").default} alt="Linking Modal" width="300" height="200" />
</p>



5. Once selected, the **Link Address** modal will appear.
    - Enter the mainchain address (multisignature) into the _Mainchain Address_ field. This is the mainchain multisignature address you want to link to your EON address. 

    <p>
    <img src={require("/img/docs/dao/dao_linking_link_modal_form.png").default} alt="Linking Modal Form" width="300" height="200" />
    </p>

    - Enter the first signature in the _Mainchain Signature_ field
    - Select the **Advanced (Multisig)** dropdown towards the bottom of the modal. This will open a new set of fields for you to enter.
        - Enter the redeem script into the _Redeem Script_ field. This is the redeem script which was generated when you originally created your multisignature wallet. 
        - You will see an additional field with a label “Enter mainchain signature #2”. Enter the second signature you have.
        - If there are more signatures please repeat the step by:
            - Selecting the **Add Signature** button.
            - Entering the subsequent signature into the new field that is displayed. 

            <p>
            <img src={require("/img/docs/dao/dao_linking_link_modal_form_filled.png").default} alt="Linking Modal Form" width="300" height="200" />
            </p>


6. Once all of the signatures have been added, select the **Link** button at the bottom of the modal. If all information was entered correctly then your wallets will be linked successfully.

**Note:** In case of a failure, it’s important to follow the steps very carefully. There is a higher likelihood of mistakes in the values entered because there are many steps and multiple individuals involved in this process.
