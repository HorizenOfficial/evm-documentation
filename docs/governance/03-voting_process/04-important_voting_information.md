---
title: Important Additional Information About Voting
---

## Voting Power Calculation

All Zen tokenholders get voting power, regardless of whether Zen is held on the Horizen mainchain or the EON sidechain.  In addition, the ERC-20 representation of Zen (WZEN) counts in a user's voting power calculation.  In particular, voting power for your EON address is calculated as the sum of the following four categories:

1. Mainchain Zen amount if linked to your EON address
2. Sidechain Zen amount held in your EON address
3. Sidechain WZEN amount held in your EON address
4. Any Zen delegated to this wallet address, from another wallet address to your EON address

## Snapshot Information

Snapshot is the third-party service provider for Horizen governance.  It works by taking a "snapshot" of all wallet holdings as of a specified block height, and allows users to connect their wallets, sign a message and vote in an off-chain, gasless way so as to avoid having to pay money to vote.  Because of the way that Snapshot works, there are some key points that everyone should be aware of:

* The Zen balances you hold in your wallets at the time of the snapshot will represent your voting power for the specified proposal
* Any amount of Zen moved to your wallet after the snapshot is taken will be ineligible for voting purposes for the specified proposal
* The linking of a Horizen mainchain address to an EON address can happen after the snapshot is taken, but must obviously be done before voting is closed for the specified proposal

It's also very important to note that as stated above, a snapshot of the blockchain's state is taken at the time of proposal creation.  This means if you wish to link Zen from a mainchain address to a sidechain address, and you hold Zen any place other than Sphere, it must be moved to Sphere **prior to the creation of the proposal**.  Please check with your community ambassadors or liaisons for guidance on when proposals are going to be created so as to be prepared for voting if you wish to participate.
