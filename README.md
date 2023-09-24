# 3D Print Your NFT

## Tech Stack Overview
- WalletConnect Web3Modal
- NFT metadata storage on IPFS
- The Graph integration to retrieve the image of the NFT
- Contract deployment on multiple chains - see Deployed Contracts section

## OpenSea and Shopify Page
- Shopify store where you can order a 3D printed objectof a given NFT 
https://774a58.myshopify.com/ 

- 3D Pikachu on OpenSea 
https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/91087323867861065123692610173492082007842679956767720571544234638701217447937

## Deployed Contracts

Goerli: https://goerli.etherscan.io/address/0xc9c0bded85f07132361c5754d7383a404348686a

Polygon Mumbai: https://mumbai.polygonscan.com/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418

Polygon zkEVM: https://testnet-zkevm.polygonscan.com/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418

Scroll Sepolia: https://sepolia-blockscout.scroll.io/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418

Base Goerli: https://goerli.basescan.org/address/0xbc9504a7004259F89B9c28fd2B0677D8a916E418

Linea Testnet: https://explorer.goerli.linea.build/address/0x4f7a9751ac661495bBD33c8494cccc174d0dfb8B

IPFS: "1" ipfs://bafybeifa3765rq7uvcbzydun2dmmsww6tmffvjyyozgsongerjp44y4w4m
IPFS: "2" ipfs://bafybeieguzyd4363gdals2qhjpkfq6zq5ljzccnptaaifkgppoge3db2tm

## Overview

This project enables users to turn their NFTs into a 3D printed object and have it shipped to their home. We achieve doing so by using Shopify and a program which generates unique 3D images from text and converts a 2D image into a 3D image. Below are the steps detailing the entire workflow.






## Description

This Project offers an end-to-end solution for creating, owning, and trading 3D Non-Fungible Tokens (NFTs). With Generative AI, a user can convert user-supplied text into intricate 3D images. These are minted as unique, blockchain-authenticated 3D NFTs via Shopify and OpenSea. Owners can offer these NFTs as both digital and physical collectible, with physical forms made possible through premium 3D printing services.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Text to 3D Image**: Transform text into visually-stunning 3D images through Generative AI using alpha3d.io .
- **Blockchain-Verified**: Mint 3D images as unique, secure NFTs on Shopify or OpenSea.
- **Dual Ownership**: List 3D NFTs as digital or physical products via Shopify high-quality 3D printing services.
- **Direct Shipping**: Handle logistics for physical NFTs, ensuring fullfillment and secure delivery.

## Installation

To get started:

```bash
git clone https://github.com/Ryokog/ETHGlobal-NY.git
cd Text2NFT3D
npm install
npm start
```

## Usage

1. Input text in the designated section.
2. Click "Generate 3D Image."
3. Mint it as an NFT on Shopify or OpenSea.
4. List it for sale in digital or physical form.
5. For physical NFTs, complete purchase to initiate 3D printing and shipping.

## Tech Stack

- Generative AI
- Ethereum Blockchain
- Shopify API
- OpenSea API
- 3D Printing Services from Shopify

## Contributing

Fork the repo and make your changes. Pull requests are welcome.

## License

MIT License
