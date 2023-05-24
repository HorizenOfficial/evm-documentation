---
title: Troubleshooting
---


To help you troubleshoot, review the configuration details and the collection of methods that are available on EON (EVM).

### JSON-RPC specification

EON EVM supports most of the methods that are considered standard for EVM compatible chains.


### Ethereum JSON-RPC API

The Ethereum JSON-RPC is a standard collection of methods that all execution clients implement. It is the canonical interface between users and the network. This interface allows downstream tooling and infrastructure to treat different Ethereum clients as modules that can be swapped at will.

The list of the methods supported, together with some interactive examples are available **[HERE](https://postman.horizenlabs.io/)**.

### General Error Messages

<table>
  <thead>
    <tr>
      <td><strong>Error Code</strong></td>
      <td><strong>Message</strong></td>
      <td><strong>Definition</strong></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-32600</td>
      <td>Invalid Request</td>
      <td>The JSON sent is not a valid request object</td>
    </tr>
    <tr>
      <td>-32601</td>
      <td>Method not found</td>
      <td>The method does not exist / is not available</td>
    </tr>
    <tr>
      <td>-32602</td>
      <td>Invalid params</td>
      <td>Invalid method parameter(s)</td>
    </tr>
    <tr>
      <td>-32603</td>
      <td>Internal error</td>
      <td>Internal JSON-RPC error - e.g. key <code>id</code> is missing</td>
    </tr>
    <tr>
      <td>-32000 to -32099</td>
      <td>Server error</td>
      <td>Reserved for implementation-defined server-errors</td>
    </tr>
    <tr>
      <td>-39001</td>
      <td>Unknown block</td>
      <td>Request for a finalized or safe block before merge</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Execution reverted</td>
      <td>JSON error code for a reverted EVM execution</td>
    </tr>
  </tbody>
</table>











