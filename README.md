# 3D Print Your NFT

## Tech Stack Overview
- WalletConnect Web3Modal
- NFT metadata storage on IPFS : https://bafybeigobdj2zenamjymwoj6zqrtcix3chfutpp2eli23ltzdqupudcrpm.ipfs.dweb.link/
- CID for "Pikachu" on IPFS is bafybeigobdj2zenamjymwoj6zqrtcix3chfutpp2eli23ltzdqupudcrpm
- The Graph integration to retrieve the image of the NFT
- NFT smart contract deployed on the following blockchains;

## Overview

This project enables users to generate unique 3D images from text, mint them as NFTs on Shopify, and optionally get them physically 3D printed. Below are the steps detailing the entire workflow.

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
