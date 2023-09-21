---
title: Local Build and Deploy
---

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


### Run the Client
If you have performed the previous setup instructions and you want to restart the client, run the following command at the root folder of the project (inside the cloned repository):

```
./scripts/startup.sh
```

**WARNING:** **Risk Data Corruption** - Always shut down the node properly by executing *shutdown.sh*, available in the scripts folder, at the end of your testing session and/or before turning off your machine (computer or virtual machine). 

### Configuration
Set up your network provider as **localhost (127.0.0.1)** and **port (9545)**, and also change the **Chain ID** according to the environment you are using.

##### EON MAINNET (localhost)

```
Network name:  Horizen EON Mainnet 
New RPC URL:  http://127.0.0.1:9545/ethv1
Chain ID: 7332 
Currency symbol: ZEN
Block Explorer: https://eon-explorer.horizenlabs.io/
```

##### GOBI TESTNET (localhost)

```
Network name:  Horizen Gobi Testnet
New RPC URL:  http://127.0.0.1:9545/ethv1 
Chain ID: 1663
Currency symbol: TZEN
Block Explorer: https://gobi-explorer.horizenlabs.io
```

**Note:** For configuring a wallet or network provider with the testnet local node the "RPC Server" must be the **local one (localhost)**. Use the **Chain ID** for  the  corresponding  network. 

### Why Should I Run a Node?

Running your own node preserves your privacy and bolsters your security. It also allows you to prove that no one is manipulating the transactions in EON or changing any rules.

### Privacy Benefits

When you run your own node, you can create and broadcast transactions directly from the node, thereby avoid using services that might compromise private information. A node also removes the need to use a block explorer to verify the status of your transactions. Block explorers allow third parties to track your transaction history by linking it to your IP address, leaking your physical location, your balance, and your financial counterparties.
Horizen does not collect private information. However, by providing free access to the code, Horizen cannot guarantee the same privacy with third-party operated dApps, and in either way the statement cannot be "**trustless**".

### Security Benefits
Using an EON node to create transactions can also improve your security by reducing or eliminating the need to expose your private keys to the internet through a web browser. The private key is required to sign the transactions before submission, while the signature generally takes place locally.

**Note:** If you own a Validator node, you will benefit from the latest secure enclave features for key management, where the documentation is shared privately. In this case, the signature occurs in a remote trusted execution environment.

