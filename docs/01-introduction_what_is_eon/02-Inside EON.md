---
title: Inside EON

image: https://eon.horizen.io/docs/img/MetaData_img_blueprint_eon-doc.jpg
---

<head>
  <title>Horizen EON Documentation</title>
</head>



For the EVM project, Horizen Labs has adopted Ethereum’s Account-based transaction model to represent assets as balances within accounts.

## Stateful Model: Account-based Transaction Design

Unlike UTXO model chains (like ZEN), in which coins are uniquely referenced, account model chains represent coins as balances within an account. The Account-based model is simpler than the UTXO model as it voids the notion of "change", where the account model is similar to a bank account where the balance is the result of the sum of deposits less the sum of withdrawals with no notion of the denominations composing the balance.

In the UTXO model, where a user willing to spend 10 tokens needs a composition of coins to be greater or equal to the amount to spend, if that value does not match exactly 10, the user will receive change back (a new coin to be spent in future). In the account model, the amount spent is subtracted from the balance.


## Differences Between Account Types
As mentioned, the account model has two account types:

* **Externally-Owned Account (EOA)** - accounts that are NOT bound to any executable (by the VM) code and may or may not be owned by an external entity (an individual, an organization, a program) that has the related private key. EOA accounts are defined “externally owned” as only the owner of the corresponding private key (which is not public and not stored on the chain - hence external) can issue spend transactions using the account in argument as a source of funds. 

* **Contract Account** - accounts that are bound to an arbitrary code executable by the VM and do NOT have private keys for signing transactions.  


## EOA vs. Smart Contract account

To better understand the differences between these two types of accounts, it is important to understand the concept of a transaction: **a transaction is an operation or a set of operations that produces a change in the state of the accounts involved in the transaction.**    

A transaction can be initiated only by an account with spending capabilities (such as, signing rights) hence by an EOA account. As an analogy, assume your bank account is an EOA, and whatever financial product is a smart contract. If you want to transfer some liquidity from your account to the financial product, only you (the owner of the account), with your PIN or password title, can start the operation. Once the funds are in the financial product, they generate revenues or losses. Still, any resulting outcome can be returned to your liquid bank account only if you (the original owner) sign a new transaction to withdraw from the financial product. 

The operational process of the two types of accounts becomes relevant when they are the destination part of a transaction, where the difference is based on the following:


* **Another EOA account:** a normal fund transfer happens, and the amount of the transaction is transferred from source to destination (again using the bank analogy as it was a wire transfer between two liquid bank accounts)

* **A Contract account:** the transaction invokes the execution (by the VM) of the code bound to the account, and the output of the executed program is added to the balance either of the original account or to what the contract itself specifies (again using the bank analogy you may have bought some company stocks)


It is worth mentioning that due to contracts composability, during the execution of a contract other contract’s code execution can be invoked.

However, there are some key differences described here:

| Key Difference | EOA | Contract Account |
| ------ | ------ |  ------ |
| Cost | No cost to create an account | A one-time creation cost where transparently it is the cost of the deployment transaction. |
| Transaction initiation | Can initiate transactions | Cannot initiate transactions, where it can only execute the code based on the input received.|
| Transaction between EOA and Contract account | EOA to EOA transaction can only be ZEN transfer (native EON asset transfer) | EOA to Contract account transaction triggers the EVM to execute the code bound to the contract. Implies the transfer of an asset being defined in a contract through the execution of code. |
| Cryptographic pair of keys | When an account address (the public key) is bound to a private key the balance can be spent by the owner of the private key. | Does not have private keys: cannot initiate transactions due to lacking the capability of signing. |



