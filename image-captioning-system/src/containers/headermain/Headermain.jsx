import React from 'react';
import './headermain.css';
import logo from '../../assets/Illusionist.png'

const Headermain = () => {
  return (
    <div className='header__bar'>
      <div className='header__bar-logo'>
        <img src = {logo} alt = "logo" />
      </div>
    </div>
  )
}

export default Headermain