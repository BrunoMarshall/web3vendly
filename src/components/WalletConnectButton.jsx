// src/components/WalletConnectButton.jsx
import { useState, useEffect } from 'react';
// import Web3 from 'web3'; // Temporarily commented out to fix build error
// import WalletConnectProvider from '@walletconnect/web3-provider'; // Temporarily commented out

function WalletConnectButton() {
  const [account, setAccount] = useState(null);
  // const [web3, setWeb3] = useState(null); // Temporarily commented out

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // const web3Instance = new Web3(window.ethereum);
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const accounts = await web3Instance.eth.getAccounts();
        // setAccount(accounts[0]);
        // setWeb3(web3Instance);
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
          if (accounts[0]) setAccount(accounts[0]);
        }).catch((error) => console.error('MetaMask connection failed:', error));
      } catch (error) {
        console.error('MetaMask connection failed:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const connectWalletConnect = async () => {
    // try {
    //   const provider = new WalletConnectProvider({
    //     rpc: { 7887: 'https://rpc.shardeum.org' }, // Shardeum RPC
    //   });
    //   await provider.enable();
    //   const web3Instance = new Web3(provider);
    //   const accounts = await web3Instance.eth.getAccounts();
    //   setAccount(accounts[0]);
    //   setWeb3(web3Instance);
    // } catch (error) {
    //   console.error('WalletConnect connection failed:', error);
    // }
    alert('WalletConnect is temporarily disabled due to build issues. Use MetaMask instead.');
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0] || null);
      });
    }
  }, []);

  return (
    <div>
      {account ? (
        <span className="text-sm">Connected: {account.slice(0, 6)}...{account.slice(-4)}</span>
      ) : (
        <div className="space-x-2">
          <button
            onClick={connectMetaMask}
            className="bg-vendly-accent text-vendly-blue px-4 py-2 rounded hover:bg-yellow-400"
          >
            Connect MetaMask
          </button>
          <button
            onClick={connectWalletConnect}
            className="bg-white text-vendly-blue px-4 py-2 rounded hover:bg-gray-100"
            disabled // Disable until WalletConnect is fixed
          >
            Connect via QR
          </button>
        </div>
      )}
    </div>
  );
}

export default WalletConnectButton;
