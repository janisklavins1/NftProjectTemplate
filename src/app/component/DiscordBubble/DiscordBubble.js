import React from 'react';
import './DiscordBubble.scss';
import { FaDiscord } from 'react-icons/fa';

const DiscordBubble = () => {
  return (
    <a
      href="https://www.nftgosu.io/"
      target="_blank"
      rel="noopener noreferrer"
      className="Bubble"
    >
      <FaDiscord />
    </a>
  );
};

export default DiscordBubble;
