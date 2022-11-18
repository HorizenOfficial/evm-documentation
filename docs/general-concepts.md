# General Concepts


# Gas 

For Horizen EVM, the token used for gas is ZEN. The minimum amount that can be transferred is 1 wei, that is equal to 1 ZEN divided by the 18th power of 10.


# Gas Price

Before EIP-1559, the gas price was equal to the transaction's gas price.

After EIP-1559, it is `baseFeePergas + min(maxFeePerGas - baseFeePerGas, maxPriorityFeePerGas)`.

`Legacy` and EIP-2930 transactions are coerced into the EIP-1559 format by setting both `maxFeePerGas` and `maxPriorityFeePerGas` as the transaction's gas price.


# Base Fees

An important aspect of this fee system is that miners only get to keep the priority fee. In Horizen EVM the base fee is not burned like in Ethereum, but it goes instead in a shared pool to be redistributed among the forgers. This will contribute just like in Ethereum in reducing risks of attacks (an attacker doesn’t have immediate benefit from the block rewards, only the priority fee), but also considers fees as part of the economic incentive for validators. 

This mechanism was originally introduced on Ethereum when consensus still was Proof-of-Work, ensuring the miner of a block does not receive the base fee is important because it removes the miner's incentive to manipulate the fee in order to extract more fees from users. 

On Proof-of-Stake risks are mitigated and anyway handled the way described above.

**Note: **See [Base Fees](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md) and [Fees in EIP-1559](https://www.blocknative.com/blog/eip-1559-fees) for additional information.


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

l`ogsBloom` - The Bloom filter for light clients to quickly retrieve related logs.

`status` - It is either 1 (success) or 0 (failure).

**Note:** See [Receipts](https://github.com/ethereum/go-ethereum/blob/master/core/types/receipt.go) for detailed information.
