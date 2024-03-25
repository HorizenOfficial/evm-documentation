---
title: Attestation Mechanism Initial Functionality
---

# Attestation Mechanism Initial Functionality

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
- Decoupling of NH Mainchain from the chain(s) which are posting the attestations.
