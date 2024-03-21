---
title: Attestation Mechanism Data Structure
---
# Attestation Mechanism Data Structure

## Data Structure

The attestation data structure is a digitally-signed message that contains:
- **Merkle root** of a Merkle Tree that contains proofs as leaves.
- **Digital signatures** of validators representing at least ⅔ of the total stake in New Horizen Mainchain.
- An **Attestation ID**. Used for identification, synchronization, and security purposes.

![alt_text](/img/docs/attestation/attestation_data_structure.png)

In order to prove that a given proof is part of the attestation, the user supplies a Merkle Proof (Path) leading from its proof to the Merkle Root (attestation).

![alt_text](/img/docs/attestation/attestation_data_structure2.png)

It is worth mentioning that Substrate employs a slightly optimized version of a Binary Merkle Tree, with the following (recursive) rule: if the number of nodes in the current level is not even, the odd node gets promoted to the upper level. To show it visually, let’s consider the previous tree and let’s assume only 5 proofs were present; normally, the number of leaves is padded to be a power of two and a tree would be produced. Instead, the one produced by Substrate, would look like the following:

![alt_text](/img/docs/attestation/substrate_optimized_merkle_tree.png)

This allows us to reduce the size of the tree and, more interestingly for us, reducing the size of the merkle path for all the leaves with index between [2k , 2k-2], as a new level is added to the tree only when there are actual nodes available.
In order to decouple the Mainchain from Ethereum (the chain on which the attestation) will be posted, the following assumptions are made:

- The **basic operations** done by the Mainchain consensus are:
    * Creation of a new attestation every time the conditions of a given policy are met.
    * Validators sign every attestation.
    * Storage and verification of proofs.

- New Horizen will provide different chains on which to send the attestation, and the users, when submitting a proof, will need to specify the destination chain. Note that:
    * We might envision different attestation publication policies for each destination chain, depending on different characteristics. Ideally, we would like this policy to change dynamically depending on how the destination chain changes (e.g. we might employ an oracle) and/or how many users are interested in bridging on that chain, instead of it being fixed since genesis and thus hardly changeable.
    * Users submitting proofs to NH will pay the fee required to perform basic operations plus the fee required to remunerate the relayer in order to post the proof on the destination chain (different for each chain).

## Initial Functionality

We start with a centralized approach where the attestation will be posted on the target settlement chain by an authorized relayer controlled by Horizen. The relayer:

- Connects to an Ethereum client
- Connects to a NH validator node
- Queries the NH Contract to check the latest published eth_last_attestation_id
- Queries the NH validator node to retrieve the latest nh_last_attestation_id
- If nh_last_attestation_id > eth_last_attestation_id  then the last nh_last_attestation_id - eth_last_attestation_id are posted by invoking either the submitAttestation or submitAttestationsBatch smart contract method
    * This provides some degree of robustness against disconnections of the relayer/reverted transactions.
    * Further work is required in this regard, but considering that we are going to deprecate this centralized layer in favor of a more decentralized and robust bridge, it’s definitely not worth the effort.

The deliverable is a Docker Image that will bootstrap an Ethereum client equipped with write access to NHPV.sol and Sepolia ETH funds.

## Attestation Submission Frequency
The policy leading to the publication of a new attestation is met when one of the following rules is satisfied:
- Last attestation_id contains N proofs.
- Last published attestation is older than T seconds and there is at least one proof in the new tree.
- A root user forces the emission of the event.

Note this attestation submission mechanism will cost around 40k-50k gas.  How frequently an attestation should be relayed to a given chain is not a trivial question and it is influenced by different factors:

- Usage of New Horizen Mainchain.
- The fees to be paid by NH to post an attestation on-chain and by users to verify on-chain that their proof is part of the attestation.
- Users’ choice in terms of cost-finality tradeoff.
- Decoupling of NH Mainchain from the chain(s) on which posting the attestations.
