---
title: EON Security for Users
---


Security in the realm of blockchain technology is paramount. For users in the blockchain space, particularly those engaged with the EON network, it's essential to understand and employ good security practices to protect your assets and personal data from potential threats. In this document, we delve into the world of the EON network security. We want to emphasize the importance of security within EON, the distinct security features that EON implements, and present a user-friendly guide to help users enhance their own security. Furthermore, it addresses the common threats faced within the EON environment, outlines EON's future plans for bolstering security, and underscores the necessity for users to prioritize and actively participate in ensuring their security within the network.

## Overview 

The first area of understanding is that EON is an EVM, or the Ethereum Virtual Machine, running in the Horizen ecosystem, enabling users to create and run smart contracts. Security within EON is critical for protecting these contracts and the transactions they govern from unauthorized access or malicious manipulation. It's this security that provides you with the confidence to participate in the network, knowing your assets are protected.

EON offers robust security features to safeguard both the network and the smart contracts running on it. For smart contract security, EON has mechanisms to protect against common vulnerabilities and exploits, helping to ensure contracts execute as intended. 


## EON Network Security

At a network level, EON employs various measures to guard against potential threats, keeping the EON environment secure and trustworthy for users. Security measures include:

* **Consensus Algorithm** - One key aspect of EON's network security is its consensus algorithm. Without going into technical details, this mechanism, a Proof of Stake consensus, ensures that all transactions are verified and validated by multiple network participants, preventing fraudulent transactions from being added to the blockchain. This consensus mechanism is based on Ouroboros Praos; more information is available here: https://eprint.iacr.org/2017/573.pdf

* **Sybil Attacks** - EON also protects against Sybil attacks, where an attacker attempts to overwhelm the network with nodes they control. To counter this, EON uses a Proof of Stake mechanism, which makes such attacks prohibitively expensive or technically challenging.


* **Distributed Denial of Service Attacks** - EON has implemented robust defenses against Distributed Denial of Service (DDoS) attacks. These attacks attempt to overload the network with excessive data or requests, intending to bring down the service. EON combats this threat with a service that provides methods like rate limiting and IP blocking.

* **Cryptographic Techniques** - EON employs advanced cryptographic techniques to ensure the confidentiality, integrity, and authenticity of data. It makes sure that transaction data can only be accessed and understood by the intended parties and hasn't been tampered with during transmission. It also ensures the identities of the participants in a transaction are verified, preventing impersonation attacks.


## EON Audits by Product

EON has been audited by several reputable auditing firms that specialize in blockchain security. We also performed rigorous internal auditing with unit testing, integration testing, and code reviews to check for common vulnerabilities and potential exploit scenarios. 

## Security Guidelines

Security in the blockchain space is a shared responsibility. While EON takes care of network and smart contract security, users also need to play their part. Safeguarding your private keys, being mindful when interacting with smart contracts, and following best practices for wallet security are crucial steps to ensure your transactions and funds remain secure within the EON ecosystem.

## Private Key Security: Steps to Secure Your Private Keys

Private keys are like your secret password in the blockchain world, giving you access to your digital assets. Losing them could mean losing your assets forever. Therefore, securing them is of utmost importance. Perform the following steps to secure your private keys:

 1. Never share your private keys with anyone - not even with a trusted friend or a family member. 
 2. Avoid storing your private keys online or on your computer where they may be susceptible to hacking. Instead, consider using a hardware wallet, a physical device that securely stores your private keys offline. Regularly backup your keys and store those backups in a secure location, like a safe or safety deposit box. 
 3. Consider using key splitting or multisignature methods, which divide the responsibility of the key among multiple people or devices, adding an extra layer of security.

There are a lot of good articles on Private Keys security that provide best practices and advice. We have linked to some of the prominent ones below:

 * [What is a private key?](https://www.coinbase.com/learn/crypto-basics/what-is-a-private-key)
 * [Keep Your Private Keys Safe](https://medium.com/ecomi/keep-your-private-keys-safe-why-its-so-important-to-store-them-offline-8a85d946a3b2)

## Wallet Security: Safe Use of Cryptocurrency Wallets With EON

Cryptocurrency wallets, much like traditional wallets, require careful handling to prevent loss or theft of assets. One of the first steps to securing your crypto-wallet (Cobalt wallet, MetaMask) is by setting a seed phrase that is then stored securely with proper best practices. It's also important to regularly update your wallet software to the latest version, as updates often include important security enhancements. Be cautious of phishing attempts, where scammers might try to trick you into giving away your wallet seed phrase. Always check the website address when accessing your online wallet and never click on suspicious links. Lastly, consider using hardware wallets, especially for storing large amounts of cryptocurrency. These wallets store your private keys offline, keeping them safe from online threats.

There are no official user support centers for wallets – any links you may see that claim to be able to provide support are looking to extract sensitive information like your seed phrase. 

However, there are a lot of good articles on Wallet Safety that provide best practices and advice. We have linked to some of the prominent ones below:

* [Wallet Security](https://hacken.io/discover/wallet-security/)
* [What are crypto-wallets?](https://www.forbes.com/sites/digital-assets/article/what-are-crypto-wallets/?sh=5ab204ed6a62)
* [How to secure your crypto-wallet?](https://bitpay.com/blog/how-to-secure-your-crypto-wallet/)

If you are interested in the differences between **Seed Phrases** and **Private keys**, here is an article that will provide some clarity: 

[Crypto Seed Phrases vs Private Keys: What’s the difference?](https://www.makeuseof.com/crypto-seed-phrases-vs-private-keys-difference)

## Smart Contract Interaction: Best Practices

Smart contracts are a core feature of the EON network, allowing automatic execution of agreements. When interacting with these, it's important to maintain best practices. First, only interact with smart contracts from reputable sources or ones that have been audited by known security firms. Do your own research! Do not take advice from unknown or even known entities on if a smart contract is “safe.” Remember, a malicious smart contract could lead to loss of assets. Secondly, understand the contract's function before engaging. If the functionality isn't clear, seek advice from the community or a blockchain expert. Thirdly, be cautious when approving token transfers. Some contracts may ask for approval to move an unlimited number of tokens from your wallet, which could be risky.

# Addressing Common Security Threats


No digital environment is immune to threats. One of the common threats in the blockchain space is phishing attacks, where malicious actors try to trick users into revealing sensitive information. This section explores these threats, providing users with information to help them recognize and avoid such risks.
### Phishing Attacks

Phishing attacks are deceptive attempts by cybercriminals to trick you into sharing sensitive information, such as your wallet seed phrase or private keys. Typically, they may send you an email or message impersonating a trusted entity like EON or a dApp creator, urging you to take immediate action. To avoid falling victim, always verify the source of communication. EON or any other legitimate organization will never ask for your private keys or wallet seed phrase. Be cautious of any communication pressuring you to share sensitive information urgently. Remember to always double-check the email address or the message source.

One such case of a phishing scam that may occur is during account recovery where users who have lost access to their account are prompted for their wallet seed phrase. Keep in mind that a legitimate organization will never, ever ask for your wallet seed phrase. If you lose access to your crypto wallet, there are ways to recover your account without sharing your seed phrase.

### Spoofed or Cloned Websites

Spoofed or cloned websites are malicious sites created to look exactly like legitimate websites, such as Horizen’s or EON's official site. Cybercriminals use them to deceive users into entering their login credentials or other sensitive information, which they can then steal. Always check the URL of the website you're visiting to make sure it matches exactly with the official website of Horizen. Consider bookmarking the official site to avoid mistyping. The same is true if going to a dApp site or other third party projects/integrations that are running applications on EON.

It’s important to note that there are takeover risks associated with legitimate websites as well. Some of the most common attacks include SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). In SQL Injection, information about how data is stored in a database can be leaked by exploiting the execution of search queries. An unauthorized user could make themself a database administrator, access sensitive information, or even destroy server data.

In 2018, Magecart successfully stole the credit card information of British Airways customers by exploiting a XSS vulnerability in a JavaScript library used on the website. The attackers altered a script to send customer information to a spoofed British Airways website using a similar domain name, tricking customers into thinking they were purchasing from a secure server.


### Crypto Malware

Crypto malware is a type of malicious software designed to steal your cryptocurrency. These programs can infect your device through downloaded files or visiting compromised websites. To protect yourself, install a reputable antivirus software and keep it updated. Regularly update your operating system and all installed software to patch vulnerabilities. Be cautious when downloading files or clicking on links, especially from unknown sources.

Most recently, we’ve seen the rise of Trojan.Clipper.231, a “pirated” version of Windows 10 distributed on the BitTorrent network that actually replaces crypto wallet addresses copied to the clipboard with addresses controlled by the attackers, which leads to a diversion of funds. This kind of attack, known as clipboard hijacking malware, is not new as we’ve seen it with CryptoShuffler in 2016 and 2017.

### Other Potential Threats in the EON Environment

As the EON environment continues to evolve, it may be exposed to new types of threats. These could include more advanced forms of smart contract exploits, targeted network attacks, or new forms of user-targeted scams. Users should stay updated with the latest security news within the EON community and the broader blockchain space. Regularly review and update your security practices, ensure your private keys and wallet are secure, and always be vigilant when interacting with smart contracts or making transactions. Remember, security in the blockchain space is a shared responsibility, and every user's caution contributes to the overall safety of the EON network.

If you see something suspicious, let us know on one of our official channels such as Discord or Telegram. Remember that an official organization will never ask for your seed phrase or private key.

* [Discord](https://horizen.io/invite/discord)
* [Telegram](https://t.me/horizencommunity)

# Conclusion

In summary, this document has stressed the importance of security within the EON and broader blockchain environment. It is our hope that this information will aid you in making informed decisions, and we strongly encourage all users to prioritize security and adhere to the guidelines provided. The future of blockchain security is dynamic and exciting, and we look forward to continuing to provide you with the safest possible environment for your blockchain interactions.





