import React from 'react'
import './ContentWrapper.scss';

const ContentWrapper = ({children}) => {
  return (
    <div className='Wrapper'>
        {children}
    </div>
  )
}

export default ContentWrapper