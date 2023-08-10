---

title: Environments 

image: https://eon.horizen.io/docs/img/MetaData_img_blueprint_eon-doc.jpg
---

<head>
  <title>Horizen EON Documentation</title>
</head>



## RPC Server

The RPC (Remote Procedure Call) endpoint works as a node's address: it's a URL where requests for blockchain data can be sent to. The Ethereum JSON-RPC specification defines some industry standard methods which can be used to retrieve data from a node.


<table>
  <thead>
    <tr>
      <td><strong>Environment</strong></td>
      <td><strong>URL</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LocalHost</td>
      <td>127.0.0.1 (a local node is required)</td>
    </tr>
    <tr>
      <td>Gobi Testnet</td>
      <td>https://gobi-testnet.horizenlabs.io/ethv1</td>
    </tr>
    <tr>
      <td>Mainnet</td>
      <td>https://eon-rpc.horizenlabs.io/ethv1</td>
    </tr>
  </tbody>
</table>



## Chain ID

The `chainId` was introduced by Ethereum to prevent replay attacks on different networks, where every EVM-compatible blockchain should have its own unique Chain ID.



<table>
  <thead>
    <tr>
      <td><strong>Environment</strong></td>
      <td><strong>Chain ID</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LocalHost</td>
      <td>1997</td>
    </tr>
    <tr>
      <td>Gobi Testnet</td>
      <td>1663</td>
    </tr>
    <tr>
      <td>Mainnet</td>
      <td>7332</td>
    </tr>
  </tbody>
</table>




