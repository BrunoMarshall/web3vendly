import SmartLocker from '../assets/images/smart-locker.png';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container mx-auto max-w-3xl flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-vendly-blue mb-6">About Web3Vendly</h1>
        <p className="text-lg mb-8 max-w-md mx-auto">
          Web3Vendly is redefining vending in the Web3 era by integrating crypto payments, NFT access, and on-chain transparency.
          Our mission is to bridge traditional vending with blockchain technology, enabling seamless, secure, and personalized experiences.
        </p>
        <img
          src={SmartLocker}
          alt="Smart Locker"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          style={{ maxWidth: '448px', marginLeft: 'auto', marginRight: 'auto' }}
          loading="lazy"
        />
        <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
        <p className="text-lg mb-4 max-w-md mx-auto">Partner with us, become a pilot customer, or invest in the future of vending.</p>
        <a
          href="mailto:contact@web3vendly.com"
          className="bg-vendly-accent text-vendly-blue px-6 py-3 rounded-lg hover:bg-yellow-400"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;