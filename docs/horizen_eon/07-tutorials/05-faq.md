---
title: Forger Node FAQ and Troubleshooting
---

## Frequently Asked Questions
### Stake Maturity
When a forger stake is created, it is not immediately ready to let the forger take part in the forgers' election. The stake will start to be accounted for in the slot leader lottery from the beginning of the **second consensus epoch** following the one where its creation happened.

For example: if the stake transaction was included in the middle of epoch 10, it will be accounted for from the beginning of epoch 12.

Each consensus epoch length is 15000 slots * 3 seconds per slot = 12h30minutes.

### How to verify the stake creation?
To make sure the operation was successful, make a `POST` request to `/transaction/allForgingStakes` and verify the publicKey used to create the forger stake appears in the returned list.

### When will I get a stake reward?
The consensus Epoch is 12.5 hours long. or 15000 blocks x 3 second timeslots.

The chance a forger has to forger a block is the proportion of stake from the 2 previous consensus Epochs. This could be up to 25 hours ago.

Regular payments are made to forgers every 100 mainchain blocks, or about every 250 minutes (4-5 hours). This is also known as the withdrawal Epoch.

Once a week, the weekly payment is made in a single payment. It is based on the proportion of blocks the forger forged compared to all the blocks forged. This usually happens on Monday.

### What is the EON fee redistribution system?
The probability that a forger will be elected as a slot leader will be proportional to the amount of stake he owns versus the total stake present on the chain.

If a forger wins the forger's lottery and is able to produce a new block, and the block is accepted by the other peers, it will earn a fee reward.

The transactions' fee mechanism in EON mimics the one defined in Ethereum. Every transaction has a fee computed with the following formula:
```
transaction fee = gasUsed * baseFeePerGas + gasUsed * maxPriorityFeePerGas
```

- baseFeePerGas is a minimum rate a user has to pay to include their transaction in the next block. This value is generated with every block header by the protocol and may change block by block, based on how full the previous block was.
- The other part of the fee is determined by maxPriorityFeePerGas and represents the so called "forger tip": it is an additional fee the transaction submitter is willing to pay to have its transaction included as soon as possible.
- There is another user specified parameter in the transaction: maxFeePerGas - represents the maximum fee a user is willing to pay for a transaction. This parameter actually limits the maxPriorityFeePerGas with this rule: if ( baseFeePerGas + maxPriorityFeePerGas) > maxFeePerGas, then maxPriorityFeePerGas will be reduced in order to maintain the upper bound of the maxFeePerGas.
- Finally, we can have also legacy (non EIP-1559) transactions, with only a gasPrice parameter that we use for both maxFeePerGas and maxPriorityFeePerGas values

The baseFee in EON is collected in a pool and redistributed at the end of each withdrawal epoch to all the forgers of the epoch, proportionally to the number of blocks they forged in the epoch. (this is a distinction from the Ethereum protocol, where the baseFee is burned).

Additionally, each forger earns all the forger tips of the transactions included in the blocks he forgerd. Also forger's tips are redistributed at the end of each withdrawal epoch.

Withdrawal epoch length is based on the number of mainchain blocks referenced by the sidechain: each epoch switch happens every 100 mainchain blocks. Given that in the mainchain a block is forged on average every 2 minutes and 30seconds, it takes approximately 4 hours to switch a withdrawal epoch.

Fee payments are calculated automatically by every node and enforced at consensus level. They can also be checked in the EON Explorer at this address: [https://eon-explorer.horizenlabs.io/fee-payment](https://eon-explorer.horizenlabs.io/fee-payment)

### How to check epoch slot data?
Use this http endpoint on the node to check the current epoch/slot: 
[https://github.com/HorizenOfficial/eon/blob/main/doc/api/block/forgingInfo.md](https://github.com/HorizenOfficial/eon/blob/main/doc/api/block/forgingInfo.md)


## General Troubleshooting

All forger commands are listed here:  
[https://github.com/HorizenOfficial/eon/blob/main/doc/api/index.md](https://github.com/HorizenOfficial/eon/blob/main/doc/api/index.md)

### Check public keys
```bash
docker compose exec evmapp gosu user curl -sX POST 'http://127.0.0.1:9545/wallet/allPublicKeys' -H 'Content-Type: application/json' -H 'accept: application/json'
```

### Check version of evmapp
```bash
docker exec evmapp gosu user curl -X POST "http://127.0.0.1:9545/node/info" -H  "accept: application/json" | grep nodeVersion
```

### Check forger node public keys
```bash
docker compose exec evmapp gosu user bash -c 'curl -sXPOST "http://127.0.0.1:${SCNODE_REST_PORT}/wallet/allPublicKeys" -H "accept: application/json" -H "Content-Type: application/json"'
```

### Check for peers
```bash
docker exec evmapp curl -sX POST "http://127.0.0.1:9545/node/connectedPeers" -H "accept: application/json"
```

### Check block height
```bash
docker compose exec evmapp gosu user curl -sX POST "http://127.0.0.1:9545/block/best" -H "accept: application/json" | jq '.result.height'
```

### Check for banned peers
```bash
docker exec evmapp gosu user bash -c 'curl -X POST "http://127.0.0.1:${SCNODE_REST_PORT}/node/blacklistedPeers" -H  "accept: application/json"'
```

### Check forger staking status
```bash
docker exec evmapp gosu user curl -X POST "http://127.0.0.1:9545/block/forgingInfo" -H  "accept: application/json"
```

### Check for errors
```bash
docker logs evmapp | grep -i "warn\|error"
```

### Stop forging
```bash
docker exec evmapp gosu user curl -sX POST 'http://127.0.0.1:9545/block/stopForging' -H 'Content-Type: application/json' -H 'accept: application/json' 
```

### Start forging
```bash
docker exec evmapp gosu user curl -sX POST 'http://127.0.0.1:9545/block/startForging' -H 'Content-Type: application/json' -H 'accept: application/json' 
```
### What do I do if the blockchain is stuck?
If the blockchain is totally stuck, or corrupted, delete the existing blockchain on the forger and restart the syncing
in compose-evm-simplified/deployments/forger/eon directory:

```bash
docker compose -f docker-compose.yml down evmapp
docker volume ls
docker volume rm evmapp-mainnet-eon_evmapp-data
docker volume ls
docker compose restart evmapp
```

Then in /compose-evm-simplified directory
```bash
./scripts/forger/generate_keys.sh 
```

### Block forging in the evmapp logs

check the evmapp logs with 
```bash
docker logs --tail 60 evmapp
```

if the forger does not forge a block (most of the time)
```bash
[INFO ] 2024-03-15 09:43:40:450 +0000 [        AbstractForger.scala:176 ] [scala-execution-context-global-72] io.horizen.account.forger.AccountForger - Slot is skipped with reason: No eligible forging stake found.
```

If you forge the block, the log will say this instead 

```bash
[INFO ] [        AbstractForger.scala:170 ] [scala-execution-context-global-51657] io.horizen.account.forger.AccountForger - Got successfully forged block with id BLOCKHASH
```

check that the forger is forging blocks
```bash
docker logs evmapp | grep forged
```
or
```bash
cat logs/evmapp/debug.log | grep -e 'Successfully generated block'
```


### Check forger node public keys
```bash
docker compose exec evmapp gosu user bash -c 'curl -sXPOST "<http://127.0.0.1>:${SCNODE_REST_PORT}/wallet/allPublicKeys" -H "accept: application/json" -H 
"Content-Type: application/json"'
```

### Check for peers
```bash
docker exec evmapp curl -sX POST "<http://127.0.0.1:9545/node/connectedPeers>" -H "accept: application/json"
```

### Check block height
```bash
docker compose exec evmapp gosu user curl -sX POST "<http://127.0.0.1:9545/block/best>" -H "accept: application/json" | jq '.result.height'
```

### Check for banned peers
```bash
docker exec evmapp gosu user bash -c 'curl -X POST "<http://127.0.0.1>:${SCNODE_REST_PORT}/node/blacklistedPeers" -H "accept: application/json"'
```

### Blockchain is stuck syncing
If the blockchain is totally stuck, or corrupted, delete the existing blockchain on the forger and restart the syncing: in `compose-evm-simplified/deployments/forger/eon` directory:
```bash
docker compose -f docker-compose.yml down evmapp
docker volume ls
docker volume rm evmapp-mainnet-eon_evmapp-data
docker volume ls
docker compose restart evmapp
```

Then, in `/compose-evm-simplified` directory:
```bash
./scripts/forger/generate_keys.sh
```
Check your node is available to connect by scanning it from another machine
```bash
nmap 4.16.58.254 -p 9084
```
Which should show a result of:
```bash
Starting Nmap 7.94 ( https://nmap.org ) at 2024-03-14 09:36 EDT
Nmap scan report for 4.16.58.254
Host is up (0.016s latency).
PORT STATE SERVICE
9084/tcp open aurora
```

Scan your forger from an external machine ports 1-1000
```bash
nmap 4.16.58.254 -p 1-10000
Starting Nmap 7.60 ( https://nmap.org ) at 2024-03-14 09:39 EDT
Nmap scan report for 4.16.58.254
Host is up (0.00070s latency).
Not shown: 9996 closed ports
PORT STATE SERVICE
22/tcp open ssh
9033/tcp open unknown
9084/tcp open aurora
Nmap done: 1 IP address (1 host up) scanned in 0.31 seconds
```

### Check your node is available to connect by scanning it from another machine
```bash
nmap 4.16.58.254 -p 9084
```
should show a result of:
```bash
Starting Nmap 7.94 ( https://nmap.org ) at 2024-03-14 09:36 EDT
Nmap scan report for 4.16.58.254
Host is up (0.016s latency).

PORT     STATE SERVICE
9084/tcp open  aurora
```

### Scan your forger from an external machine ports 1-1000
```bash
nmap 4.16.58.254 -p 1-10000

Starting Nmap 7.60 ( https://nmap.org ) at 2024-03-14 09:39 EDT
Nmap scan report for 4.16.58.254
Host is up (0.00070s latency).
Not shown: 9996 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
9033/tcp open  unknown
9084/tcp open  aurora

Nmap done: 1 IP address (1 host up) scanned in 0.31 seconds
```

## Logs

### Check the evmapp logs
```bash
docker logs --tail 60 evmapp
```

If the forger does not forge a block (most of the time):
```bash
[INFO ] 2024-03-15 09:43:40:450 +0000 [ AbstractForger.scala:176 ][scala-execution-context-global-72] io.horizen.account.forger.AccountForger - Slot is skipped with reason: No eligible forging stake found.
```

If you forge the block, the log will say this instead:
```bash
[INFO ][ AbstractForger.scala:170 ] [scala-execution-context-global-51657] io.horizen.account.forger.AccountForger - Got successfully forged block with id BLOCKHASH
```

### Check that the forger is forging blocks
```bash
docker logs evmapp | grep forged
```

### Working with Zend
#### Check the zend logs
```bash
docker logs --tail 60 zend
```

#### Get shell on zend container
```bash
docker exec -it zend /bin/bash
```

#### Useful tags for the evmapp .env file
This is located in: compose-evm-simplified/deployments/forger/eon

#### Connections to enable good network communication
```
SCNODE_NET_MAX_IN_CONNECTIONS=100
SCNODE_NET_MAX_OUT_CONNECTIONS=25
SCNODE_FORGER_MAXCONNECTIONS=100
```

#### Legacy CPU
```
ZEND_TAG=v5.0.1-legacy-cpu
```

## Using the EON Block Explorer
*The name of your forger is the generated Ethereum (of course it means ZEN)  address of your forger*

The public key of a forger node maps to the name of the forger node by the address derivation:

*Public key -> Address*
*Start with the public key (128 characters / 64 bytes)*

*Take the Keccak-256 hash of the public key. You should now have a string that is 64 characters / 32 bytes. (note: SHA3-256 eventually became the standard, but Ethereum uses Keccak)*

*Take the last 40 characters / 20 bytes of this public key (Keccak-256). Or, in other words, drop the first 24 characters / 12 bytes. These 40 characters / 20 bytes are the address. When prefixed with 0x it becomes 42 characters long.*



