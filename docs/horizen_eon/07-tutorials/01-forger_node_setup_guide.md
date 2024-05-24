---
title: EON Forger Node Setup Guide
---

# Introduction
Guide assumes you are setting up a forger node on EON mainnet. If you would like to set up a forger on Gobi testnet, replace all **eon** with **gobi** in these instructions.

## Requirements
The recent submission of [**ZenIP 42206**](https://blog.horizen.io/zenip-42206-explained-redirect-horizen-secure-node-rewards-into-horizen-eon/) which states that reward currently paid to [**Secure Node**](https://blog.horizen.io/secure-node-full-deprecation-timeline-eon-forger-node-instructions/) in the Horizen mainchain block will be redirected to an **EON Forger Subsidy Fund**. Thus, any node assigned as a [**Forger Node**](https://smart-1840-update-forger-doc.evm-documentation.pages.dev/horizen_eon/tutorials/forger_node_setup_guide) in the EON ecosystem must have the configuration requirements listed in the EON Forger Node Criteria. The EON Forger Node requirements can be implemented by users or blockchain providers.

### Additional Information
- Read the [Horizen Blog](https://blog.horizen.io/zenip-42206-explained-redirect-horizen-secure-node-rewards-into-horizen-eon/) that explains the need for a secure EON ecosystem.
- View the [Beyond Horizen](https://www.youtube.com/watch?v=Y1JUJ4ymk_I) episode on **Redirecting Secure Node Rewards to EON**.

## EON Forger Node Criteria
Minimum and recommended instance requirements for running an EON Forger Node in the context of Open Forging.

| Requirement     | Minimum      | Recommended  | Notes        |
| ------------    | ------------ | ------------ | ------------ |
| **CPU Core count**  | 4            | 8            |              |
| **Frequency/IPC**   | 2.5 GHz      | 3.0+ GHz     | High frequency is required in order to scale better. |
| **Memory**          | 16 GB        | 32 GB            |              |
| **Swap**            | -            | -            | Swap is not recommended.             |
| **Storage**         | 64 GB        | 512 GB            |             |
| **Storage growth**  | TBD          | TBD            | Expected growth over time.     |
| **IOPS**            | 5000         | NVMe SSD            |      |
| **Bandwidth**       | 250 Megabit  | 500+ Megabit     | Low latency connectivity to other Forger Nodes is crucial.     |
| **IP Address**      | IPv4 dedicated | IPv4 dedicated     |     |

**Network**
- EON available for inbound connections on IPv4.
- Correct reachable address and port combination are advertised to the network by EON.
- Must not restrict peer connections.
- Must configure the EON P2P TCP port 9084 to be reachable from the outside for other nodes to connect to (EON MUST accept incoming connections from other nodes).

**Note:** The requirements detailed can be added to or modified without notice.

```bash
## Update and upgrade system
sudo apt-get update && sudo apt-get upgrade
```

## Docker Setup
Set the repository
```bash
## Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

## Add the repository to APT sources:
echo \ "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \ $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \ sudo tee /etc/apt/sources.list.d/docker.list > /dev/null sudo apt-get update
```

Install docker repositories
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Test the installation
```bash
## Run the test docker's container
sudo docker run hello-world

## Expected Output:

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete
Digest: sha256:6352af1ab4ba4b138648f8ee88e63331aae519946d3b67dae50c313c6fc8200f
Status: Downloaded newer image for hello-world:latest
Hello from Docker!
This message shows that your installation appears to be working correctly.
To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
   (amd64)
3. The Docker daemon created a new container from that image which runs the
   executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
   to your terminal.
To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash
Share images, automate workflows, and more with a free Docker ID:
<https://hub.docker.com/>
For more examples and ideas, visit:
<https://docs.docker.com/get-started/>
```
### Docker Compose v2
Install docker compose v2
```bash
## Update the system
sudo apt-get update

## Install Docker Compose Plugin
sudo apt-get install docker-compose-plugin
```

Test the installation
```bash
## Get docker compose version
docker compose version

## Should output the latest docker version

## Install pwgen
sudo apt-get install pwgen
```

### Create a User 
Create a docker group and create a user to execute docker commands without root access. This is necessary to run a Forger Node with the compose tool with any error or additional settings.

```bash
## Create user called 'user'
sudo adduser user

## Add 'user' to sudo
sudo usermod -aG sudo user

## Create docker group
sudo groupadd docker

## Switch to 'user'
su - user

## Add 'user' to the docker group
sudo usermod -aG docker $USER

## Set temporal docker group to 'user'
newgrp docker

## Test running the hello-world container example for docker without the 'sudo' word
docker run hello-world

## Expected Output:

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete
Digest: sha256:6352af1ab4ba4b138648f8ee88e63331aae519946d3b67dae50c313c6fc8200f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
   (amd64)
3. The Docker daemon created a new container from that image which runs the
   executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
   to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
```

## Run a Forger Node
Download the GitHub Repository.

```bash
## Download from the repository using GitHub
git clone https://github.com/HorizenOfficial/compose-evm-simplified.git

## Navigate to the downloaded repository
$ cd compose-evm-simplified
```

Select 2 and press *Enter*.
```bash
=== Checking all the requirements ===

What kind of node type would you like to run:
1) rpc
2) forger
#?
```

Type 2 for forger and press *Enter*.
```bash
What network would you like to setup 'eon' (mainnet) or 'gobi' (testnet):
1) eon
2) gobi
#? 
```

For this next step it’s suggested to set up a new wallet seed phrase rather than using an existing one. Type ***no*** and press *Enter*. *If you select yes here, you will be asked to use an existing seed phrase and the script will not generate a new one*.
```bash
=== Setting up the wallet seed phrase ===

Do you want to import an already existing seed phrase for your wallet ? ('yes' or 'no') 
```

**Save the seed phrase that is given to you in a safe place**. It will be used as the wallet from which you stake from. Confirm that you saved your wallet seed phrase in a secure place by typing ***yes*** and then pressing *Enter*.

For the next two questions it is suggested to type ***no*** and press *Enter* (unless you know what you are doing).
```bash
=== Setting up the docker containers local user and group ids ===

The uid:gid with which to run the processes inside of the container will default to 0:993
Do you want to change the user (please answer 'no' if you don't know what you are doing) ? ('yes' or 'no')

=== Setting up the docker volumes datadir ===

By default internal docker volumes will be used.
Do you want to change the datadir (please answer 'no' if you don't know what you are doing) ? ('yes' or 'no')

# Expected Output:
=== Project has been initialized correctly for forger and eon ===

=== RUNNING FORGER NODE ===

1. First, run the zend node:

docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml up -d zend

Before moving onto step 2) below you may want to set up a seed to speed up the sync process. See section below on creating a seed before moving to the next step. 

2. Verify your node's block height matches against the public explorer: https://explorer.horizen.io:

docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml exec zend gosu user zen-cli getblockcount

3. Once the zend node is fully synced, start the evmapp node:

docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml up -d

4. Verify your evmapp node's block height matches against the public explorer: 


If EON mainnet use the following: https://eon-explorer.horizenlabs.io
If Gobi testnet use the following: https://gobi-explorer.horizenlabs.io 

===========================
```

As the previous output says. We need to run the Zend node first and wait until it gets synced. It is suggested to first set up a seed to speed up the process.

### Speed up Zend Sync Process with a Seed
First, navigate to the following directory within the compose-evm-simplified folder.

```bash
cd deployments/forger/eon/seed
```

Run the following commands to download, unzip and remove the seed files.
```bash
## Download seed file (this could take a while depending of the speed of the internet)
wget https://downloads.horizen.io/file/InfraPublic/mainchain_mainnet_seed_noindex_2023-06-27.tgz

## Unzip
tar -xzvf mainchain_mainnet_seed_noindex_2023-06-27.tgz

## Remove tar file
rm mainchain_mainnet_seed_noindex_2023-06-27.tgz
```

Move to the compose-evm-simplified base folder and run the zend node with this commands:
```bash
## Back to the repository base folder
cd ../../../../

## Start the Zend node
docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml up -d zend

## Expected Output:
[+] Running 8/8
✔ zend 7 layers [⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                      9.4s
  ✔ 8ee087424735 Pull complete                                         0.5s
  ✔ 09d412f48297 Pull complete                                         0.5s
  ✔ 3fafa6457432 Pull complete                                         0.7s
  ✔ 17f8b2f48137 Pull complete                                         1.0s
  ✔ 134ac7ffa7cc Pull complete                                         0.9s
  ✔ 6c225e875ca2 Pull complete                                         1.2s
  ✔ 2b88cc91a068 Pull complete                                         3.7s
[+] Running 1/7
⠋ Network evmapp-mainnet-eon_evmapp_network      Created               0.9s
⠏ Network evmapp-mainnet-eon_inet                Created               0.8s
⠇ Volume "evmapp-mainnet-eon_evmapp-data"        Created               0.8s
⠇ Volume "evmapp-mainnet-eon_evmapp-snark-keys"  Create...             0.7s
⠇ Volume "evmapp-mainnet-eon_zcash-params"       Created               0.7s
⠇ Volume "evmapp-mainnet-eon_zen-data"           Created               0.7s
✔ Container zend                                 Started
```

After this you will need to wait until your node is synced with EONs most current block. You can check the EON Mainchain current block here: [https://explorer.horizen.io/](https://explorer.horizen.io/). For Gobi testnet check here: [https://gobi-explorer.horizenlabs.io/](https://gobi-explorer.horizenlabs.io/).

Over time continue verifying that the node is running by checking  the sync status (this may take some time).

```bash
## Get current height block synced
docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml exec zend gosu user zen-cli getblockcount

## Expected Output:
(Current block height of EON mainnet)
```

✅ Zend node will be fully synced when it reaches to the last block height in the Horizen Explorer Page.

### Run EVMAPP node
Run the following command to start and run the evmapp node.
```bash
## Run evmapp node
docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml up -d

## Expected Output:
[+] Running 11/11
✔ evmapp 10 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                  6.6s
 ✔ 63e9bbe32327 Pull complete                                             0.5s
  ✔ 7a4f4ee58f0a Pull complete                                            0.4s
  ✔ bdab001b72db Pull complete                                            0.6s
  ✔ 7d2b4d8b8e2f Pull complete                                            0.6s
  ✔ 6fc75f2a9c3d Pull complete                                            0.7s
  ✔ 8e421af2e68b Pull complete                                            0.9s
  ✔ 2ab5516e4a8f Pull complete                                            0.9s
  ✔ 6ae3b5422e0b Pull complete                                            3.3s
  ✔ 4ce997cc9690 Pull complete                                            1.3s
  ✔ 0672c782fcf6 Pull complete                                            1.8s
[+] Running 2/2
✔ Container zend    Running                                               0.0s
✔ Container evmapp  Started
```

As we did previously, we need to compare the block heights between our node and the last one in the on either the EON mainnet or Gobi testnet explorer page:

```bash
## Get current height block synced
docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml exec zend gosu user zen-cli getblockcount

## Expected Output:
(Current block height of EON mainnet)
```

### Generate Keys
Once the evmapp gets synced generate the keys with the following commands:
```bash
/home/user/compose-evm-simplified/scripts/forger/generate_keys.sh

## Expected Output:
 Generated VRF Key Pair.
 VRF Public Key         : ...
 VRF Private Key        : ...

 Generated Block Sign Key Pair.
 Block Sign Public Key  : ...
 Block Sign Private Key : ...

 Generated Ethereum Address Key Pair.
 Ethereum Address                    : ...
 Ethereum Private Key                : ...
 Ethereum Private Key for MetaMask  : …
```

**You will see values for each of the keys and addresses above, please save these to a safe place as they will be used for staking and withdrawing from the forger node**. Verify that the keys were generated correctly by running the following command:

```bash
docker compose -f /home/user/compose-evm-simplified/deployments/forger/eon/docker-compose.yml exec evmapp gosu user bash -c 'curl -sXPOST "http://127.0.0.1:${SCNODE_REST_PORT}/wallet/allPublicKeys" -H "accept: application/json" -H "Content-Type: application/json"'

## Compare the returned public key with yours.

## Expected Output:
{
 "result" : {
   "propositions" : [ {
     "publicKey" : ...
   }, {
     "publicKey" :  ...
   }, {
     "address" : ...
   } ]
 }
}
```
You should see the same value’s you’ve saved in the output above. 

### Stake Zen to your Forger
**Prerequisites**
In order to stake ZEN to a forger node you need to first send some ZEN to the wallet created during the setup process.

1. Obtain ZEN.
2. Add EON network to your wallet dApp. 
    - This guide will also assume you are using Metamask as your wallet of choice. Use the following guide to connect the EON network to your Metamask wallet:
    [https://docs.horizen.io/horizen_eon/connect/connect_your_wallet](https://docs.horizen.io/horizen_eon/connect/connect_your_wallet).
3. Forward transfer ZEN to an EON wallet. *It’s advised that this is a different wallet address than the one created in the previous step.*
    - Please use the following guide to forward transfer ZEN to that wallet address:
    [https://docs.horizen.io/horizen_eon/connect/forward_transfer](https://docs.horizen.io/horizen_eon/connect/forward_transfer).

### Staking
There are two ways in which you can stake a forger: 
- Using local scripts written in Javascript locally
- Using a Web IDE such as Remix.

This guide will walk you through staking using Remix. For more information about Remix IDE, see the following documentation: 
[https://docs.horizen.io/horizen_eon/develop_and_deploy_smart_contracts/remix](https://docs.horizen.io/horizen_eon/develop_and_deploy_smart_contracts/remix).

Find a place on your computer (not the server which hosts the node) to download the following repository:
```bash
## clone the smart contracts tools
git clone https://github.com/HorizenOfficial/eon-smart-contract-tools
```

Using these tools will enable you stake and unstake to an EON forger node. 
1. First, open Remix IDE by going here: [https://remix.ethereum.org/](https://remix.ethereum.org/)
2. Next, create a workspace and name it “Forger Node”
<p>
<img src={require("/img/docs/tutorial/remix-create-workspace-1.png").default} alt="Remix Create Workspace" width="600" height="400" />
</p>
<p>
<img src={require("/img/docs/tutorial/remix-create-workspace-2.png").default} alt="Remix Create Workspace" width="600" height="400" />
</p>

3. Import the Remix folder scripts. Click the *Upload Folder* icon as shown below. Select the following folder location which was downloaded to your computer: *eon-smart-contract-tools/contracts/forger_stake_delegation/remix*
<p>
<img src={require("/img/docs/tutorial/remix-file-explorer1.png").default} alt="Remix Upload Folder" width="600" height="400" />
</p>
<p>
<img src={require("/img/docs/tutorial/remix-file-explorer2.png").default} alt="Remix Upload Folder" width="600" height="400" />
</p>

4. Open *delegate.js* file in the explorer window and fill in the necessary inputs. You need to fill out the following fields: **Amount**, **YOUR_BLOCK_SIGN_PUBKEY**, and **YOUR_VRF_PUBKEY**. Amount is the amount you like to stake (make sure you have this amount in your wallet). These key values are those which were given to you when setting up the forger node.
<p>
<img src={require("/img/docs/tutorial/remix-delegate-env.png").default} alt="Remix Update File" width="600" height="400" />
</p>

5. Go to the Deploy & run transactions and in ENVIRONMENT select Injected Provider — MetaMask. Then MetaMask will prompt you to ask what address you’d like to use. In this case, the address that has the ZEN to Stake.
<p>
<img src={require("/img/docs/tutorial/remix-deploy-run.png").default} alt="Remix Deploy and run transaction" width="600" height="400" />
</p>

6. Back to the file explorer section, open delegate.js and select ***run***.
7. Accept the transaction on MetaMask. Click on, ***I want to proceed anyway and then Confirm***. (make sure you have enough ZEN left over to pay for gas). Wait until the logs say that the transaction was completed in the REMIX log section.
8. Check your staking on the Explorer.
    - Go to the [Forger Contract Read Functions](https://eon-explorer.horizenlabs.io/address/0x0000000000000000000022222222222222222222/read-contract#address-tabs) page.
    - Click on the *Read Contract* tab.
    - Connect your wallet.
    - Go to the *GetPagedForgersStakersByUser* method and enter the following:
        - MetaMask Address
        - 0 for the start *index* field
        - 1 in the PageSize field
        - Then click on *Query*

This will get your forged staked info such as amount of ZEN staked, and your ***stakeId***. Save the ***stakeId*** since you will need this input to unstake your ZEN.

*Once your forger node evmapp gets fully synced you will need to wait approximately 9 hours (two epochs) in order to be eligible to participate in the block validating process.*

### Unstaking
1. Before you can unstake you should set active the eth_sign feature in Metamask wallet. (you should disable this after unstaking):
    - Advanced Settings → Active the Eth_sign Requests → Read & Confirm the warning → Click on Continue.
2. Open Remix and select the *withdraw.js* file for editing
3. Update the **STAKE_ID** field to the value that you received when staking. 
4. Run the script.
5. Metmask will prompt you to sign a message, click **Sign**
6. Disable the eth_sign feature.

*If you would like to send funds back to the Horizen mainchain please use the following guide to backwards transfer: https://docs.horizen.io/horizen_eon/connect/backward_transfer.*

## Monitor Your Validated Blocks
Go to the eon explorer and search for your Ethereum generated address. The one that you generated in the /home/user/compose-evm-simplified/scripts/forger/generate_keys.sh. 

All ZEN earned by validated blocks will be sent to this address. So keep this and the private key in a safe place. Go to Blocks validated tab and you will see all blocks you already validated.

You can check for blocks you forged using the following command: 
```bash
docker logs evmapp | grep -i forged
```

Please look at the FAQ section to learn more or engage with the community on the Horizen discord server.


