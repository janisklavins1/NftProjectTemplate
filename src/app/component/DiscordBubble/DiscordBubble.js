import React from 'react';
import './DiscordBubble.scss';
import { FaDiscord } from 'react-icons/fa';

const DiscordBubble = ({linkToDiscord}) => {
  return (
    <a
      href={linkToDiscord ? linkToDiscord : '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="Bubble"
    >
      <FaDiscord />
    </a>
  );
};

export default DiscordBubble;
