/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../store/blockchain/blockchainActions';
import { fetchData } from '../../store/data/dataActions';
import './MainPage.scss';
import Team from '../../component/Team/Team';
import ContentWrapper from '../../component/ContentWrapper/ContentWrapper';
import About from '../../component/About/About';
import MintPanel from '../../component/MintPanel/MintPanel';
import MenuBar from '../../component/MenuBar/MenuBar';
import RoadMap from '../../component/RoadMap/RoadMap';
import ABI from '../mainPage/abi.json';
import CONFIG_FILE from '../../util/config.json';
import {
  COMMUNITY_INFO,
  IMAGES,
  TEAM_OBJECT,
  ROADMAP_INFO,
  SLIDER_IMAGES,
} from './MainPage.config';
import Web3 from 'web3';
import { motion } from 'framer-motion/dist/framer-motion';
import Slider from '../../component/Slider/Slider';
import DiscordBubble from '../../component/DiscordBubble/DiscordBubble';
import WelcomePanel from '../../component/WelcomePanel/WelcomePanel';
import Details from '../../component/Details/Details';

function MainPage() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const [showMintPanel, setShowMintPanel] = useState(false);
  const [input, setInput] = useState('');
  const [mintAmountTemp, setMintAmountTemp] = useState();
  const [priceContract, setPriceContract] = useState();

  const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

  const ContractAddress = '0x5bf8356D6997202d78058b78D8895dcaaB7F111d';

  const claimNFTs = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, ContractAddress, {
        gas: 3000000,
      });
      const totalSupply = await contract.methods.totalSupply().call();
      const priceContract = await contract.methods.cost().call(); // cost()
      const totalCostWei = priceContract * mintAmount;
      const gasLimit = Math.round(
        (await contract.methods.mint(mintAmount).estimateGas({
          value: totalCostWei.toString(),
          from: blockchain.account,
        })) * 1.2
      );

      console.log('Cost: ', totalCostWei);
      console.log('Gas limit: ', gasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);

      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(gasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once('error', (err) => {
          console.log(err);
          setFeedback('Sorry, something went wrong please try again later.');
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    } catch (error) {
      alert(error.message);
      location.reload();
    }
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    // const configResponse = await fetch(CONFIG_FILE, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    // });
    // const config = await configResponse.json();
    SET_CONFIG(CONFIG_FILE);
  };

  useEffect(() => {
    getConfig();
    getMintAmountTemp();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const getMintAmountTemp = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ABI, ContractAddress, {
      gas: 3000000,
    });
    const totalSupply = await contract.methods.totalSupply().call();
    const priceContract = await contract.methods.cost().call(); // cost()

    setPriceContract(priceContract);
    setMintAmountTemp(totalSupply);
  };

  const renderTimer = () => {
    if (!showMintPanel) {
      return (
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      );
    }
  };

  useEffect(() => {
    validateButton(input);
  }, [input]);

  const validateButton = (inputValue) => {
    const value = input.replace(/[^0-9\.]/g, '');
    if (+value <= 20 && +value !== 0) {
      setMintAmount(value);
    } else {
      setMintAmount(value.slice(0, -1));
    }
  };

  const connectWallet = () => {
    if (!blockchain.account) {
      return (
        <button
          className="Header-Button"
          id="connect_button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
            getData();
          }}
        >
          Connect wallet
        </button>
      );
    }

    return <div className="WalletAddress">{blockchain.account}</div>;
  };

  const main = () => {
    return (
      <div className="MainContainer">
        <div className="Main">
          <div className="Main-Container">
            <div className="Main-Row">
              <div className="Main-Left">
                <div className="Main-Number" id="tokens_available">
                  {data.totalSupply === 0 ? (
                    <div>
                      {mintAmountTemp}/{CONFIG.MAX_SUPPLY}
                    </div>
                  ) : (
                    <div>
                      {data.totalSupply}/{CONFIG.MAX_SUPPLY}
                    </div>
                  )}
                </div>
                <div className="Main-Text">
                  {CONFIG.DISPLAY_COST} ETH + GAS FEES | FIRST 333 ARE FREE |
                  TOTAL {CONFIG.MAX_SUPPLY}
                </div>
                <div className="Main-Text"> </div>
                <div className="Main-Row">
                  <input
                    type="text"
                    placeholder={
                      mintAmountTemp >= 333 || data.totalSupply >= 333
                        ? 'max 20 per transaction'
                        : 'max 3 per transaction'
                    }
                    className="in-form js-in-number"
                    onChange={(e) => setInput(e.target.value)}
                    value={mintAmount}
                  />
                  {!blockchain.account ? (
                    <button
                      className="Main-Button"
                      target="_self"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      Connect
                    </button>
                  ) : (
                    <button
                      className="Main-Button"
                      target="_self"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                        claimNFTs();
                        getData();
                      }}
                    >
                      Mint
                    </button>
                  )}
                </div>
                <div className="Main-text-bot-form">
                  Rarity of BluBeanz:
                  <br />
                  Common - 40 %<br />
                  Rare - 30 %<br />
                  Super Rare - 20 %<br />
                  Legendary - 10 %<br />
                </div>
              </div>
              <div className="Main-Right">
                <img src={IMAGES.preView} alt="ozuki" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MenuBar projectName={'BLUEBENZ'} />
      <DiscordBubble linkToDiscord={'https://www.nftgosu.io/'} />
      <Slider images={SLIDER_IMAGES} bgImage={IMAGES.marketing} />
      <ContentWrapper>
        <MintPanel />
        <WelcomePanel
          linkToTwitter={'https://www.nftgosu.io/'}
          linkToDiscord={'https://www.nftgosu.io/'}
        />
        <Details/>
        <RoadMap version={2} data={ROADMAP_INFO} />
        <Team
          data={TEAM_OBJECT}
          bigHeader="Behind The Scene"
          smallHeader="The Team"
        />
      </ContentWrapper>
    </>
  );
}

export default MainPage;
