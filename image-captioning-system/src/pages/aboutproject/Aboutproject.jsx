import React, { useEffect } from 'react';
import { useState } from 'react';
import './aboutproject.css';
import { Footermain, Headermain } from '../../containers';
import {  Attentionapp, Nepaliapp, Regularapp } from '../../components';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const Aboutproject = () => {
  const location = useLocation();
  const { index } = queryString.parse(location.search);
  const [currentIndex, setIndex] = useState(index !== undefined ? parseInt(index) : 0);

  function v1Click() {
    setIndex(0);
  }

  function v2Click() {
    setIndex(1);
  }

  function v3Click() {
    setIndex(2);
  }

  console.log("Index set as:", index);

  return (
    <div>
      <div className='aboutProj-header'>
        <Headermain />
      </div>

      <div className='aboutProj-works'>
        ALL OUR WORKS
      </div>

      <div className='aboutProj-approach'>
        <t className='aboutProj-approach-text'><t className = 'aboutProj-bl'>Training </t><t className = 'aboutProj-gr'>Approaches</t></t>
      </div>

      <div className='aboutProj-butts'>
          <button
            className='aboutProj-version1'
            style={{
              cursor: 'pointer',
              background: currentIndex === 0 ? '#096192' : '',
              color: currentIndex === 0 ? '#FFFFFF' : ''
            }}
            onClick={v1Click}
          >
            Version 1
          </button>

          <button
            className='aboutProj-version2'
            style={{
              cursor: 'pointer',
              background: currentIndex === 1 ? '#096192' : '',
              color: currentIndex === 1 ? '#FFFFFF' : ''
            }}
            onClick={v2Click}
          >
            Version 2
          </button>

          <button
            className='aboutProj-version3'
            style={{
              cursor: 'pointer',
              background: currentIndex === 2 ? '#096192' : '',
              color: currentIndex === 2 ? '#FFFFFF' : ''
            }}
            onClick={v3Click}
          >
            Version 3
        </button>
      </div>
      <div className='aboutProj-versionInfo'>
        {currentIndex === 0 && <Regularapp />}
        {currentIndex === 1 && <Attentionapp />}
        {currentIndex === 2 && <Nepaliapp />}
      </div>

      <div className='aboutProj-footer'>
        <Footermain />
      </div>
    </div>
  )
}

export default Aboutproject