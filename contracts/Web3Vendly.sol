// contracts/Web3Vendly.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Web3Vendly {
    address public owner;
    mapping(uint256 => uint256) public itemPrices; // Item ID => Price in SHM (wei)
    mapping(address => uint256[]) public userPurchases; // User => Purchased Item IDs
    uint256 public nextItemId = 1;

    event ItemPurchased(address indexed buyer, uint256 itemId, uint256 price);
    event NFTMinted(address indexed user, uint256 tokenId);

    constructor() {
        owner = msg.sender;
        // Sample items (price in wei, assuming 1 SHM = 10^18 wei)
        itemPrices[1] = 0.1 ether; // Soda
        itemPrices[2] = 0.5 ether; // NFT Ticket
        itemPrices[3] = 1 ether;   // Smart Locker Access
    }

    function purchaseItem(uint256 itemId) external payable {
        require(itemPrices[itemId] > 0, "Item does not exist");
        require(msg.value >= itemPrices[itemId], "Insufficient payment");

        userPurchases[msg.sender].push(itemId);
        emit ItemPurchased(msg.sender, itemId, msg.value);

        // Refund excess payment
        if (msg.value > itemPrices[itemId]) {
            payable(msg.sender).transfer(msg.value - itemPrices[itemId]);
        }
    }

    function mintNFT() external payable {
        require(msg.value >= 0.5 ether, "Insufficient payment for NFT");
        uint256 tokenId = nextItemId++;
        userPurchases[msg.sender].push(tokenId);
        emit NFTMinted(msg.sender, tokenId);
    }

    function getUserPurchases(address user) external view returns (uint256[] memory) {
        return userPurchases[user];
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
