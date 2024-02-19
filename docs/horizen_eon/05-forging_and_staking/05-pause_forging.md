---
title: Pause Forging
---

According to the definition of Cross Chain Transfer Protocol, SC blocks contain references to MC blocks, and the SC follows the longest MC branch. This implies that if the MC undergoes a chain reorganization, the SC too will do the same, invalidating all the latest SC blocks that contain references to reverted MC blocks.

Between two consecutive MC blocks we can easily have many SC blocks forged, but since there is a maximum number of SC blocks that it is possible to revert (this limit is `maxHistoryRewritingLength = 100`), it has been decided to stop forging new SC blocks if no MC block references have been included in the last serie of SC blocks whose length is (`maxHistoryRewritingLength - 1`).

As soon as a new MC block is mined by the MC and a forger is able to include its reference in a new SC block, the forging can be resumed on SC.

**Note:**  The risk of having a SC chain reorganization as a consequence of a fork happening on MC is mitigated by the introduction of a block delay in the MC block referenced by SC.
This means that the last MC block referenced by SC is not the current MC tip but a block whose height is shorter by a defined constant. This number is `mcBlockRefDelay=6`










