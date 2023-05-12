import React from 'react';
import './headermain.css';
import logo from '../../assets/Illusionist.png'

const Headermain = () => {
  return (
    <div className='header__bar'>
      <div className='header__bar-logo'>
        <a href='/home'><img src = {logo} alt = "logo" /></a>
      </div>
    </div>
  )
}

export default Headermain