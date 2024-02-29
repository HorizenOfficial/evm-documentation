---
title: Pause Forging
---

According to the definition of Cross Chain Transfer Protocol, sidechain blocks contain references to mainchain blocks, and the sidechain follows the longest mainchain branch. This implies that if the mainchain undergoes a chain reorganization, the sidechain too will do the same, invalidating all the latest sidechain blocks that contain references to reverted mainchain blocks.

Between two consecutive mainchain blocks we can easily have many sidechain blocks forged, but since there is a maximum number of sidechain blocks that it is possible to revert (this limit is `maxHistoryRewritingLength = 100`), it has been decided to stop forging new sidechain blocks if no mainchain block references have been included in the last series of sidechain blocks whose length is (`maxHistoryRewritingLength - 1`).

As soon as a new mainchain block is mined by the mainchain and a forger is able to include its reference in a new sidechain block, the forging can be resumed on sidechain.

**Note:**  The risk of having a sidechain chain reorganization as a consequence of a fork happening on mainchain is mitigated by the introduction of a block delay in the mainchain block referenced by sidechain.
This means that the last mainchain block referenced by sidechain is not the current mainchain tip but a block whose height is shorter by a defined constant. This number is `mcBlockRefDelay=6`










