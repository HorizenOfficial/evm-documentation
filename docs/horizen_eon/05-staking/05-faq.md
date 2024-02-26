---
title: Forger Node FAQ
---

## Frequently Asked Questions

#### Enable Forging
Make a `POST` request to `/block/startForging` to command the node to start forging blocks. If the node is not yet running, set the `automaticForging` parameter to `true` in the `forger` section of the config file.  
To stop forging, call the endpoint `/block/stopForging`.

#### Stake Maturity
When a forger stake is created, it is not immediately ready to let the forger take part in the forgers' election. The stake will start to be accounted in the slot leader lottery from the beginning of the  **second consensus epoch** following the one where its creation happened.
For example: if the stake transaction was included in the middle of epoch 10, it will be accounted from the beginning of the epoch 12.\
Each consensus epoch length is 15000 slots * 3 seconds per slot = 12h30minutes.


#### Verify the Stake Creation
To make sure the operation was successful, make a `POST` request to `/transaction/allForgingStakes` and verify the publicKey used to create the forger stake appears in the returned list.

#### EON fee redistribution system
The probability that a forger will be elected as a slot leader will be proportional to the amount of stake he owns versus the total stake present on the chain.\
If a forger wins the forger's lottery and is able to produce a new block, and the block is accepted by the other peers, it will earn a fee reward.\
The transactions' fee mechanism in EON mimics the one defined in Ethereum. Every transaction has a fee computed with the following formula:
```
transaction fee = gasUsed * baseFeePerGas + gasUsed *maxPriorityFeePerGas
```
- baseFeePerGas is a minimum rate a user has to pay to include their transaction in the next block. This value is generated with every block header by the protocol and may change block by block, based on how full the previous block was.
- The other part of the fee is determined by maxPriorityFeePerGas and represents the so called "forger tip": it is an additional fee the transaction submitter is willing to pay to have its transaction included as soon as possible.
- there is another user specified parameter in the transaction:
maxFeePerGas - represents the maximum fee a user is willing to pay for a transaction.
This parameter actually limits the maxPriorityFeePerGas with tthis rule:\
if ( baseFeePerGas + maxPriorityFeePerGas) > 	maxFeePerGas, then maxPriorityFeePerGas will be reduced in order to maintain the upper bound of the 	maxFeePerGas.
- Finally, we can have also legacy (non EIP-1559) transactions, with only a gasPrice parameter that we use for both maxFeePerGas and maxPriorityFeePerGas values


The baseFee in EON is collected in a pool and redistributed at *the end of each withdrawal epoch* to all the forgers of the epoch, proportionally to the number of blocks they forged in the epoch. (this is a distinction from the Ethereum protocol, where the baseFee is burned).\
Additionally, each forger earns all the forger tips of the transactions included in the blocks he forgerd. Also forger's tips are redistributed at the end of each withdrawal epoch.\
Widthdrawal epoch length is based on the number of mainchain blocks referenced by the sidechain: each epoch switch happens every 100 mainchain blocks. Given that in the mainchain a block is forged on average every 2 minutes and 30seconds, it takes approximately 4 hours to switch a withdrawal epoch.

Fee payments are calculated automatically by every node and enforced at consensus level. They can also be checked in the EON Explorer at this address: [https://eon-explorer.horizenlabs.io/fee-payment](https://eon-explorer.horizenlabs.io/fee-payment)
