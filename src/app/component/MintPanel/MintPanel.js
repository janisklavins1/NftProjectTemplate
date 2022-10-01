import React, { useState, useEffect } from 'react';
import './MintPanel.scss';
import Image from '../Image/Image';
import bg from '../../images/bgMintImage.png';
import image from '../../images/ss.png';
import image1 from '../../images/ss1.png';

const MintPanel = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    startTimer();
  }, []);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date('Dec 29,2022 20:00 EST').getTime();

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
        //setShowMintPanel(true);
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

  const Clock = (number, event) => {
    return (
      <div className='MintPanel-TimeBox'>
        <div className='MintPanel-TimeBox-Number'>{number}</div>
        <div className='MintPanel-TimeBox-Text'>{event}</div>
      </div>
    );
  };

  return (
    <div className="MintPanel-Container">
      <div className="MintPanel-ImageContainer">
        <div className="MintPanel-ImageContainer-Bg">
          <Image src={bg} />
        </div>
        <div className="MintPanel-ImageContainer-Image">
          <Image src={image} />
        </div>
      </div>
      <div className="MintPanel-Text">
        <div className="MintPanel-Text-Heading">
          <span>NOT </span>
          <span>just another </span>
          <span>NFT</span>
        </div>
        <div className="MintPanel-Text-LongText">
          We want a long lasting community with a clear collective goal: to
          connect entrepreneurs, investors and the best teams in a professional
          networking space centered around innovative projects.
        </div>
        <div className="MintPanel-Text-CountDown">
          <div className="MintPanel-Text-CountDown-Bg">
            {Clock(timerDays, 'DAYS')}
            {Clock(timerHours, 'HOURS')}
            {Clock(timerMinutes, 'MINUTES')}
            {Clock(timerSeconds, 'SECONDS')}
          </div>
        </div>
        <div className="MintPanel-Text-LowerText">
          KEEP SCROLLING DOWN AND DISCOVER THE FULL POTENTIAL OF BB.
        </div>
      </div>
    </div>
  );
};

export default MintPanel;
