---
title: Smart Contract Functionality
---

# Smart Contract Functionality

## Overview

Have a new Smart Contract deployed on Ethereum where an authorized NH entity publishes the proof verification result. This smart contract:
- Inherits from AccessControl.
- Keeps the attestations as storage variables.

```
mapping(uint256 => bytes32) public proofsAttestations;
```

- Has a method to submit new attestations.

```
function submitAttestation(
   uint256 _attestationId,
   bytes32 _proofsAttestation
)external onlyRole(ADMIN);
```

- Which verify that the attestation id is incremental (newAttestationId = latestAttestationId + 1) if and only if this check is enabled, so we need to add a configuration flag somewhere.
    * For the initial delivery, we will have a very simple relayer that will be replaced with a proper production-ready bridge for later milestones. As such, we don’t want the attestation publishing being stopped due to some unexpected errors, so we can initially skip this check and keep publishing attestations and, if there are holes, submit them manually later.
- Add a new entry to the mapping using the newAttestationId and storing the newAttestation.
- Emit a new `AttestationPosted(attestationId, attestation)` event.

Another method might be useful in situations when the relayer goes down for some reasons and gets back online when multiple attestations have been published on NH:

```
function submitAttestationsBatch(
   uint256[] _attestationIds,
   bytes32[] _proofsAttestations
)external onlyRole(ADMIN);
```

- Checks that _attestationIds.len() == _proofsAttestations.len().
- Invokes multiple times the submitAttestation method.
It’s a bit cheaper than calling submitAttestation externally multiple times, as you’ll pay the initial gas fee only one time, plus it avoids edge cases related to Ethereum nonce management.

- Has a method to be called by proof submitters’ contracts to verify that their proof has been attested by a published attestation.

```
function verifyProofAttestation(
      uint256 _attestationId,
      bytes32 _leaf,
      bytes calldata _merklePath,
      uint32 _number_of_leaves,
      uint256 _index
) external view returns (bool)
```
Which:
- Checks _attestationId exists in the proofsAttestations storage mapping.
- Computes claimedAttestation = apply(_leaf, _merklePath, _index).
- Returns claimedAttestation ==  proofsAttestation[_attestationId].


The verification of the Merkle Path is carried out by employing the Merkle.sol library contract provided by EigenDA. We preferred this choice over OpenZeppelin as it is assuming that both leaves and internal nodes are ordered lexicographically, which is something not necessarily true for us; moreover, EigenDA implementation is more optimized.

However, such implementation needs to be modified to accommodate the fact that Substrate uses a slightly optimized version of a Binary Merkle tree, while the contract assumes the Merkle Tree to be always complete and balanced. Please refer to the Substrate source code for more info.
