import React from 'react';
import google from '../../images/googlelogo.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='logo'>
        <img 
            src={google}
            alt="google logo"
        />
    </div>
  )
}

export default Logo