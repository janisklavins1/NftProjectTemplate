import React from 'react';
import './WelcomePanel.scss';
import { FaCheck, FaTwitter, FaDiscord } from 'react-icons/fa';
import Image from '../Image/Image';
import nft from '../../images/slider4.png';
import { MdMale } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const WelcomePanel = ({linkToTwitter, linkToDiscord}) => {
  const TextPanel = () => {
    return (
      <div className="TextPanel">
        <div className="TextPanel-Header">
          <h2>Welcome to NFTGOSU</h2>
        </div>
        <div className="TextPanel-Text">
          <p>
            Our NFTGOSU project is a highly customizable P2E (Play to Earn) game
            dedicated to building the bridges between NFTs, crypto, and games.
          </p>
          <p>
            NFTGOSU is a gaming community centered NFT initiative that provides
            you with long-term value, with your NFT serving as your membership
            token. Community is the most important part; all parts of our
            Metaverse will be determined through Founders and Genesis owners. We
            really want you to feel and see that you are holding value in your
            wallet.
          </p>
          <p>
            From day one, you will have access to a fully functional dashboard
            for your Gosus and Founder Tokens, a claim page for $GOSU and our
            own shop.
          </p>
        </div>
        <div className="TextPanel-Traits">
          <div>
            <FaCheck />
            Genesis
          </div>
          <div>
            <FaCheck />
            Play to earn
          </div>
          <div>
            <FaCheck />
            Yield
          </div>
          <div>
            <FaCheck />
            Community
          </div>
        </div>
      </div>
    );
  };

  const Badges = () => {
    return (
      <div className="Badges">
        <div className="Badges-Item">
          <div className="Badges-Item-Icon">
            <BsFillPatchCheckFill />
          </div>
          <div className="Badges-Item-Text">
            <div>
              <h5>Founder</h5>
              <p>Token</p>
            </div>
          </div>
        </div>
        <div className="Badges-Item">
          <div className="Badges-Item-Icon">
            <MdMale />
          </div>
          <div className="Badges-Item-Text">
            <div>
              <h5>Genesis</h5>
              <p>Gosu</p>
            </div>
          </div>
        </div>
        <a
          href={linkToTwitter ? linkToTwitter : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="Badges-Item"
        >
          <div className="Badges-Item-Icon">
            <FaTwitter />
          </div>
          <div className="Badges-Item-Text">
            <div>
              <h5>Twitter</h5>
              <p>Community</p>
            </div>
          </div>
        </a>
        <a
          href={linkToDiscord ? linkToDiscord : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="Badges-Item"
        >
          <div className="Badges-Item-Icon">
            <FaDiscord />
          </div>
          <div className="Badges-Item-Text">
            <div>
              <h5>Discord</h5>
              <p>Community</p>
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <>
      <div className="WelcomePanel">
        {TextPanel()}
        <div className="WelcomePanel-ImageContainer">
          <Image className="WelcomePanel-ImageContainer-Image" src={nft} />
        </div>
      </div>
      <Badges />
    </>
  );
};

export default WelcomePanel;
