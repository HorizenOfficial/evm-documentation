---
title: Local Build and Deploy
---

<<<<<<< HEAD
This section covers how to set up a local EON mainnet or Gobi testnet node.

Horizen provides the files needed to start your own EON node locally. The Horizen EON repository is open source, and the code can be pulled from the GitHub repository and executed. 

The easiest way to start your own EON node is to use **Docker**. The EON client will be running in a Dockerized container. 

### Node Client
To start your node, run our Docker Compose on your computer.  

#### Set Up

1. Remove any previous version of Docker including any Docker Compose plugins before starting.

2. Install Docker. Use the instructions from the [official Docker guide](https://docs.docker.com/engine/install/). Also install Docker Compose v2 (which is included as a plugin with **apt install**), bc (arbitrary precision calculator language) and jq (a command-line JSON processor), using the following commands. Update dependencies:

 ```
 sudo apt-get -y install bc jq pwgen
 sudo apt-get update
 ```

 Add a Docker group if it does not exist.

 ```
 groupadd -g 999 docker 2>&1 || groupmod -g 999 docker
 ```

 Get *'docker compose'* bash completion.

 ```
curl -fsSL https://raw.githubusercontent.com/docker/cli/master/contrib/completion/bash/docker -o /etc/bash_completion.d/docker
 ```
 **Note:** These instructions refer to Ubuntu or almost any Debian-based Linux distro. Check the [official Docker guide](https://docs.docker.com/engine/install/) for other OS or other kinds of incompatibilities.

3. Clone this Horizen repository using the following command:

 ```
 git clone https://github.com/HorizenOfficial/compose-evm-simplified.git
 ```

 **Note:** See [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=cli) for detailed cloning instructions.

4. Follow the set up steps outlined in the [README](https://github.com/HorizenOfficial/compose-evm-simplified#setup). This includes creating the .env file, setting the environment variables, and running the appropriate scripts.

 Run the following command to initialize and run the stack for the first time:
 ```
 ./scripts/init.sh
 ```

 **Note:** It takes some time to synchronize the entire blockchain. While waiting, check the progress by comparing the last block in the [EON Explorer](https://eon-explorer.horizenlabs.io/) or [Gobi Explorer](https://gobi-explorer.horizenlabs.io) with the response of the following RPC method:

 ```
 curl -X POST "http://127.0.0.1:9545/ethv1/" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":"test"}' -H "accept: application/json"
 ```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 


=======

 

This discussion covers how to set up a local environment or a local Gobi testnet node to build a dApp (decentralized application) by providing the following: 


* Deploy an existing dApp into a local environment or Gobi Testnet
* Run a private instance of EON 

The easiest way to deploy a dApp is to use **Docker**. The EON client will be running in a Dockerized container. See **[Node Client](#node-client)** below.

Horizen provides two separate projects to enable:

* **SANDBOX:** creating a personal sandboxed blockchain 
* **TESTNET:** starting your EON node

For using a **personal sandboxed blockchain**, there is no required configuration. A local and disposable sidechain will be created from scratch with the latest available version of EON. Check the **.env** file for the port you will use for RPC calls. 

Horizen repositories are open source, including EON. The code can be pulled from the GitHub repository and executed. However, this is not considered in the scope of the testnet documentation. 

**Note:** EON is considered a sample application of what can be built using our Sidechains-SDK, which is why you will find it in the same repository.

At the time of this writing, EON is not finalized. It is recommended to use the **M3-V2** tag.  

### Node Client
To start your node, run our Docker compose (a tool required to run our multi-container application) on your computer. Next, open a terminal and execute some simple commands.

#### Set Up

1. Remove any previous version of Docker including any Docker-compose plugins before starting.

2. Install Docker, the Docker compose v2 (which is included as a plugin with **apt install**), bc (arbitrary precision calculator language) and jq (a command-line JSON processor), using the following commands:

Update dependencies.

```
sudo apt-get update
sudo apt-get -y install bc jq pwgen
```

Install Docker by following the instructions from the [official Docker guide](https://docs.docker.com/engine/install/).

Add a Docker group if it does not exist.

```
groupadd -g 999 docker 2>&1 || groupmod -g 999 docker
```

Get *'docker compose'* bash completion.

```
curl -fsSL https://raw.githubusercontent.com/docker/cli/master/contrib/completion/bash/docker -o /etc/bash_completion.d/docker
```

**Note:** Step 2 refers to Ubuntu or almost any Debian-based Linux distro. Check the [official Docker guide](https://docs.docker.com/engine/install/) for other OS or other kinds of incompatibilities.

3. Clone this Horizen repository using the following command:

**Note:** See [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=cli) for detailed cloning instructions.

```
git clone https://github.com/HorizenLabs/$PROJECT.git
```

Where **$PROJECT** is replaced by one of the following projects, depending on what you have decided to run:

* compose-evm-regtest-simplified → for GOBI SANDBOX
* compose-evm-testnet-simplified → for GOBI TESTNET

4. Set up environment variables in the **.env** file:

```
SCNODE_NET_NODENAME= # This variable requires a name. Enter a name using characters, special characters, or numbers. 
SCNODE_WALLET_SEED= # This variable can be empty or filled with a random string.
SCNODE_REST_PASSWORD= # Use this variable only to set up authentication on the rest api endpoints, where you have to uncomment.
```

5. Build the project by using the following command:

```
./scripts/init.sh
```

You are now set, the **client** starts automatically.

**Note:** GOBI TESTNET requires time to synchronize the entire blockchain. While waiting, check the progress by comparing the last block in the [Gobi Explorer](https://gobi-explorer.horizen.io) with the response of the following RPC method:

```
curl -X POST "http://127.0.0.1:9545/ethv1/" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":"test"}' -H "accept: application/json"
```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 

>>>>>>> ramone/dao
### Run the Client
If you have performed the previous setup instructions and you want to restart the client, run the following command at the root folder of the project (inside the cloned repository):

```
<<<<<<< HEAD
./scripts/startup.sh
=======
docker compose up -d
>>>>>>> ramone/dao
```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 

### Configuration
Set up your network provider as **localhost (127.0.0.1)** and **port (9545)**, and also change the **Chain ID** according to the environment you are using.

<<<<<<< HEAD
##### EON MAINNET (localhost)

```
Network name:  Horizen EON Mainnet 
New RPC URL:  http://127.0.0.1:9545/ethv1
Chain ID: 7332 
Currency symbol: ZEN
Block Explorer: https://eon-explorer.horizenlabs.io/
```
=======
##### GOBI SANDBOX

```
Network name:  Gobi Sandbox 
New RPC URL:  http://127.0.0.1:9545/ethv1
Chain ID: 1997 
Currency symbol: ZEN
Block Explorer: _leave blank_
```
**Note:** The **Gobi Explorer** is not available for this sandbox environment.
>>>>>>> ramone/dao

##### GOBI TESTNET (localhost)

```
<<<<<<< HEAD
Network name:  Horizen Gobi Testnet
New RPC URL:  http://127.0.0.1:9545/ethv1 
Chain ID: 1663
Currency symbol: TZEN
Block Explorer: https://gobi-explorer.horizenlabs.io
```

**Note:** For configuring a wallet or network provider with the testnet local node the "RPC Server" must be the **local one (localhost)**. Use the **Chain ID** for  the  corresponding  network. 
=======
Network name:  Gobi Testnet Local
New RPC URL:  http://127.0.0.1:9545/ethv1 
Chain ID: 1663
Currency symbol: ZEN
Block Explorer: https://gobi-explorer.horizen.io
```

**Note:** For configuring a wallet or network provider with the testnet local node the "RPC Server" must be the **local one (localhost)**. Use the **Chain ID** for  the  corresponding  testnet. 
>>>>>>> ramone/dao

### Why Should I Run a Node?

Running your own node preserves your privacy and bolsters your security. It also allows you to prove that no one is manipulating the transactions in EON or changing any rules.

### Privacy Benefits

When you run your own node, you can create and broadcast transactions directly from the node, thereby avoid using services that might compromise private information. A node also removes the need to use a block explorer to verify the status of your transactions. Block explorers allow third parties to track your transaction history by linking it to your IP address, leaking your physical location, your balance, and your financial counterparties.
Horizen does not collect private information. However, by providing free access to the code, Horizen cannot guarantee the same privacy with third-party operated dApps, and in either way the statement cannot be "**trustless**".

### Security Benefits
Using an EON node to create transactions can also improve your security by reducing or eliminating the need to expose your private keys to the internet through a web browser. The private key is required to sign the transactions before submission, while the signature generally takes place locally.

**Note:** If you own a Validator node, you will benefit from the latest secure enclave features for key management, where the documentation is shared privately. In this case, the signature occurs in a remote trusted execution environment.

