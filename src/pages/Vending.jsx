import { useState, useEffect } from 'react';
// import Web3 from 'web3'; // Temporarily commented out to fix build error
import QRCodeScanner from '../components/QRCodeScanner';

const contractABI = [
  // Paste ABI from compiled Web3Vendly.sol
  // For brevity, assume it's imported or hardcoded
  // Example placeholder:
  // {
  //   "inputs": [{ "internalType": "uint256", "name": "itemId", "type": "uint256" }],
  //   "name": "purchaseItem",
  //   "outputs": [],
  //   "stateMutability": "payable",
  //   "type": "function"
  // }
];

function Vending() {
  // const [web3, setWeb3] = useState(null); // Temporarily commented out
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: 'Soda', price: '0.1 SHM' },
    { id: 2, name: 'NFT Ticket', price: '0.5 SHM' },
    { id: 3, name: 'Smart Locker', price: '1 SHM' },
  ]);

  const contractAddress = '0xYourContractAddress'; // Replace with deployed contract address
  const machineAddress = '0xMachineAddress'; // Simulated vending machine address

  useEffect(() => {
    if (window.ethereum) {
      // const web3Instance = new Web3(window.ethereum);
      // setWeb3(web3Instance);
      // const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
      // setContract(contractInstance);
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
        if (accounts[0]) setAccount(accounts[0]);
      }).catch((error) => console.error('Account access error:', error));
    }
  }, []);

  const purchaseItem = async (itemId, price) => {
    if (!contract || !account) {
      alert('Please connect your wallet!');
      return;
    }
    try {
      // await contract.methods.purchaseItem(itemId).send({
      //   from: account,
      //   value: web3.utils.toWei(price.split(' ')[0], 'ether'),
      // });
      alert(`Item ${itemId} purchase is temporarily disabled due to build issues.`);
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('Purchase failed. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container mx-auto max-w-3xl flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-vendly-blue mb-6 text-center">Vending Machine</h1>
        <QRCodeScanner machineAddress={machineAddress} />
        <div className="grid md:grid-cols-3 gap-6 mt-8 w-full">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mb-4">Price: {item.price}</p>
              <button
                onClick={() => purchaseItem(item.id, item.price)}
                className="bg-vendly-accent text-vendly-blue px-4 py-2 rounded hover:bg-yellow-400"
                disabled
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vending;
