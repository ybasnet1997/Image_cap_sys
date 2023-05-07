import React from 'react';
import './errorer.css';
import warner from '../../assets/emailWarn.png';

const Errorer1 = () => {
  return (
    <div className='errorer__entire'>
        <img className='errorer__warn' src={ warner }></img>
        <t className='erroer__text'>No Such Record Found in Server</t>
    </div>
  )
}

export default Errorer1;