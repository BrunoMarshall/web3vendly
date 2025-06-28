import shardeumLogo from '../assets/Shardeum_logo_white.png';
import discord from '../assets/discord.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

function Footer() {
  const socialLinks = [
    { icon: discord, url: 'https://discord.com/invite/shardeum', alt: 'Shardeum Discord' },
    { icon: github, url: 'https://github.com/shardeum', alt: 'Shardeum GitHub' },
    { icon: linkedin, url: 'https://www.linkedin.com/company/shardeum/', alt: 'Shardeum LinkedIn' },
    { icon: telegram, url: 'https://t.me/shardeum', alt: 'Shardeum Telegram' },
    { icon: twitter, url: 'https://twitter.com/shardeum', alt: 'Shardeum Twitter' },
    { icon: youtube, url: 'https://www.youtube.com/@shardeum', alt: 'Shardeum YouTube' },
  ];

  return (
    <footer className="bg-vendly-blue text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">Supported by</p>
        <img src={shardeumLogo} alt="Shardeum Logo" className="h-10 mb-4" />
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.alt} className="h-6" />
            </a>
          ))}
        </div>
        <p className="mt-4">&copy; 2025 Web3Vendly. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
