import React from 'react';
import './Faq.scss';
import { FaAngleDown } from 'react-icons/fa';

const Faq = () => {
  return (
    <>
      <h2 className='Faq-Heading' id="Faq">Frequently Asked Questions</h2>
      <div className="Faq" >
        <div className="Faq-Container">
          <ul>
            <li>
              <input
                lassName="Faq-Container-Check"
                type="checkbox"
                defaultChecked
              />

              <FaAngleDown className="Faq-Container-Arrow" />

              <h2>How do I buy an NFT?</h2>
              <p>
                You need to download and install a{' '}
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fbc205' }}
                >
                  MetaMask wallet (browser plugin)
                </a>{' '}
                . Once installed, connect your wallet, and click the buy button
                on our home page. Follow the prompts in the pop-up window to
                make a purchase. You need to have a balance of Eth to complete
                the transaction.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <FaAngleDown className="Faq-Container-Arrow" />
              <h2>Where can I view my NFT?</h2>
              <p>
                Your NFT is stored in your wallet at your Ethereum address (E.g.
                0xebe1…). You can view, trade, or sell your NFT on third party
                marketplaces, such as OpenSea. Your NFT will later act as a pass
                for member’s only features and website access.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <FaAngleDown className="Faq-Container-Arrow" />
              <h2>Is each NFT unique?</h2>
              <p>
                Every Fitness Fiend is unique, they’re made up of 150 unique
                traits. The rarity of the fiends can be checked by visiting ‘The
                Specs’ section of our site and clicking on one of the buttons.
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <FaAngleDown className="Faq-Container-Arrow" />
              <h2>What is a Whitelist?</h2>
              <p>
                Whitelisting allows us to reward early supporters with
                guaranteed slots for them to mint. It also allows supporters to
                avoid “gas wars”, which is when multiple people try to mint NFTs
                at the same time, driving up transaction prices. The
                pre-approved users on the whitelist are able to spread out their
                mints in such a way that they are not all transacting at the
                same time, hence avoiding a sudden spike in transaction fees.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faq;
