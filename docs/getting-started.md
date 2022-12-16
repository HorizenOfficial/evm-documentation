---
sidebar_position: 1
slug: /
---

# Get Started

*Learn how to communicate with Horizen EVM (Ethereum Virtual Machine) using the JSON-RPC to retrieve data from a node.*

EON is Horizen Labs Ethereum Virtual Machine. EON has adopted Ethereum’s Account-based transaction model to represent assets as balances within accounts. The Account model has two different types of accounts; **Externally Owned Account** (**EOA**) and **Contract **accounts (which are deployed to the network and controlled by code as smart contracts).


## Connect to a Wallet

Connect to an EVM-compatible wallet such as [MetaMask](https://metamask.io).

Once connected to Metamask, specify the RPC endpoint and Chain ID to make a connection.


## RPC Server

The RPC (Remote Procedure Call) endpoint works as a node's address: it's a URL where requests for blockchain data can be sent to. The Ethereum JSON-RPC specification defines some industry standard methods which can be used to retrieve data from a node.


<table>
  <tr>
   <td><strong>Environment</strong>
   </td>
   <td><strong>Chain ID</strong>
   </td>
  </tr>
  <tr>
   <td>LocalHost
   </td>
   <td>127.0.0.1 (a local node is required)
   </td>
  </tr>
  <tr>
   <td>Testnet
   </td>
   <td>https://evm-tn-m2.horizenlabs.io/ethv1
   </td>
  </tr>
  <tr>
   <td>Mainnet
   </td>
   <td>TBD
   </td>
  </tr>
</table>



## Chain ID

The `chainId` was introduced by Ethereum to prevent replay attacks on different networks, where every EVM-compatible blockchain should have its own and unique chain ID.


<table>
  <tr>
   <td><strong>Environment</strong>
   </td>
   <td><strong>Chain ID</strong>
   </td>
  </tr>
  <tr>
   <td>LocalHost
   </td>
   <td>1997
   </td>
  </tr>
  <tr>
   <td>Testnet
   </td>
   <td>1661
   </td>
  </tr>
  <tr>
   <td>Mainnet
   </td>
   <td>TBD
   </td>
  </tr>
</table>
