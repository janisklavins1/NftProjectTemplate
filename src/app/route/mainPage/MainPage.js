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
import RoadMap from '../../component/RoadMap/RoadMap';
import ABI from '../mainPage/abi.json';
import CONFIG_FILE from '../../util/config.json';
import { COMMUNITY_INFO, IMAGES, TEAM_OBJECT } from './MainPage.config';
import Web3 from 'web3';

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

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [showMintPanel, setShowMintPanel] = useState(false);
  const [input, setInput] = useState('');
  const [mintAmountTemp, setMintAmountTemp] = useState();
  const [priceContract, setPriceContract] = useState();

  let interval;

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

  const startTimer = () => {
    const countDownDate = new Date('Dec 29,2021 20:00 EST').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        setShowMintPanel(true);
        //clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    //startTimer();
  });

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

  const header = () => {
    return (
      <header className="Header">
        <div className="Header-Container">
          <div className="Header-Row">
            <div className="Header-Logo">
              <img src={IMAGES.logo} />
            </div>
            <div className="Header-Right">{connectWallet()}</div>
          </div>
        </div>
      </header>
    );
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

  const roadMap = () => {
    return (
      <div className="RoadMap">
        <div className="RoadMap-Wrapper">
          <div className="RoadMap-Header">ROADMAP</div>

          <div className="RoadMap-Card">
            <div className="RoadMap-CardText">
              PHASE 1 <br />
              <br /> In the first place, a website, Instagram, discord and
              twitter will be established. Advertisements will be shared on all
              social media and the project will be promoted. Efforts will be
              made to establish a strong and solid community.
            </div>
            <img className="RoadMap-Painter" src={IMAGES.painter} />
          </div>
          <div className="RoadMap-Card" id="card2">
            <div className="RoadMap-CardText">
              PHASE2 <br />
              <br />
              3333 BluBeanz ready to launch. All are special and unique. There
              are Rarities among them: Common, Rare, Super Rare, and Legendary.
            </div>
            <img className="RoadMap-Painter2" src={IMAGES.painter2} />
          </div>
          <div className="RoadMap-Card">
            <div className="RoadMap-CardText">
              PHASE 3 <br />
              <br /> Exclusive BB Merch Store gets unlocked. We’ll be releasing
              a collection of collectible figures. This project is dedicated to
              all of our fellow night crew degens, WGMI!
            </div>
            <img className="RoadMap-Painter" src={IMAGES.painter3} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <ContentWrapper>
      {/* <MintPanel/> */}
     
      <About
        data={COMMUNITY_INFO}
        image1={IMAGES.designer}
        image2={IMAGES.designer}
        image3={IMAGES.designer}
        image4={IMAGES.designer}
      />
      <About
        data={COMMUNITY_INFO}
        image1={IMAGES.designer}
        image2={IMAGES.designer}
        image3={IMAGES.designer}
        image4={IMAGES.designer}
      />
       <RoadMap version={2}/>
      <Team
        data={TEAM_OBJECT}
        bigHeader="Behind The Scene"
        smallHeader="The Team"
      />
    </ContentWrapper>
  );
}

export default MainPage;

// TO DO
// Create  Road Map, Menu https://dreamingboys.com/#about
// Add abi.json in one place
