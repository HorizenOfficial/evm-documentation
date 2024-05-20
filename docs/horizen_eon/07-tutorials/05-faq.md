---
title: Forger Node FAQ and Troubleshooting
---

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

#### Legacy cpu
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



