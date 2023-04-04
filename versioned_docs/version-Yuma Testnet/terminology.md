---
sidebar_position: 9
---

# Terminology

# Account-based Model

The account-based model represents coins as balances within an account. The account model is similar to a bank account, where the balance is the result of the sum of deposits less the sum of withdrawals with no notion of the denominations composing the balance.

# Account Model and State Transition

During the chain advance process, each block stores multiple transactions. Each transaction changes the state of at least two accounts per transaction. It would be impossible for the chain to keep the new state of every transaction's account history and the previously recorded state in each block. This storage issue would lead to enormous and unsustainable storage space and network traffic amplification. Representing the state in Patricia Merkle Trie, for which the root of trie results from applying all transactions in the block's header, would solve this problem.

When nodes synchronize with the tip of the chain, they need to ensure that the application of the consensus rules produces the exact value of the state root as recorded in each block header.


# Account State (Methods of)

While Horizen’s implementation of the Account State for updating account balances is fully compatible with the one implemented in Ethereum (including complete compatibility with Ethereum’s VM), new transaction types are designed to implement the Zendoo paradigm fully. 

The following methods are provided for:

* The transfer of funds from mainchain to the EVM compatible sidechain (Forward Transfer)
* The transfer of funds from EVM compatible sidechain back to mainchain (Backward Transfer)
* The lock of funds into a stake for accounts willing to participate to the forging of new blocks (our sidechain implements Ouroboros PoS consensus instead of Ethereum’s Casper)

While the first bullet depicts a special transaction originating on the mainchain, which is acquired by the sidechain, the other two are implemented using **two special functions** which are **NOT** executed by the EVM but rather by custom Message Processors. 
Given their implementation in Java, all special functions can be treated from the user perspective as normal Smart Contracts, even if their code implementation is not stored on-chain and is not deployed at runtime (pre-compiled).

To address the two special functions, we are calling them ”contracts” because of the similarities. These contracts (Native Contracts) are arbitrarily defined by Horizen and are hard-coded into node implementation when a transaction has any of the two recorded as destination. If in a transaction, the destination address corresponds to one of the predefined Message Processors, that special function will be invoked instead of the EVM.



# Backward Transfer

The sidechain initiates a backward transfer, where special transactions are batched in withdrawal certificates. The transactions are then propagated to the mainchain by sidechain nodes.

# Forger Stake

The Forger Stake is the amount of ZEN locked in the EON sidechain that gives the node operator proportional chances to be the forger of the next block, on the basis of the total ZEN staked in the sidechain.

In EON the procedure for staking is handled using a precompiled message processor (or Native Contract). 

# Forward Transfer

A forward transfer moves ZEN from the mainchain to one sidechain. These transactions, specifically the transaction outputs, are unspendable on the mainchain, but include some metadata so they are redeemable on one sidechains. 



# Gas 

For Horizen EVM, the token used for gas is ZEN. The minimum amount that can be transferred is 1 wei, that is equal to 1 ZEN divided by the 18th power of 10.


# Gas Price

Before EIP-1559, the gas price was equal to the transaction's gas price.

After EIP-1559, it is `baseFeePergas + min(maxFeePerGas - baseFeePerGas, maxPriorityFeePerGas)`.

`Legacy` and EIP-2930 transactions are coerced into the EIP-1559 format by setting both `maxFeePerGas` and `maxPriorityFeePerGas` as the transaction's gas price.


# Fees (Base)

An important aspect of this fee system is that miners only get to keep the priority fee. In Horizen EVM the base fee is not burned like in Ethereum, but it goes instead in a shared pool to be redistributed among the forgers. This will contribute just like in Ethereum in reducing risks of attacks (an attacker doesn’t have immediate benefit from the block rewards, only the priority fee), but also considers fees as part of the economic incentive for validators. 

This mechanism was originally introduced on Ethereum when consensus still was Proof-of-Work, ensuring the miner of a block does not receive the base fee is important because it removes the miner's incentive to manipulate the fee in order to extract more fees from users. 

On Proof-of-Stake risks are mitigated and anyway handled the way described above.

**Note: **See [Base Fees](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) and [Fees in EIP-1559](https://www.blocknative.com/blog/eip-1559-fees) for additional information.


# HDWallet Provider 

The **Truffle HDWallet Provider** is used to sign transactions for addresses derived from a 12-word mnemonic. Use the HDWallet Provider wherever a Web3 provider is needed.  

See [truffle-hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider) for information on installation and usage.

# Message Processor

A message processor is code that executes once a transaction is received. In EON, there are many message processors, one is the EVM, which executes the smart contracts transactions, for example.

# Native Contract

A Native or pre-compiled Contract is the name Horizen has assigned to the custom message processors that the Horizen SDK gives the possibility of building.
 
The Message Processors for **Backward Transfer Contract** and **Forging Stake Contract** are Native Contracts.

# Receipts

Receipts are the data returned by an ZEN client to represent the result of a particular mined transaction.

The **Receipts** contains the following information:

`transactionHash` - The hash of the transaction.

`transactionIndex` - The integer of the transaction's index position in the block.

`blockHash` - The hash of the block that includes this transaction.

`blockNumber` - The number of the block that includes this transaction.

`cumulativeGasUsed`  - The total amount of gas used when this transaction was executed in the block.

`gasUsed` - The amount of gas used by this specific transaction alone.

`contractAddress` - The contract address created, if the transaction was a contract creation, otherwise null.

`logs` - The array of log objects, which this transaction generated.

`logsBloom` - The Bloom filter for light clients to quickly retrieve related logs.

`status` - It is either 1 (success) or 0 (failure).

**Note:** See [Receipts](https://github.com/ethereum/go-ethereum/blob/master/core/types/receipt.go) for detailed information.

# Transactions

Transactions are cryptographically signed data messages that contain a set of instructions. They are initiated by EOAs (externally-owned accounts) and transform the state of the EVM, which are broadcasted to the entire network. Transactions require a fee, known as **gas**. 

There are several types of transactions:
* Regular transactions: where transactions are from one account to another
* Contract deployment transactions: transactions without a **to** address, where the contract code is sent to the **data** field
* Execution of a Smart Contract: transactions that interact with a deployed smart contract, where the **to** address is the smart contract
* Execution of the code of a Native Contract: transactions that interact with a pre-compiled smart contract written in Java, where the **to** address is written in the code







