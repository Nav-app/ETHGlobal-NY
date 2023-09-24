# 3D Print Your NFT

## Tech Stack Overview
- WalletConnect Web3Modal
- NFT metadata storage on IPFS : https://bafybeigobdj2zenamjymwoj6zqrtcix3chfutpp2eli23ltzdqupudcrpm.ipfs.dweb.link/
- CID for "Pikachu" on IPFS is bafybeigobdj2zenamjymwoj6zqrtcix3chfutpp2eli23ltzdqupudcrpm
- The Graph integration to retrieve the image of the NFT
- NFT smart contract deployed on the following blockchains;

## OpenSea and Shopify Page
- 3D Pikachu on OpenSea 
https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/91087323867861065123692610173492082007842679956767720571544234638701217447937

- Shopify store where you can order a 3D printed objectof a given NFT 
https://774a58.myshopify.com/ 

## Deployed Contracts
Goerli: https://goerli.etherscan.io/address/0x6fa23e0613b85f0bae0765172a9c580fda1df5a8
Polygon Mumbai: https://mumbai.polygonscan.com/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418
Polygon zkEVM: https://testnet-zkevm.polygonscan.com/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418
Scroll Sepolia: https://sepolia-blockscout.scroll.io/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418
Base Goerli: https://goerli.basescan.org/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418
Linea Testnet: https://explorer.goerli.linea.build/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418



## Overview

This project enables users to turn their NFTs into a 3D printed object and ship it to their home. We achieve doing so by using Shopify and a program which generates unique 3D images from text and converts a 2D image into a 3D image. Below are the steps detailing the entire workflow.

## Enhanced Workflow

### Step 1: Image Generation with GenAI

- Users input their desired text into the "text to 3D image" bar on alpha3d.io.
- Save the 3D image into GLB format, which is widely supported for 3D objects.

### Step 2: Conversion to Shopify NFT

- The GLB-formatted 3D image is imported into Shopify.
- Shopify convert this 3D image into an NFT.

### Step 3: Listing the NFT for Sale

- **What Happens**: The NFT is listed on Shopify, complete with metadata and pricing details.
- **How It Works**: The NFT is displayed as a 3D object, making it more interactive and appealing to potential buyers.

### Step 4: Integration with 3D Printing Services

- **What Happens**: The platform integrates with 3D printing services.
- **How It Works**: This integration allows for the physical production of the 3D image.

### Step 5: User Purchase Flow

- **What Happens**: Users can either purchase the NFT or order a 3D-printed physical version of the image.

### Step 6: Shipping the 3D-Printed Object

- **What Happens**: Upon a purchase of the 3D-printed version, the 3D printing service is triggered.
- **How It Works**: The object is printed and shipped to the customer's address.

## Getting Started

[Add your setup and installation instructions here]

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
