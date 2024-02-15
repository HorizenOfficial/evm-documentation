---
title: Blockscout API contract verification
---

# Blockscout API Contract Verification

#### Blockscout API Key

- A specific key is not required, but a value is.  e.g. "abc".

## HARDHAT

### Setup

- **Visual Studio Code Plugin:** Install the Hardhat Solidity plugin from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity).

### Installation Steps

1. Install dependencies:
   ```shell
   npm install @nomicfoundation/hardhat-verify \
   @nomiclabs/hardhat-waffle \
   @thirdweb-dev/chains \
   @thirdweb-dev/sdk \
   dotenv \
   hardhat \
   hardhat-deploy
   ```
2. Create a `secret.js` file at the top level with your wallets private key:
   ```javascript
   // secret.js
   module.exports = {
     key: "your_private_key_here"
   };
   ```
3. Create or modify `hardhat.config.js` in the parent directory and paste the following:
   ```
   require("@nomiclabs/hardhat-waffle");
   require("@nomicfoundation/hardhat-verify");
   require('hardhat-deploy');
   
   let secret = require("./secret");
   
   module.exports = {
     solidity: "0.8.19",
     networks: {
       eon: {
         url: 'https://eon-rpc.horizenlabs.io/ethv1',
         accounts: [secret.key],
       }
     },
     etherscan: {
       apiKey: {
         eon: "abc"
       },
       customChains: [
         {
           network: "eon",
           chainId: 7332,
           urls: {
             apiURL: "https://eon-explorer.horizenlabs.io/api",
             browserURL: "https://eon-explorer.horizenlabs.io"
           }
         }
       ]
     }
   };
   ```
4. Modify the `apiKey`, `networks` and `customChains` to reference Gobi if required.
5. Modify scripts/deploy.js to the following
    ```javascript
    const hre = require("hardhat");
    
    async function main() {
      const currentTimestampInSeconds = Math.round(Date.now() / 1000);
      const unlockTime = currentTimestampInSeconds + 60;
    
      const lockedAmount = hre.ethers.utils.parseEther("0.001");
    
      const Lock = await hre.ethers.getContractFactory("Lock");
      const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
    
      await lock.deployed();
    
      console.log(`Lock with ${hre.ethers.utils.formatEther(lockedAmount)} ZEN and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
    }
    
    main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
    ```
6. Deploy a basic contract (change `--network` if needed):
   ```shell
   npx hardhat run scripts/deploy.js --network eon
   ```
7. Verify the contract by providing the network, deployed address and input parameters (in this case the timestamp):
   ```shell
   npx hardhat verify --network eon 0x94ab663092Ab5B4e4Dbdc0b21Ab4dD7d8390B7DC 1625097600
   ```

#### Note

- You may receive an error during verification:
  ```
  hardhat-verify found one or more errors during the verification process:

  Etherscan:
  The API responded with an unexpected message.
  Please report this issue to the Hardhat team.
  Contract verification may have succeeded and should be checked manually.
  Message: Unknown UID
  ```
- Check the verification success by visiting the block explorer and viewing verified contracts.

## THIRDWEB
- To verify contracts deployed using Thirdweb, the Thirdweb SDK is required along with the chainlist and a Thirdweb generated API KEY.

### Setup

1. Install dependencies:
   ```shell
   npm install @thirdweb-dev/chains \
   @thirdweb-dev/sdk \
   dotenv
   ```
2. Create a Thirdweb API key if you don't have one: [Create API Key](https://thirdweb.com/create-api-key).
3. Create a `.env` file in the parent directory:
    ```
    SECRET_KEY=<your_secret_key>
    EXPLORER_API_URL=https://eon-explorer.horizenlabs.io/api
    EXPLORER_API_KEY=abc
    ```
4. Replace the `SECRET_KEY` value with the key generated at step 2.
5. Change the `EXPLORER_API_URL` if required
6. Leave `EXPLORER_API_KEY` as `abc`.
7. Create a `thirdwebVerifier.mjs` file in the parent directory with the following:
   ```
   import { ThirdwebSDK } from "@thirdweb-dev/sdk";
   import dotenv from "dotenv";
   import { HorizenEon, HorizenGobiTestnet } from "@thirdweb-dev/chains"
   
   dotenv.config();
   
   const sdk = new ThirdwebSDK(HorizenEon, { secretKey: process.env.SECRET_KEY })
   
   await sdk.verifier.verifyThirdwebContract(
     "DropERC721",
     // "DropERC1155",
     // "DropERC20",
     // "SignatureDrop",
     // "Marketplace",
     // "MarketplaceV3",
     // "Multiwrap",
     // "Pack",
     // "Split",
     // "TokenERC721",
     // "TokenERC1155",
     // "TokenERC20",
     // "VoteERC20",
     // "AirdropERC721",
     // "AirdropERC1155",
     // "AirdropERC20",
     // "NFTStake",
     // "EditionStake",
     // "TokenStake",
     process.env.EXPLORER_API_URL,
     process.env.EXPLORER_API_KEY,
   );
   ```
8. Uncomment the required contract name, and amend `new ThirdwebSDK(HorizenEon` chain value if using Gobi to `new ThirdwebSDK(HorizenGobiTestnet`
9. Run the verification script:
   ```shell
   node thirdwebVerifier.mjs
   ```
#### Note

- Each Thirdweb contract type only needs to be verified once, e.g. if another user has already verified "DropERC721" then your attempt will fail and tell you it's already verified.