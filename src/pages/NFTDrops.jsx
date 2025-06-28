import { useState, useEffect } from 'react';
import Web3 from 'web3';
import nftTicket from '../assets/images/nft-ticket.jpg';

function NFTDrops() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const contractABI = [
    // Paste ABI from Web3Vendly.sol
  ];
  const contractAddress = '0xYourContractAddress';

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
      web3Instance.eth.getAccounts().then((accounts) => {
        if (accounts[0]) setAccount(accounts[0]);
      });
    }
  }, []);

  const mintNFT = async () => {
    if (!contract || !account) {
      alert('Please connect your wallet!');
      return;
    }
    try {
      await contract.methods.mintNFT().send({
        from: account,
        value: web3.utils.toWei('0.5', 'ether'),
      });
      alert('NFT Minted! Check your wallet.');
    } catch (error) {
      console.error('Minting failed:', error);
      alert('Minting failed. Check console for details.');
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-vendly-blue mb-6">NFT Drops</h1>
      <p className="text-lg mb-8">Mint exclusive NFTs for token-gated access or collectibles.</p>
      <img src={nftTicket} alt="NFT Ticket" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8" />
      <div className="text-center">
        <button
          onClick={mintNFT}
          className="bg-vendly-accent text-vendly-blue px-6 py-3 rounded-lg hover:bg-yellow-400"
        >
          Mint NFT (0.5 SHM)
        </button>
      </div>
    </div>
  );
}

export default NFTDrops;
