import vendingMachine from '../assets/images/vending-machine.jpg';

function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-vendly-blue mb-6 text-center">Web3Vendly: The Future of Vending is On-Chain</h1>
      <p className="text-lg text-center mb-8">Crypto-powered smart vending machines for digital & physical assets.</p>
      <img src={vendingMachine} alt="Vending Machine" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Crypto Payments</h2>
          <p>Accepts crypto & stablecoins for seamless transactions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">NFT Access</h2>
          <p>Token-gated merchandise and NFT-based access.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">On-Chain Transparency</h2>
          <p>Track all purchases on Shardeum’s blockchain.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
