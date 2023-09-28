---
title: Forger Node
---

The recent submission of **ZenIP 42206** which states that reward currently paid to **Secure Node** in the Horizen mainchain block will be redirected to an **EON Forger Subsidy Fund**. Thus, any node assigned as a **Forger Node** in the EON ecosystem must have the configuration requirements listed in the EON Forger Node Criteria. The EON Forger Node requirements can be implemented by users or blockchain providers. 

#### Additional Information

* Read the [Horizen Blog](https://blog.horizen.io/zenip-42206-explained-redirect-horizen-secure-node-rewards-into-horizen-eon/) that explains the need for a secure EON ecosystem.
* View the [Beyond Horizen](https://www.youtube.com/watch?v=Y1JUJ4ymk_I) espisode on **Redirecting Secure Node Rewards to EON**.

# EON Forger Node Criteria

Minimum and recommended instance requirements for running an EON Forger Node in the context of Open Forging.

<table>
  <thead>
    <tr>
      <td><strong>Requirement</strong></td>
      <td><strong>Minimum</strong></td>
      <td><strong>Recommended</strong></td>
      <td><strong>Notes</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-CPU Core count</td>
      <td>4</td>
      <td>8</td>
      <td> </td>
    </tr>
    <tr>
      <td>-Frequency/IPC</td>
      <td>2.5 GHz</td>
      <td>3.0+ GHz</td>
      <td>High frequency is required in order to scale better.</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>16 GB</td>
      <td>32 GB</td>
      <td> </td>
    </tr>
    <tr>
      <td>Swap</td>
      <td> - </td>
      <td> - </td>
      <td>Swap is not recommended.</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>64 GB</td>
      <td>512 GB</td>
      <td> </td>
    </tr>
    <tr>
      <td>Storage growth</td>
      <td>TBD</td>
      <td>TBD</td>
      <td>Expected growth over time.</td>
    </tr>
    <tr>
      <td>IOPS</td>
      <td>5000</td>
      <td>NVMe SSD</td>
      <td> </td>
    </tr>
    <tr>
      <td>Bandwidth</td>
      <td>250 Megabit</td>
      <td>500+ Megabit</td>
      <td>Low latency connectivity to other Forger Nodes is crucial.</td>
    </tr>
    <tr>
      <td>IP Address</td>
      <td>IPv4 dedicated</td>
      <td>IPv4 dedicated</td>
      <td> </td>
    </tr>
  </tbody>
</table>

### Network

* EON available for inbound connections on IPv4.
* Correct reachable address and port combination are advertised to the network by EON.
* Must not restrict peer connections.
* Must configure the EON P2P TCP port 9084 to be reachable from the outside for other nodes to connect to (EON MUST accept incoming connections from other nodes).

**Note:**  The requirements detailed can be added to or modified without notice.









