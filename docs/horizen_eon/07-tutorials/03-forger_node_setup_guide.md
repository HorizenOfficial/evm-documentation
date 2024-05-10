---
title: EON Forger Node Setup Guide
---

# Introduction
Guide assumes you are setting up a forger node on EON mainnet. If you would like to set up a forger on Gobi testnet, replace all eon with gobi in these instructions.

## Requirements
The recent submission of **ZenIP 42206** which states that reward currently paid to **Secure Node** in the Horizen mainchain block will be redirected to an **EON Forger Subsidy Fund**. Thus, any node assigned as a **Forger Node** in the EON ecosystem must have the configuration requirements listed in the EON Forger Node Criteria. The EON Forger Node requirements can be implemented by users or blockchain providers.

### Additional Information
- Read the [Horizen Blog](https://blog.horizen.io/zenip-42206-explained-redirect-horizen-secure-node-rewards-into-horizen-eon/) that explains the need for a secure EON ecosystem.
- View the [Beyond Horizen](https://www.youtube.com/watch?v=Y1JUJ4ymk_I) episode on **Redirecting Secure Node Rewards to EON**.

## EON Forger Node Criteria
Minimum and recommended instance requirements for running an EON Forger Node in the context of Open Forging.

| Requirement     | Minimum      | Recommended  | Notes        |
| ------------    | ------------ | ------------ | ------------ |
| **CPU Core count**  | 4            | 8            |              |
| **Frequency/IPC**   | 2.5 GHz      | 3.0+ GHz     | High frequency is required in order to scale better. |
| **Memory**          | 16 GB        | 32 GB            |              |
| **Swap**            | -            | -            | Swap is not recommended.             |
| **Storage**         | 64 GB        | 512 GB            |             |
| **Storage growth**  | TBD          | TBD            | Expected growth over time.     |
| **IOPS**            | 5000         | NVMe SSD            |      |
| **Bandwidth**       | 250 Megabit  | 500+ Megabit     | Low latency connectivity to other Forger Nodes is crucial.     |
| **IP Address**      | IPv4 dedicated | IPv4 dedicated     |     |


