import React from 'react';
import './About.scss';
import { FaArrowRight } from 'react-icons/fa';

const About = ({ data, image1, image2, image3, image4 }) => {
  const {
    fact1,
    fact2,
    fact3,
    fact4,
    fact5,
    fact6,
    smallHeader,
    bigHeader,
    aboutText,
  } = data;

  const renderFacts = () => {
    return (
      <div className="About-Facts">
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact1}</p>
        </div>
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact2}</p>
        </div>
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact3}</p>
        </div>
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact4}</p>
        </div>
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact5}</p>
        </div>
        <div className="About-Facts-Wrapper">
          <FaArrowRight />
          <p>{fact6}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="About">
      <div className="About-Wrapper">
        <div className="About-ImageSection">
          <div className="About-ImageWrapper">
            <img className="About-ImageWrapper-One" src={image1} alt="" />
          </div>
          <div className="About-ImageWrapper">
            <img className="About-ImageWrapper-Two" src={image2} alt="" />
          </div>
          <div className="About-ImageWrapper">
            <img className="About-ImageWrapper-Three" src={image3} alt="" />
          </div>
          <div className="About-ImageWrapper">
            <img className="About-ImageWrapper-Four" src={image4} alt="" />
          </div>
        </div>
        <div className="About-TextSection">
          <div className="About-InfoText">
            <p className="About-SmallHeading">{smallHeader} </p>
            <p className="About-BigHeading">{bigHeader}</p>
            <p className="About-Text">{aboutText}</p>
            {renderFacts()}
          </div>
          <div className="About-Facts"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
