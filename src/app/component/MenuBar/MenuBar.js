import React, { useState } from 'react';
import './MenuBar.scss';
import { motion } from 'framer-motion/dist/framer-motion';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../store/blockchain/blockchainActions';
import { fetchData } from '../../store/data/dataActions';


const MenuBar = ({ projectName, refs }) => {
  const [buttonPosition, setButtonPosition] = useState(0);
  const [buttonWith, setButtonWith] = useState(60);
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 910px)` });

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
  };

  const NavButton = (Text, Id) => {
    return (
      <motion.button
        onMouseEnter={(e) => {
          setButtonWith(e.target.offsetWidth);
          setButtonPosition(e.target.offsetLeft);
        }}
        className="MenuBar-Button"
        onClick={(e) => {
          e.preventDefault();

          if (Id) {
            document.getElementById(Id).scrollIntoView({
              behavior: 'smooth',
            });
          }
        }}
      >
        {Text}
      </motion.button>
    );
  };

  // @param {Name} Button Name.
  // @param {Id} scroll to Id.
  const NavButtonList = () => {
    return (
      <>
        {NavButton('Mint', 'MintPanel')}
        {NavButton('About', 'About')}
        {NavButton('RoadMap', 'RoadMap')}
        {NavButton('FAQ', 'Faq')}
        {NavButton('Team', 'Team')}
      </>
    );
  };

  const ConnectWalletButton = () => {

    return (
      <button
        className="MenuBar-ConnectWalletButton"
        onClick={(e) => {
          e.preventDefault();

          dispatch(connect());
          getData();
        }}
      >
        <span>{!blockchain.account ? 'Connect Wallet' : 'Connected ( '+ truncate(blockchain.account, 6) +')'}</span>
      </button>
    );
  };

  const NavigationContainerDesktop = () => {
    return (
      <div className="MenuBar-NavContainerDesktop">
        <motion.div
          animate={{ x: buttonPosition, width: buttonWith + 'px' }}
          className="MenuBar-Line"
        ></motion.div>
        {NavButtonList()}
        {ConnectWalletButton()}
      </div>
    );
  };

  const NavigationContainerMobile = () => {
    return (
      <div className="MenuBar-NavContainerMobile">
        <button
          className="MenuBar-NavContainerMobile-ToggleButton"
          onClick={() => {
            !mobilePanelOpen
              ? setMobilePanelOpen(true)
              : setMobilePanelOpen(false);
          }}
        >
          <FaBars />
        </button>

        {mobilePanelOpen && MobileNavigationPanel()}
      </div>
    );
  };

  const MobileNavigationPanel = () => {
    return (
      <div
        className="MenuBar-NavContainerMobile-PanelContainer"
      >
        {NavButtonList()}
        {ConnectWalletButton()}
      </div>
    );
  };

  return (
    <div className="MenuBar-Container">
      <div className="MenuBar-Logo">{projectName}</div>
      {!isMobile ? NavigationContainerDesktop() : NavigationContainerMobile()}
    </div>
  );
};

export default MenuBar;
