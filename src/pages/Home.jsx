import { NavLink } from 'react-router-dom';
import VendingMachine from '../assets/images/vending-machine.png';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center font-sans">
        <h1 className="text-5xl font-bold text-vendly-blue mb-6">
          Welcome to Web3Vendly
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          The future of vending machines powered by blockchain technology. Purchase products with crypto, unlock exclusive NFTs, and experience a new era of decentralized commerce.
        </p>
        <img
          src={VendingMachine}
          alt="Vending Machine"
          className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-8"
          loading="lazy"
        />
        <NavLink
          to="/vending"
          className="inline-block bg-vendly-accent text-vendly-blue px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          Go to Vending
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
