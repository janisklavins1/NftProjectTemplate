import React, { useState } from 'react';
import './Image.scss';
import { FaSpinner } from 'react-icons/fa';

const Image = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderImagePlaceHolder = () => {
    if (imageLoaded) {
      return null;
    }

    return (
      <div className='Image-Container'>
        <FaSpinner />
      </div>
    );
  };

  const renderImage = () => {
    return (
      <img
        style={imageLoaded ? {} : { display: 'none' }}
        src={src || ''}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    );
  };

  return (
    <>
      {renderImagePlaceHolder()}
      {renderImage()}
    </>
  );
};

export default Image;
