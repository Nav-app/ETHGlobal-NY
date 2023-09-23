// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mintNFT(string memory tokenURI) public onlyOwner {
        _safeMint(msg.sender, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), tokenURI);
        _tokenIdCounter.increment();
    }
}

