---
title: Horizen EON Explorer
---



The Horizen EON Explorer leverages the feature-rich Blockscout Explorer, an online tool for inspecting and analyzing the Horizen EON blockchain. Blockscout is open-source code that allows the ability to customize a block explorer instance to view all transactions, past and current, on the blockchain. Customization options include information such as the network's hash rate and transaction details.


<p>
<img src={require("/img/docs/blockscout/exp-landing.png").default} alt="landing-page" width="900" height="700" />
</p>

**Note:** Use **Search** to query for a specific transaction, address (wallet or contract), block, and token.



## Key Features

The key features of the Horizen EON Block Explorer are modularized in each of the panels in the main landing page. 

### Daily Transactions

The **Daily Transactions** dashboard provides a real-time view of the blockchain with various data points.

<p>
<img src={require("/img/docs/blockscout/exp-daily-txs.png").default} alt="daily-transaction" width="900" height="700" />
</p>

The categories in the Daily Transactions dashboard includes:

- A **graph view** of transactions processed during a time period. It includes metrics for tracking gas and transactions on a daily basis.
- **Total blocks** - The total number of blocks in the blockchain.
- **Average block time** - This is the average time that a block is created.
- **Total transactions** - The total number of transactions in a time period in the blockchain.
- **Wallet address** - The total number of wallet addresses associated with transactions in the blockchain.
- **Gas tracker** - Current gas price in Gwei

### Latest blocks

The **Latest blocks** module provides key information about the latest block.

<p>
<img src={require("/img/docs/blockscout/exp-blocks.png").default} alt="blocks-module" width="300" height="700" />
</p>

Key information includes:

- **Block number** - The number assigned to the block.
- **Number of transactions** - The running number of transactions for the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since the block creation.
- **Forger (wallet) address** - The miner’s address. Click the miner's address link to navigate to the **Address Detail** page.

### Latest transactions

The **Latest transaction** module provides key information about the latest transaction.

<p>
<img src={require("/img/docs/blockscout/exp-transactions.png").default} alt="transactions" width="900" height="700" />
</p>

Key information includes:

- **Transaction ID (hash)** - The unique identifier that validates the transaction.
- **Type** - The specific type of the transaction (Coin transfer, Contract call, etc.).
- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **(Sending) Address** - The sending address of the transaction. Click the address receiving asset link navigate to the to **Address Detail** page.
- **(Receiving) Address** - The receiving address associated with the transfer transaction. Click the address receiving asset to **Address Detail** page.
- **Amount of TZEN** - TZEN value associated with the transaction.
- **Transaction Fee** - The amount charged to process the transaction.

## Block Explorer Features

The EON Block Explorer gives you the ability to search the blockchain for transactions, addresses, and statistics, including the customized features of:

- Backward Transfer
- Forward Transfer
- Fee Payment


Typically, when a user decides to move ZEN from a sidechain back to the mainchain (to either send ZEN to another sidechain or to cash out, for example) the backward transfer transaction is deployed. Backward transfers are initiated on EON (EVM sidechain) as special transactions batched in withdrawal certificates and propagated by EON nodes to the mainchain.

The EON Block Explorer highlights the Backward Transfer transaction:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-backward.png").default} alt="backward-transaction" width="900" height="700" />
</p>

Key information includes:

- **Txn hash** - The unique identifier that validates the transaction.
- **Method** - In the case of backward transfers the method is always backwardTransfer.
- **From** - The sending address of the transaction.
- **To** - In the case of backward transfers the destination address is the Withdrawal Request native contract.
- **Value tZEN** - The amount of TZEN transferred in the transaction.
- **Fee tZEN** - The TZEN amount charged to process the transaction.

### Forward Transfer

When a user requests for TZEN from the Horizen Faucet, the forward transfer transaction is initiated. A forward transfer moves assets from the mainchain to the sidechain. These transactions, more specifically the transaction outputs, are unspendable on the mainchain. However, they include some metadata so they are redeemable on EON. 

It is the responsibility of EON nodes to monitor the mainchain for incoming transactions, and include them in EON.

The EON Block Explorer lists the Forward Transfer transaction:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-forward.png").default} alt="forward-transaction" width="900" height="700" />
</p>

Key information includes:

- **Block** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since the block creation.
- **To** - The recipient address of the forward transfer.
- **Value tZEN** - The amount of TZEN transferred in the forward transfer.

### Fee Payment

The blockchain fee is a ZEN-denoted fee that users are charged when processing transactions. The fee is required to process the transaction on Horizen EON and ensures that transfers arrive at their expected destination. The fees are aggregated and paid to forger nodes that have forged at least one block during the last withdrawal epoch.

The EON Block Explorer lists the Fee Payment transactions:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-fee.png").default} alt="fee-payment" width="900" height="700" />
</p>

Key information includes:

- **Block** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since the block creation.
- **To** - The recipient address of the fee payment.
- **Value tZEN** - The amount of TZEN transferred in the fee payment.

## Blockchain Menu

The Blockchain menu has these feature sections:

- Transactions
- Blocks
- Top accounts
- Verified contracts 
- Backward transfers
- [Forward Transfers](#forward-transfer) 
- [Fee Payments](#fee-payment)

## Transactions  
The Transactions section includes:

- Validated Transactions
- Pending Transactions
- [Forward Transfers](#forward-transfer) 
- [Fee Payments](#fee-payment)
- Backward transfers

### Validated Transactions
Transaction validation indicates that a transaction conforms to a specific protocol requirement to deem it as valid. Once the transaction is considered valid, it is added to the distributed ledger.

The **Validated Transaction** feature provides key information about the transaction.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-validated.png").default} alt="validated-transaction" width="900" height="700" />
</p>

Key information includes:

- **Txn hash** - The unique identifier that validates the transaction.
- **Type** - The specific type of the transaction (Coin transfer, Contract call, etc.).
- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **Method** - In the case of backward transfers the method is always backwardTransfer.
- **From** - The sending address of the transaction.
- **To** - In the case of backward transfers the destination address is the Withdrawal Request native contract.
- **Value tZEN** - The amount of TZEN transferred in the transaction.
- **Fee tZEN** - The TZEN amount charged to process the transaction.


### Blocks 
The Blocks section includes:

- All (all validated blocks)
- Forked (forked blocks)

Forked blocks or chain reorganization takes place when a block is removed from the blockchain and a node receives blocks that are part of a new (longest) chain.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-forks.png").default} alt="forks" width="900" height="700" />
</p>

Key information the validated and forked blocks includes:

- **Block** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since the block creation.
- **Bytes** - The number of bytes for the block.
- **Forger (wallet) address** - The miner's wallet address. Click the miner's address link to navigate to the **Address Detail** page.
- **Txn** - The number of transactions for the block.
- **Gas Used** - The total amount of gas used by all transactions in this block.
- **Reward tZEN** - 
- **Reward pool fees tZEN** - The total amount of required fees users paid for the transactions in this block. This is also known as the base fee.


### Top accounts

The Top accounts (Address) option displays in descending order all addresses with TZEN balances in the blockchain. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-tzentokens.png").default} alt="tzen-tokens" width="500" height="300" />
</p>

Key information includes:

- **Rank** - Rank of the address in term of TZEN Balance
- **Address** - The wallet address. Click the wallet address link to navigate to the **Address Detail** page.
- **Balance tZEN** - The total amount of TZEN.
- **Percentage** - Percentage of TZEN owned by the address in term of total amount on the sidechain.
- **Txn Count** - The number of transactions associated with this TZEN that are sent.

### Verified Contracts 
A verified contract shares its source code with the public, including the compiler setting. The verification process compares the generated bytecode with the one deployed on-chain.

The Verified Contracts feature provides key information about the contract.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-verified-contract.png").default} alt="verified-contracts" width="900" height="700" />
</p>

Key information includes:

- **Total Number of Contracts** - The total number of verified contracts and contracts added in the last 24 hours.
- **Total Number of Verified Contracts** - The total number of verified contracts .
- **Address** - The contract address. 
- **Balance** - The total amount of TZEN associated with the smart contract address.
- **Transaction (Txs)** - The number of transactions associated with the verified contract.
- **Compiler / version** - The name of the compiler type.
- **Version** - The version number of the compiler type.
- **Optimization** - The optimizer applies a set of simplification rules to opcodes in the contract. A green check mark indicates that optimization is applied. A red cross indicates that optimization was not applied.
- **Construction Args** - A green check mark indicates that construction arguments were used. A red cross indicates that construction arguments were not used.
- **Verified** - A timer that displays the elapsed time since the contract was verified.

## Tokens Menu

The Tokens section displays all ERC-20 tokens in the blockchain. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-alltokens.png").default} alt="all-tokens" width="900" height="700" />
</p>

Key information includes:

- **Token (name)** - The name of the token.
- **Address** - The wallet address associated with the token. Click the wallet address link to navigate to the **Address Detail** page.
- **Price** - if defined, value of a single token.
- **On-chain market cap** - if defined, total value present on the sidechain for the token.
- **Holder Count** - The number of accounts with some amount of the token listed.

## API Menu
The API menu has three feature options that are helpful resources for blockchain development and technical support:

- REST API
- GraphQL

### GraphQL

**GraphQL** is a query language for APIs and a runtime for queries with data. It provides a complete review of your API and data. See [GraphQL](https://graphql.org/) for more information.

### REST API 

The **REST API** option displays the API Documentation for developing applications and porting from Etherscan and Blockscout. Click on the desired API category for more detailed information.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-rpc.png").default} alt="rpc-api_documentation" width="900" height="700" />
</p>


## Address Details
The **Address Details** page displays the selected address and its associated information.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-address-details.png").default} alt="address-details" width="800" height="700" />
</p>

Key information includes:

- **Balance** - Address balance in TZEN (does not include ERC-20, ERC-721, ERC-1155 tokens).
- **Transactions** - Number of transactions related to this address.
- **Gas Used** - Gas used by the address.
- **Last Balance Update** - Block number in which the address was updated.

## Transaction Details
The **Transaction Details** page displays the transaction and associated information. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-tranx-details.png").default} alt="transaction-details" width="900" height="700" />
</p>

Key information includes:

- **Transaction Hash** - Unique character string (Transaction ID) assigned to every verified transaction.
- **Status and method** - The status of the transaction and, if present, the contract method called.
- **Block** - Block number containing the transaction and block confirmations value.
- **Timestamp** - Date and time of transaction inclusion, including length of time for confirmation.
- **From** - Address (external or contract) sending the transaction.
- **To** - Address (external or contract) receiving the transaction.
- **Value** - Value sent in the native token (and USD) if applicable.
- **Transaction Fee** - Total transaction fee.
- **Gas Price** - Price per unit of gas specified by the sender. Higher gas prices can prioritize transaction inclusion during times of high usage.
- **Gas usage & limit by txn** - Actual gas amount used by the transaction
- **Gas fees (Gwei)** - Network base fee at the time of the block.
- **Txn Type** - Transaction type, introduced in EIP-2718.
- **Nonce** - Transaction number from the sending address. Each transaction sent from an address increments the nonce by 1.
- **Position** - Transaction position in the block.
- **Raw Input** - Binary data included with the transaction. See input/logs for additional information.

## Contract Address Details
The **Contract Address Details** page displays the selected contract address and associated information. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-contractaddress-details.png").default} alt="contract address details" width="900" height="700" />
</p>

Key information includes:

- **Token** - The name of the token associated with the contract address. 
- **Creator** - Transaction and address of creation. 
- **Balance** - Address balance in TZEN does not include ERC20, ERC721, ERC1155 tokens).
- **Transactions** - Number of transactions related to this address.
- **Transfers** - Number of transfers to/from this address.
- **Gas Used** - Gas used by the address.
- **Last Balance Update** - Block number in which the address was updated.