import React, {useState, useEffect} from 'react';
import './Details.scss';
import { useInView } from 'react-intersection-observer';

const Details = () => {
    const [traits, setTraits] = useState(0);
    const [returns, setReturns] = useState(0);
    const [wasInView, setWasInView] = useState(false);

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            setWasInView(true);
            if (!wasInView) {
                incramentAnimation(175, false);
                incramentAnimation(1.5, true);
            }
            
          }
        
    }, [inView, wasInView])
    
    const incramentAnimation = (targetNumber, isDecimal) => {
      let currentNumber = 0;
      let decimal = 0;
      const speed = isDecimal ? 180 : 40;

      var interval = setInterval(function () {
        if (currentNumber === targetNumber) {
          clearInterval(interval);
        }

        if (isDecimal) {
          // eslint-disable-next-line
          if (decimal.toFixed(1) == targetNumber) {
            clearInterval(interval);
          }

          setReturns(decimal.toFixed(1));
          decimal = decimal + 0.1;
        } else {
          setTraits(currentNumber);
          currentNumber++;
        }
      }, speed);
    };


    const renderChart = () => {
        return(
            <div className='Chart'>
                <div>
                    <h5>{traits}+</h5>
                    <p>Unique Traits</p>
                </div>
                <div>
                    <h5>{returns}%</h5>
                    <p>Community Returns</p>
                </div>
                <div className='Chart-Double'>
                    <h5>Ethereum</h5>
                    <p>Stored as ERC-721 Tokens</p>
                </div>
            </div>
        );
    };

    const renderDetails = () =>{
        return (
          <div className="Details">
            <h2>Details</h2>
            <p>
              4,000 unique Bones have been programmatically generated from over
              175 traits. A reserve will be held for giveaways, airdrops,
              creators, and Bones Club Heritage holders
            </p>
            <p>
              Bones are stored as ERC-721 tokens on the Ethereum blockchain and
              hosted on IPFS. You need to connect your MetaMask wallet to
              complete a purchase. You can view your Bones from the new
              collection on Opensea
            </p>
            <p>
              5% of secondary sales will be added to the community wallet (1.5%)
              and project funding (3.5%)
            </p>
            <p ref={ref}>
              Bones Club is the successor to the Bones Club Heritage collection
            </p>
            <div className="Details-Address">
              <a href='https://www.nftgosu.io/' className="Details-Address-Button">
                <p >Verified smart contract address</p>
              </a>
            </div>
          </div>
        );
    };

  return (
    <div className='DetailsContainer'>
        {renderChart()}
        {renderDetails()}
    </div>
  )
}

export default Details