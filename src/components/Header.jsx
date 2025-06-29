// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import WalletConnectButton from './WalletConnectButton';
import Web3VendlyLogo from '../assets/images/Web3Vendly_logo.png';

function Header() {
  return (
    <header className="bg-vendly-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left, reduced by 25% */}
        <div className="flex-shrink-0">
          <img src={Web3VendlyLogo} alt="Web3Vendly Logo" className="h-9" /> {/* h-12 * 0.75 = h-9 */}
        </div>

        {/* Centered menu with larger font and more spacing */}
        <nav className="flex-1 flex justify-center space-x-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}
          >
            Home
          </NavLink>
          <NavLink
            to="/vending"
            className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}
          >
            Vending
          </NavLink>
          <NavLink
            to="/nft-drops"
            className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}
          >
            NFT Drops
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}
          >
            About
          </NavLink>
        </nav>

        {/* MetaMask button and QR code on the right */}
        <div className="flex-shrink-0">
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}

export default Header;