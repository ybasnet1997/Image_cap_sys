import React from 'react';
import './attentionapp.css';
import attappimg from '../../assets/version2-Attention.png';

const Attentionapp = () => {
  return (
    <div className='attentionapp-cont'>
      <div className='attentionApp-head'>
        <t className='attentionApp-head-text'>
          <t className = 'att-bl'>Self-Attention Based</t> <t className = 'att-gr'>Captioning Model</t>
        </t>
      </div>
      <div className='attentionApp-body'>
        <p className='attentionApp-body-text'>A self-attention model for image captioning focuses on different image regions by calculating attention weights using key, query, and value vectors. By capturing relationships and attending to relevant regions, it generates descriptive and contextually relevant captions, enhancing the overall performance of the captioning process. </p>
      </div>
      <div className='attentionApp-img'>
        <img className = 'attentionApp-img-img' src= { attappimg }></img>
      </div>
    </div>
  )
}

export default Attentionapp;