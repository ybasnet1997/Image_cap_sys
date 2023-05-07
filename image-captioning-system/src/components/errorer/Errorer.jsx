import React from 'react';
import './errorer.css';
import warner from '../../assets/emailWarn.png';

const Errorer = () => {
  return (
    <div className='errorer__entire'>
        <img className='errorer__warn' src={ warner }></img>
        <t className='erroer__text'>Email Address Already Registered</t>
    </div>
  )
}

export default Errorer