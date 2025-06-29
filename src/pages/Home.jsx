// src/pages/Home.jsx
import { NavLink } from 'react-router-dom'; // Import NavLink

function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-vendly-blue mb-6">Welcome to Web3Vendly</h1>
      <p className="text-lg mb-8">
        The future of vending machines powered by blockchain technology. Purchase products with crypto, unlock exclusive NFTs, and experience a new era of decentralized commerce.
      </p>
      <img
        src="/vending-machine.png" // Use public folder path
        alt="Vending Machine"
        className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
        loading="lazy"
      />
      <div className="text-center">
        <NavLink
          to="/vending"
          className="bg-vendly-accent text-vendly-blue px-6 py-3 rounded-lg hover:bg-yellow-400"
        >
          Go to Vending
        </NavLink>
      </div>
    </div>
  );
}

export default Home;