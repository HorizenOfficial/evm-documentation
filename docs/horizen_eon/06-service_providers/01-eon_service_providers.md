---
title: EON-compatible Service Providers
---

The EON ecosystem is perpetually changing with new partners and integrations. To accommodate the compatibility of EON platform with third-party integration, several service provider protocols are used to facilitate the onboarding of new dApps, services, tools, and more.

See the [EON Ecosystem](https://eon.horizen.io/ecosystem) for a description of current service providers.    


# Service Providers: Technology Features

As new partners and integrations are onboarding to the EON ecosystem, the need to use the following service providers’ technologies is imperative for a successful EVM-compatible sidechain:


## Ankr  

Ankr provides a Web3 infrastructure that has many use cases, from Web3 API, staking, blockchain deployment tool, and smart contract execution.

Request for [EON Ankr-specific](mailto:info@horizen.io) documentation.


## Archon

One of Horizen's partners, Archon, has built a bridge on top of the LayerZero protocol.  The bridge is here:

* [Archon bridge](https://bridge.archon.finance/)

#### EON NETWORK :
On the Horizen EON network, in order to received previously wrapped tokens from Ethereum and Avalanche in their original form, use the following:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0xA2C2214dD03a60404C5AdeF4514E77fC00668592

In order to send Zen or other native assets to Ethereum, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x4fd89120A6d34024Cb86a9a0d7819565Fe4eC351

In order to send Zen or other native assets to Avalanche, use the following:
* Contract name : Original Token Bridge
* Contract address : 0x7A302432D99DE20bc622e9148b690f22ef21436e

Finally, the following addresses are for a variety of bridged assets:
* EON contract address for Wrapped ETH : 0x2c2E0B0c643aB9ad03adBe9140627A645E99E054
* EON contract address for AVAX : 0x6318374DFb468113E06d3463ec5Ed0B6Ae0F0982
* EON contract address for USDC : 0xCc44eB064CD32AAfEEb2ebb2a47bE0B882383b53
* EON contract address for USDT : 0xA167bcAb6791304EDa9B636C8beEC75b3D2829E6
* EON contract address for DAI : 0x38C2a6953F86a7453622B1E7103b738239728754
* EON contract address for LINK : 0xDF8DBA35962Aa0fAD7ade0Df07501c54Ec7c4A89
* EON contract address for BTC : 0x1d7fb99AED3C365B4DEf061B7978CE5055Dfc1e7

#### ETHEREUM NETWORK :
On the Ethereum network, the following contract will receive Wrapped Zen (WZEN) from EON:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0x8dE1Fb1F8a23202C7282716AE0089c6a96e07995

In order to wrap native Ethereum assets and send them to EON, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x954367cb2028e704B62a4093f648BE453aCA3989

Finally, the contract address for Wrapped Zen on Ethereum is:
* Contract name : "Wrapped Zen"
* Contract address : 0xd21475D90686c9A6FDBe0849cb6670fEc2aC9E21


#### AVALANCHE NETWORK :
On the Avalanche network, the following contract will receive Wrapped Zen (WZEN) from EON:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0xB2F5d60530C5E589bd9326e4c57933F611a624C6

In order to wrap native Avalanche assets and send them to EON, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x0c81b1905125ED89C42a0aDa098adfd461f8A9C5

Finally, the contract address for Wrapped Zen on Avalanche is:
* Wrapped ZEN : 0xAA1dA1591cBF7f2Df46884E7144297FF15Ea3a7f


## Band Protocol

The Band Protocol is a cross-chain data oracle platform (cross-chain oracles bridge data across various blockchains, thereby enabling interoperability between blockchains) to build high-quality suites of Web3 development products.

The Band Protocol provides reliable, secure, and real-time data to smart contracts on EON and other blockchain networks.

See the [Band Protocol](https://docs.bandchain.org/develop/supported-blockchains/) documentation for more information.


## Covalent

Covalent is a hosted Web3 data provider offering a Unified API to bring full transparency and visibility to assets across all blockchain networks.

Developers use Covalent to build multi-chain applications like crypto wallets, NFT galleries, and investor dashboard tools utilizing data from various blockchain networks.

See the [Covalent](https://www.covalenthq.com/docs/networks/horizen/) documentation for more information.


## Flair

Flair provides real-time and historical custom data indexing for EON. It offers reusable indexing primitives (such as fault-tolerant RPC ingestors, custom processors, re-org aware database integrations) to make it easy to receive, transform, store and access your on-chain data.

See the [Flair](https://docs.flair.dev/) documentation for more information.


## The Graph Protocol

The Graph is an indexing protocol for organizing blockchain data and accessible with GraphQL.

Request for [EON Graph-specific](mailto:info@horizen.io) documentation.


## Interport

Interport Finance is a cross-chain trading platform that revolutionizes the way you perform cross-chain and single-chain trades. With our cutting-edge meta DEX aggregation, cross-chain messaging, and interchain stable coin liquidity, you can seamlessly swap ANY token on ANY supported chain to ANY token on ANY supported chain in a single transaction, all at the best rate.

See the [Interport](https://docs.interport.fi/) documentation for more information.

## LayerZero

LayerZero is an omnichain interoperability protocol designed for lightweight message passing across chains. LayerZero provides authentic and guaranteed message delivery with configurable trustlessness.

See the [LayerZero](https://layerzero.gitbook.io/docs/) documentation for more information.

#### Horizen EON

* **Chain ID:** 215
* **Endpoint:** 0xb6319cC6c8c27A8F5dAF0dD3DF91EA35C4720dd7

## Pyth Protocol

The Pyth protocol allows market participants to publish pricing information on-chain for others to use. The Pyth Network is an oracle that publishes financial market data to multiple blockchains.

See the [Pyth](https://docs.pyth.network/documentation/pythnet-price-feeds/evm) documentation for more information.


## Relink Protocol/Chainlink VRF Proxy

Relink has developed a proxy service solution (Chainlink VRF Proxy) that forwards the random data request to an officially Chainlink supported chain, where it processes the result accordingly.



A Relink oracle network signs the data generated by Chainlink and passes the original data along with the signatures to the callback method. Signature checks in the consumer base contract ensure that the data cannot be altered in transit from the Relink backend.

The Chainlink service is available to any smart contract platform, where there are no restrictions to EON.  

See the following Relink documentations for additional information:


* [Relink Protocol](https://docs.relink.services/)
* [Relink - Trustless Chainlink Relaying Service](https://github.com/RelinkServices/relink-contracts-solidity-evm/blob/main/README.md#relink---trustless-chainlink-relaying-service)
* [Relink Contract-Solidity-EVM repository](https://github.com/RelinkServices/relink-contracts-solidity-evm)

## Revoke.cash

Revoke.cash is a tool that helps you manage your wallet’s token approvals on over 60 networks. When using marketplace or exchange dApps, you have to grant them permission to spend your tokens and NFTs. This is called a token approval. If you don’t revoke these approvals, the dApp can spend your tokens forever. Revoke.cash allows you to inspect and revoke the approvals that you no longer use to prevent unwanted access to your funds.

See the [Revoke.cash](https://revoke.cash/) documentation for more information.

## Archon

One of Horizen's partners, Archon, has built a bridge on top of the LayerZero protocol.  The bridge is here:

* [Archon bridge](https://bridge.archon.finance/)

#### EON NETWORK :
On the Horizen EON network, in order to received previously wrapped tokens from Ethereum and Avalanche in their original form, use the following:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0xA2C2214dD03a60404C5AdeF4514E77fC00668592

In order to send Zen or other native assets to Ethereum, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x4fd89120A6d34024Cb86a9a0d7819565Fe4eC351

In order to send Zen or other native assets to Avalanche, use the following:
* Contract name : Original Token Bridge
* Contract address : 0x7A302432D99DE20bc622e9148b690f22ef21436e

Finally, the following addresses are for a variety of bridged assets:
* EON contract address for Wrapped ETH : 0x2c2E0B0c643aB9ad03adBe9140627A645E99E054
* EON contract address for AVAX : 0x6318374DFb468113E06d3463ec5Ed0B6Ae0F0982
* EON contract address for USDC : 0xCc44eB064CD32AAfEEb2ebb2a47bE0B882383b53
* EON contract address for USDT : 0xA167bcAb6791304EDa9B636C8beEC75b3D2829E6
* EON contract address for DAI : 0x38C2a6953F86a7453622B1E7103b738239728754
* EON contract address for LINK : 0xDF8DBA35962Aa0fAD7ade0Df07501c54Ec7c4A89
* EON contract address for BTC : 0x1d7fb99AED3C365B4DEf061B7978CE5055Dfc1e7

#### ETHEREUM NETWORK :
On the Ethereum network, the following contract will receive Wrapped Zen (WZEN) from EON:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0x8dE1Fb1F8a23202C7282716AE0089c6a96e07995

In order to wrap native Ethereum assets and send them to EON, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x954367cb2028e704B62a4093f648BE453aCA3989

Finally, the contract address for Wrapped Zen on Ethereum is:
* Contract name : "Wrapped Zen"
* Contract address : 0xd21475D90686c9A6FDBe0849cb6670fEc2aC9E21


#### AVALANCHE NETWORK :
On the Avalanche network, the following contract will receive Wrapped Zen (WZEN) from EON:
* Contract name : "Wrapped Token Bridge"
* Contract address : 0xB2F5d60530C5E589bd9326e4c57933F611a624C6

In order to wrap native Avalanche assets and send them to EON, use the following:
* Contract name : "Original Token Bridge"
* Contract address : 0x0c81b1905125ED89C42a0aDa098adfd461f8A9C5

Finally, the contract address for Wrapped Zen on Avalanche is:
* Wrapped ZEN : 0xAA1dA1591cBF7f2Df46884E7144297FF15Ea3a7f
