// src/components/Footer.jsx
function Footer() {
  const socialLinks = [
    { icon: '/discord.svg', url: 'https://discord.com/invite/shardeum', alt: 'Shardeum Discord' },
    { icon: '/github.svg', url: 'https://github.com/shardeum', alt: 'Shardeum GitHub' },
    { icon: '/linkedin.svg', url: 'https://www.linkedin.com/company/shardeum/', alt: 'Shardeum LinkedIn' },
    { icon: '/telegram.svg', url: 'https://t.me/shardeum', alt: 'Shardeum Telegram' },
    { icon: '/twitter.svg', url: 'https://twitter.com/shardeum', alt: 'Shardeum Twitter' },
    { icon: '/youtube.svg', url: 'https://www.youtube.com/@shardeum', alt: 'Shardeum YouTube' },
  ];

  return (
    <footer className="bg-vendly-blue text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">Supported by</p>
        <img src="/Shardeum_logo_white.png" alt="Shardeum Logo" className="h-10 mb-4" />
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.alt} className="h-6" />
            </a>
          ))}
        </div>
        <p className="mt-4">© 2025 Web3Vendly. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
