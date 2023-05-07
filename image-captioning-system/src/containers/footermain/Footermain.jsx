import React from 'react';
import './footermain.css';
import {  Footer1, Footer2, Footer3 } from '../../components';

const Footermain = () => {
  return (
    <div className='footer__main'>
      <div className='footer__main-cont'>
        <Footer1 />
        <Footer2 />
        <Footer3 />
        <t className = 'footer__main-disclaim'>Copyright © Illusionist Tech by Yugant Basnet, 2023</t>
      </div>
    </div>
  )
}

export default Footermain