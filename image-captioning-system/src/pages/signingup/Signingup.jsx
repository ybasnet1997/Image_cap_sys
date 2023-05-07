import React, { useState } from 'react';
import './signingup.css';
import { Signingupform } from '../../components';
import { useLocation } from 'react-router-dom';

const Signingup = () => {
  return (
    <div className='signing-frame'>
      <Signingupform />
    </div>
  );
};

export default Signingup;