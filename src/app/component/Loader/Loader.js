import React, { useEffect } from 'react';
import './Loader.scss';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="WrapperSpinner">
      <div className="WrapperSpinner-Content">
        {FaSpinner ? (
          <FaSpinner />
        ) : (
          <span className="WrapperSpinner-Text">
            Loading
            <span className="WrapperSpinner-Dot">.</span>
            <span className="WrapperSpinner-Dot">.</span>
            <span className="WrapperSpinner-Dot">.</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Loader;
