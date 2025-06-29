// src/components/Footer.jsx
import ShardeumLogo from '../assets/images/Shardeum_logo_white.png'; // Import image
import DiscordIcon from '../assets/images/discord.svg';
import GitHubIcon from '../assets/images/github.svg';
import LinkedInIcon from '../assets/images/linkedin.svg';
import TelegramIcon from '../assets/images/telegram.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import YouTubeIcon from '../assets/images/youtube.svg';

function Footer() {
  const socialLinks = [
    { icon: DiscordIcon, url: 'https://discord.com/invite/shardeum', alt: 'Shardeum Discord' },
    { icon: GitHubIcon, url: 'https://github.com/shardeum', alt: 'Shardeum GitHub' },
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/company/shardeum/', alt: 'Shardeum LinkedIn' },
    { icon: TelegramIcon, url: 'https://t.me/shardeum', alt: 'Shardeum Telegram' },
    { icon: TwitterIcon, url: 'https://twitter.com/shardeum', alt: 'Shardeum Twitter' },
    { icon: YouTubeIcon, url: 'https://www.youtube.com/@shardeum', alt: 'Shardeum YouTube' },
  ];

  return (
    <footer className="bg-vendly-blue text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">Supported by</p>
        <img src={ShardeumLogo} alt="Shardeum Logo" className="h-10 mb-4" />
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