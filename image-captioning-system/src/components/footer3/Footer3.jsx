import React from 'react';
import './footer3.css';
import call from '../../assets/caller.png';
import location from '../../assets/Location.png';

const Footer3 = () => {
  return (
    <><div className = 'footer3__sec1'>
      <div className = 'footer3__sec1-text'><t className = 'footer__bl'>Contact</t><t className = 'footer__gr'> Me</t></div>
    </div>
    <div className = 'footer3__sec2-icon'>
      <img src= { location } alt = 'Call Icon'></img>
    </div>
    <div className = 'footer3__sec2-textCont'>
      <t className = 'footer3__sec2-text'>Krishna Pauroti Kamalopokhari, Nepal</t>
    </div>
    <div className = 'footer3__sec3-icon'>
      <img src = { call } alt = 'Location Icon'></img>
    </div>
    <div className = 'footer3__sec3-textCont'>
      <t className = 'footer3__sec3-text'>+977-9861212507</t>
    </div>
    </>
  )
}

export default Footer3