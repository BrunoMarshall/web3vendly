import { NavLink } from 'react-router-dom';
import WalletConnectButton from './WalletConnectButton';
import logo from '../assets/Web3Vendly_logo.png';

function Header() {
  return (
    <header className="bg-vendly-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Web3Vendly Logo" className="h-12" />
        <nav className="space-x-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}>
            Home
          </NavLink>
          <NavLink to="/vending" className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}>
            Vending
          </NavLink>
          <NavLink to="/nft-drops" className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}>
            NFT Drops
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-vendly-accent' : 'hover:text-vendly-accent')}>
            About
          </NavLink>
        </nav>
        <WalletConnectButton />
      </div>
    </header>
  );
}

export default Header;
