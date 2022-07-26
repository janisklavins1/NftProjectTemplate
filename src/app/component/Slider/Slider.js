import React from 'react';
import './Slider.scss';
import Image from '../Image/Image';

// Images should not be less than 6
const Slider = ({ images, bgImage }) => {
  const renderImages = (image, index) => {
    return (
      <li key={index}>
        <Image src={image.image} alt={'NFT_SLIDER-' + index} />
      </li>
    );
  };

  return (
    <div className="Slider-Container">
      <Image className="Slider-ImageBg" src={bgImage} alt={'Test'} />
      <div className="Slider-ImageContainer">
        <div className="Slider-ImageContainer-Wrapper">
          <ul>{images.map((img, index) => renderImages(img, index))}</ul>
        </div>
        <div className="Slider-ImageContainer-Wrapper">
          <ul>{images.map((img, index) => renderImages(img, index))}</ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
