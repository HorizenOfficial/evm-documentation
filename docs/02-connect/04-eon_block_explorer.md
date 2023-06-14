---
title: Horizen EON Explorer
---



The Horizen EON Explorer (Gobi Testnet Block Explorer) leverages the feature-rich Blockscout Explorer, an online tool for inspecting and analyzing the Gobi Testnet blockchain. Blockscout is open-source code that allows the ability to customize a block explorer instance to view all transactions, past and current, on the blockchain. Customization options include information such as the network's hash rate and transaction details.


<p>
<img src={require("/img/docs/blockscout/gobi-exp-landing.png").default} alt="landing-page" width="900" height="700" />
</p>

**Note:** Use **Search** to query for a specific transaction, address (wallet or contract), block, and token.



# Key Features

The key features of the Gobi Testnet Block Explorer are modularized in each of the panels in the main landing page. 

## Daily Transaction

The **Daily Transaction** dashboard provides a real-time view of the blockchain with various data points.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-daily.png").default} alt="daily-transaction" width="900" height="700" />
</p>

The categories in the Daily Transaction dashboard includes:

- A **graph view** of transactions processed during a time period. It includes metrics for tracking gas and transactions on a daily basis.
- **Average block time** - This is the average time that a block is created.
- **Total transactions** - The total number of transactions in a time period in the blockchain.
- **Total blocks** - The total number of blocks in the blockchain.
- **Wallet address** - The total number of wallet addresses associated with transactions in the blockchain.

## Blocks

The Block module provides key information about the block.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-blocks.png").default} alt="blocks-module" width="900" height="700" />
</p>

Key information includes:

- **Block number** - The number assigned to the block.
- **Number of transactions** - The running number of transactions for the block.
- **Number of bytes** - The amount of bytes for the block.
- **Elapsed timer for the block** - Tracks amount of time since block creation.

- **Miner (wallet) address** - The miner’s address. Click the address to Address Detail page.

## Transactions

The **Transaction** module provides key information about the transaction.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-transactions.png").default} alt="transactions" width="900" height="700" />
</p>

Key information includes:

- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **Transaction ID (hash)** - The unique identifier that validates the transaction.
- **Address** - The wallet address associated with the transaction. 
- **Transaction Fee** - The amount charged to process the transaction.
- **Contract Address** - The contract address associated with the transaction. Click the address link to naviagate to the **Address Detail** page.
- **(Receiving) Address** - The receiving address associated with the transfer transaction. Click the address receiving asset to **Address Detail** page.

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

- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **Transaction ID (hash)** - The unique identifier that validates the transaction. Click the transaction ID link to navigate to the **Transaction Detail** page.
- **(Sending) Address** - The sending address of the transaction. Click the address receiving asset link navigate to the to **Address Detail** page.
- **Amount of tZEN** - The amount of tZEN transferred in the transaction.
- **Transaction Fee** - The amount charged to process the transaction.
- **Block Number** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since block creation period.

## Forward Transfer

When a user requests for tZEN from the Horizen Faucet, the forward transfer transaction is initiated. A forward transfer moves assets from the mainchain to the sidechain. These transactions, more specifically the transaction outputs, are unspendable on the mainchain. However, they include some metadata so they are redeemable on EON. 

It is the responsibility of EON nodes to monitor the mainchain for incoming transactions, and include them in EON.

The EON Block Explorer highlights the Forward Transfer transaction:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-forward.png").default} alt="forward-transaction" width="900" height="700" />
</p>

Key information includes:

- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **Transaction ID (hash)** - The unique identifier that validates the transaction.
- **(Receiving) Address** - The recipient address of the transaction.
- **Amount of tZEN** - The amount of tZEN transferred in the transaction.
- **Block Number** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since block creation period.

## Fee Payment

The blockchain fee is a tZEN-denoted fee that users are charged when processing transactions. The fee is required to process the transaction on the Gobi Testnet and ensure that transfers arrive at their expected destination. The fees are aggregated and paid to forger nodes that have forged at least one block during the last withdrawal epoch.


The EON Block Explorer highlights the Fee Payment transactions:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-fee.png").default} alt="fee-payment" width="900" height="700" />
</p>

Key information includes:

- **Address** - The wallet address receiving the fee payment. 
- **Amount of tZEN** - The amount of tZEN transferred in the transaction.
- **Block Number** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since block creation period.

# Blockchain Menu

The Blockchain menu has two feature sections:

- Blocks
- Transactions

## Blocks 
The Blocks section includes:

- Blocks
- Forged Blocks (Reorg)

### Forged Blocks (Reorgs)
Forged blocks or chain reorganization (reorgs) takes place when a block is removed from the blockchain and a node receives blocks that are part of a new (longest) chain.

The EON Block Explorer highlights the Reorgs:

<p>
<img src={require("/img/docs/blockscout/gobi-exp-reorg.png").default} alt="reorgs" width="900" height="700" />
</p>

Key information includes:

- **Block Number** - The number assigned to the block.
- **Transactions** - The number of transactions for the block.
- **Bytes** - The number of bytes for the block.
- **Elapsed timer for the block** - Clock counting since block creation period.
- **Miner (wallet) address** - The miner's wallet address. Click the address to **Address Detail** page.
- **Priority  Fee** - The priority fee is the additional amount of fee to have your transaction complete faster. This is also known as a tip.
- **Reward Pool Fee** - The total amount of required fee users paid for the transactions in this block. This is also known as base fee. 
- **Gas Limit** - The maximum amount of total gas consumed for all transactions in one block.
- **Gas Used** - The total amount of gas used by all transactions in this block.

## Transactions  
The Transactions section includes:

- Validated Transactions
- [Forward Transfer](#forward-transfer) 
- [Fee Payments](#fee-payment)
- Pending Transactions
- Verified Contracts

### Validated Transactions
Transaction validation indicates that a transaction conforms to a specific protocol requirement to deem it as valid. Once the transaction is considered valid it is added to the distributed ledger.
 
The **Validated Transaction** feature provides key information about the transaction.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-validated.png").default} alt="validated-transaction" width="900" height="700" />
</p>


Key information includes:

- **Transaction Status** - Indicates the status (Success or Error) details of the transaction.
- **Transaction ID (hash)** - The unique identifier that validates the transaction.
- **Address** - The wallet address initiating the transaction. 
- **Transaction Fee** - The amount charged to process the transaction.
- **Contract Address** - Click the address to Address Detail page.
- **(Receiving) Address** - Click the address receiving asset to Address Detail page.
- **Block Number** - The number assigned to the block.
- **Elapsed timer for the block** - A timer that displays the elapsed time since block creation period.

### Pending Transactions
Currently this feature is not enabled.

### Verified Contracts 
A verified contract shares its source code with the public, including the compiler setting. The verification process compares the generated bytecode with the one deployed on-chain.

The Verified Contracts feature provides key information about the contract.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-verified-contract.png").default} alt="verified-contracts" width="900" height="700" />
</p>


Key information includes:

- **Total Number of Contracts in the Last 24 hours** - The total number of verified contracts in the last 24 hours.
- **Address** - The contract address. 
- **Balance** - The total amount of tZEN associated with the smart contract address.
- **Transaction (Txns)** - The number of transactions associated with the verified contract.
- **Compiler** - The name of the compiler type.
- **Version** - The version number of the compiler type.
- **Optimization** - The optimizer applies a set of simplification rules to opcodes in the contract. A green check mark indicates that optimization is applied. A red cross indicates that optimization was not applied.
- **Construction Args** - A green check mark indicates that construction arguments were used. A red cross indicates that construction arguments were not used.
- **Verified** - A timer that displays the elapsed time since the contract was verified.
- **Market Cap** - The value of the token if it is bought and sold with fiat currency.

# Tokens Menu

The Tokens menu has two feature options:

- All
- tZEN 


## All (Tokens)

The All (Tokens) option displays all ERC-20 tokens in the blockchain. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-alltokens.png").default} alt="all-tokens" width="900" height="700" />
</p>

Key information includes:

- **Token (name)** - The name of the token.
- **Address** - The wallet address associated with the token. Click the address to **Address Detail** page.
- **Total Supply** - The total amount of available tokens.
- **Holder Count** - The number of accounts with some amount of the token listed.

## tZEN (Address)

The tZEN (Address) option displays all addresses with tZEN balances in the blockchain. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-tzentokens.png").default} alt="tzen-tokens" width="500" height="300" />
</p>

Key information includes:

- **Address** - The wallet address. Click the address to **Address Detail** page.
- **Balance** - The total amount of tZEN.
- **Txn Count** - The number of transactions associated with this tZEN that are sent.


# API Menu
The API menu has three feature options that are helpful resources for blockchain development and technical support:

- GraphQL
- RPC
- ETH RPC

## GraphQL

**GraphQL** is a query language for APIs and a runtime for queries with data. It provides a complete review of your API and data. See [GraphQL](https://graphql.org/) for more information.

## RPC 

The **RPC** option displays the API Documentation for developing applications and porting from Etherscan and Blockscout. Click on the desired API category for detailed information.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-rpc.png").default} alt="rpc-api_documentation" width="900" height="700" />
</p>

## ETH RPC 
The **ETH RPC** option displays the Eth API Documentation. The documentation provides supported RPC methods for sending requests to Blockscout.  Scroll to the desired RPC method for detailed information.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-eth-rpc.png").default} alt="eth rpc-api_documentation" width="900" height="700" />
</p>


# Address Details
The **Address Details** page displays the selected address and associated information. This option provides links to other detail information including:

- Transaction
- Token Transfers

<p>
<img src={require("/img/docs/blockscout/gobi-exp-address-details.png").default} alt="address-details" width="900" height="700" />
</p>

Key information includes:

- **Balance** - Address balance in tZEN (does not include ERC-20, ERC-721, ERC-1155 tokens).
- **Tokens** - All tokens in the account and total value.
- **Transactions** - Number of transactions related to this address.
- **Transfers** - Number of transfers to/from this address.
- **Gas Used** - Gas used by the address.
- **Last Balance Update** - Block number in which the address was updated.

#### Copy Icon

The **Address Details** page provides a copy icon and a QR Code (top right corner) as a convenience to copy the address.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-copy-icon.png").default} alt="copy-icon" width="300" height="200" />
</p>

# Transaction Details
The Transaction Details page displays the transaction and associated information. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-tranx-details.png").default} alt="transaction-details" width="900" height="700" />
</p>

Key information includes:

- **Transaction Hash** - Unique character string (Transaction ID) assigned to every verified transaction.
- **Result** - Current transaction state: Success, Failed (Error), or Pending (In Process)
- **Status** - The status of the transaction: Confirmed or Unconfirmed.
- **Block** - Block number containing the transaction.
- **Timestamp** - Date and time of transaction inclusion, including length of time for confirmation.
- **From** - Address (external or contract) sending the transaction.
- **To** - Address (external or contract) receiving the transaction.
- **Value** - Value sent in the native token (and USD) if applicable.
- **Transaction Fee** - Total transaction fee.
- **Gas Price** - Price per unit of gas specified by the sender. Higher gas prices can prioritize transaction inclusion during times of high usage.
- **Transaction Type** - Transaction type, introduced in EIP-2718.
- **Gas Limit** - Maximum gas amount approved for the transaction.
- **Max Fee per Gas** - Maximum total amount per unit of gas a user is willing to pay for a transaction, including base fee and priority fee.
- **Max Priority Fee per Gas** - User defined maximum fee (tip) per unit of gas paid to validator for transaction prioritization.
- **Priority Fee / Tip** - User-defined tip sent to validator for transaction priority/inclusion.
- **Reward Pool Fee**  - Amount of tZEN that goes to the Reward Pool for this transaction. Equals Block Base Fee per Gas * Gas Used.
- **Gas Used by Transaction**  - Actual gas amount used by the transaction.
- **Nonce Position** - Transaction number from the sending address. Each transaction sent from an address increments the nonce by 1.
- **Raw Input** - Binary data included with the transaction. See input/logs for additional information.

## Input

The Input panel displays the input data that is used to call a specific function in a smart contract. The function call data includes the method Id and all parameters that the function requires. 

As an example, a contract call can have a function (method, such as Stake) and input amount (quantity of Stake).

<p>
<img src={require("/img/docs/blockscout/gobi-exp-input.png").default} alt="Input" width="900" height="700" />
</p>

Key information includes:

- **Method Id**  - The method Id of the function call used in the smart contract.
- **Call** - The name of the function call used. 
- **Name** - The name of the input.
- **Type** - The type of input.
- **Data** - The value of the input in hexadecimal encoding.

# Token Transfers

The Token Transfers panel displays the transaction (type) of tokens from one source (wallet or dApp) to a specific address. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-token-transfers.png").default} alt="token transfers" width="900" height="700" />
</p>

Key information includes:

- **Transaction ID (hash)**  - The transaction hash or ID of the token transfer. 
- **Transaction From/To** - The sending address (from) and the recipient address (to).
- **Value** - The value of the transferred token.

# Internal Transactions

Currently, this feature is not enabled.

# Logs
The Logs panel displays the recorded event and associated key information.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-logs.png").default} alt="Logs" width="900" height="700" />
</p>

Key information includes:

- **Address** - The address associated with the event.
- **Topics** - Topics describe the event. The first topic consists of the signature (keccak256 hash) of the event name and its parameters. You can search for specific topics. 
- **Data** - The event data (arrays or strings) in the log record. You cannot search for specific event data.
- **Log Index** - The number of logged index (keys) of the event.

# Raw Trace

Currently, this feature is not enabled.

# State Changes

The State Change panel displays the version of changes for tZEN or token balances that occurred in the given transaction. 

For example, the panel below shows the specific changes in the balances that occurred in a token mint transaction.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-state-changes.png").default} alt="state changes" width="900" height="700" />
</p>

Key information includes:

- **Address**  - Address whose state changed.
- **Balance before** - The amount before transaction.
- **Balance after** - The amount after the  transaction.
- **Change** -  The change direction (up or down) of the balance.

# Contract Address Details
The **Contract Address Details** page displays the selected contract address and associated information. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-contractaddress-details.png").default} alt="contract address details" width="900" height="700" />
</p>


Key information includes:

- **Token** - The name of the token associated with the contract address. 
- **Creator** - Transaction and address of creation. 
- **Balance** - Address balance in tZEN does not include ERC20, ERC721, ERC1155 tokens).
- **Tokens** - All tokens in the account and total value.
- **Transactions** - Number of transactions related to this address.
- **Transfers** - Number of transfers to/from this address.
- **Gas Used** - Gas used by the address.
- **Last Balance Update** - Block number in which the address was updated.

## Transactions Tab
The Transactions tab displays all transactions that are associated with the selected contract address.  

<p>
<img src={require("/img/docs/blockscout/gobi-exp-transactiontab.png").default} alt="transaction tab" width="900" height="700" />
</p>

For each transaction, the contract call status is displayed along with specific information which includes:

- **Transaction Hash** - The transaction Id or hash associated with the contract. Click for Transaction Details.
- **Address** - The address associated with the contract. Click for Address Details.
- **Transaction Fee** - The amount of tZEN fee for the transaction.

## Internal Transactions Tab

Currently, this feature is not enabled.

## Coin Balance History Tab

The Coin Balance History tab displays your coin (cryptocurrency) associated with a connected wallet. This tab shows a graph of your coin balance through time (in days).

<p>
<img src={require("/img/docs/blockscout/gobi-exp-coinbalance.png").default} alt="coin balance" width="900" height="700" />
</p>

## Logs Tab

The Logs tab displays log entries for a select transaction. 

**Note:** Use the **Search** option to query on a specific topic.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-logs-tab.png").default} alt="logs tab" width="900" height="700" />
</p>


This tab shows decoded metadata that includes:

- **Method Id**  - The method Id of the function call used in the smart contract.
- **Call** - The name of the function call used. 
- **Name** - The name of the input.
- **Type** - The type of input.
- **Indexed** - The type of input is either indexed (true) or not (false).
- **Data** - The value of the input in hexadecimal encoding.

### Topics

Topics describe the event. The first topic consists of the **signature** (keccak256 hash) of the event name and **types** (uint256, strings, etc) of its parameters. Anonymous events do not include the signature in the first topic.

### Data

Topics larger than 32 bytes are hashed as data in the log record. Data such as arrays or strings cannot be reliably used as a topic, therefore it is included as data in the log record.

## Code Tab

The Code tab displays the current contract’s code along with its metadata.

**Note:** When a selected contract is not verified, an information notification appears showing a contract address that is verified with the same bytecode. Use the **Verify & Publish** button to verify the current contract.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-codetab-notification.png").default} alt="code notification" width="900" height="700" />
</p>

### Contract Metadata

The contract’s metadata data include:

- **Contract name** - The name of the smart contract.
- **Optimization Enabled** - The optimizer applies a set of simplification rules to opcodes in the contract. If **True**, optimization is applied and **False** if not applied. 
- **Compiler version** - The compiler version number used to compile the smart contract.
- **Optimization run** - The number of runs specifies how often each opcode of the deployed code will be executed throughout the lifespan of the contract.
- **Verified at** - A timestamp when the contract was verified.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-code-tab.png").default} alt="code tab" width="900" height="700" />
</p>

### Constructor Arguments

Some contracts require constructor arguments, which are specific starting values during the time of creation.  For example, a token contract names the token with constructor arguments.

### Contract Source Code

The **Contract Source Code** panel displays the smart contract’s entire source code. This panel is not editable. Click the **Copy Source Code** button to copy to a clipboard.

# Read Contract Tab

The Read Contract tab displays the selected or connected verified contract via its address. 

**Note:** When a selected contract is not verified, an information notification appears showing a contract address that is verified with the same bytecode. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-verifiedcontract-info.png").default} alt="verified contract notification" width="900" height="700" />
</p>

This tab allows you to check various contract attributes. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-read-contract.png").default} alt="read contract" width="900" height="700" />
</p>

## Read Contract Interaction

You can read the smart contract attributes and make changes. These attributes include:

- **allowance** - Returns the amount an approved contract is still allowed to spend or withdraw.
- **balanceOf** - Indicates the number of tokens an address holds.
- **decimals** - The number of decimal places that the token supports.
- **name** - The name assigned to a token for identification.
- **symbol** - A shorthand to the token’s name for easy access within dApps.
- **totalSupply** - Specifies the limit on the number of tokens the smart contract allows.
- **approve** - Allows a contract to spend a specified amount of tokens from an account.
- **decreaseAllowance** - A function that decreases the allowance granted to spender by the caller. 
- **increaseAllowance** - A function that increases the allowance granted to spender by the caller. 
- **transfer** - Requires that the sender have a sufficient balance to send.
- **transferForm** - Allows a transfer from an account that is not making the transaction.

## Write Contract Tab

The Write Contract tab displays the selected or connected verified contract via its address. 

**Note:** When a selected contract is not verified, an information notification appears showing a contract address that is verified with the same bytecode. 

<p>
<img src={require("/img/docs/blockscout/gobi-exp-verifiedcontract-info.png").default} alt="verified contract notification" width="900" height="700" />
</p>

This tab allows you to directly interact with the contract and view its methods. Before you can interact with the smart contract, you must be connected to a wallet.

<p>
<img src={require("/img/docs/blockscout/gobi-exp-write-contract.png").default} alt="write contract" width="900" height="700" />
</p>

### Write Contract Interaction

Use the smart contract functions to change the data in the selected contract. These functions include:

- **approve** - Allows a contract to spend a specified amount of tokens from an account.
- **decreaseAllowance** - A function that decreases the allowance granted to spender by the caller. 
- **increaseAllowance** - A function that increases the allowance granted to spender by the caller. 
- **mint** - Allows the ability to mint tokens and send them to a defined address.
- **transfer** - Requires that the sender have a sufficient balance to send.
- **transferForm** - Allows a transfer from an account that is not making the transaction.







