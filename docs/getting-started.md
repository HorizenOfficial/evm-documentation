---
sidebar_position: 1
---

# Getting Started

For the EVM project, Horizen Labs has adopted Ethereum’s Account-based transaction model to represent assets as balances within accounts. The Account model has two different types of accounts; **Externally Owned Account** (**EOA**) and **Contract **accounts (which are deployed to the network and controlled by code as smart contracts).

You can connect to an EVM-compatible wallet such as:



* [Cobalt](https://tokenmint.global) wallet 
* [MetaMask](https://metamask.io) wallet 

Next, with your wallet, specify the RPC endpoint and chain ID to make a connection.


# RPC Server

The RPC (remote procedure call) endpoint is like a node's address: it's a URL at which requests for blockchain data can be sent to. The Ethereum JSON-RPC specification defines some industry standard methods which you can use to retrieve data from a node.


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



# Chain ID

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
