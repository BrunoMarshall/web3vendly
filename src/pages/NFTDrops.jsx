// src/pages/NFTDrops.jsx
import { useState, useEffect } from 'react';
// import Web3 from 'web3'; // Temporarily commented out to fix build error

function NFTDrops() {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const contractABI = [
    // Paste ABI from compiled Web3Vendly.sol (e.g., from Remix or Hardhat)
    // Example placeholder:
    {
      "inputs": [],
      "name": "mintNFT",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    // Add other ABI entries as needed
  ];
  const contractAddress = '0xYourContractAddress'; // Replace with deployed contract address

  useEffect(() => {
    if (window.ethereum) {
      // const web3Instance = new Web3(window.ethereum); // Temporarily commented out
      // const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      // setContract(contractInstance);
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
        if (accounts[0]) setAccount(accounts[0]);
      }).catch((error) => console.error('Account access error:', error));
    }
  }, []);

  const mintNFT = async () => {
    if (!contract || !account) {
      alert('Please connect your wallet!');
      return;
    }
    try {
      // Temporarily disabled due to web3 comment-out
      // await contract.methods.mintNFT().send({
      //   from: account,
      //   value: web3.utils.toWei('0.5', 'ether'),
      // });
      alert('NFT Minting is temporarily disabled due to build issues. Check back later!');
    } catch (error) {
      console.error('Minting failed:', error);
      alert('Minting failed. Check console for details.');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-vendly-blue mb-6">NFT Drops</h1>
      <p className="text-lg mb-8">Mint exclusive NFTs for token-gated access or collectibles.</p>
      <img
        src="/nft-ticket.jpg"
        alt="NFT Ticket"
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
        loading="lazy"
      />
      <div className="text-center">
        <button
          onClick={mintNFT}
          className="bg-vendly-accent text-vendly-blue px-6 py-3 rounded-lg hover:bg-yellow-400"
          disabled // Disable button until web3 is fixed
        >
          Mint NFT (0.5 SHM)
        </button>
      </div>
    </div>
  );
}

export default NFTDrops;