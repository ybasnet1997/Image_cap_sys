import React from 'react';
import './regularapp.css';
import imager from '../../assets/version1-Regular.png';

const Regularapp = () => {
  return (
    <div>
      <div className='regularApp-head'>
        <t className='regularApp-head-text'>
          <t className = 'reg-bl'>Encode Decode Based</t> <t className = 'reg-gr'>Captioning Model</t>
        </t>
      </div>
      <div className='regularApp-body'>
        <p className='regluarApp-body-text'>Image captioning using a custom sequential model involves creating a neural network architecture that combines both convolutional and recurrent layers. The convolutional layers extract features from the input image, while the recurrent layers generate a textual description of the image. </p>
      </div>
      <div className='regularApp-img'>
        <img className = 'regularApp-img-img' src= { imager }></img>
      </div>
    </div>
  )
}

export default Regularapp;