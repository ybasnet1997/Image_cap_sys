import React from 'react';
import './nepaliapp.css';
import nepaliappimg from '../../assets/version3-Nepali.png';

const Nepaliapp = () => {
  return (
    <div className='nepaliapp-cont'>
      <div className='nepaliApp-head'>
        <t className='nepaliApp-head-text'>
          <t className = 'nep-bl'>Nepali Image</t><t className = 'nep-gr'> Captioning System</t>
        </t>
      </div>
      <div className='nepaliApp-body'>
        <p className='nepaliApp-body-text'>The Nepali image captioning system demonstrates its proficiency in generating accurate and contextually relevant captions for Nepali images by leveraging translated captions from the Flickr30K dataset during training, leading to significantly improved captioning accuracy. </p>
      </div>
      <div className='nepaliApp-img'>
        <img className = 'nepaliApp-img-img' src= { nepaliappimg }></img>
      </div>
    </div>
  )
}

export default Nepaliapp;