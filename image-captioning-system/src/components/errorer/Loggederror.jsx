import React from 'react';
import './loggederror.css';
import ServerErrorImg from '../../assets/servError.png';

const Loggederror = () => {
  return (
    <div className='logged__main'>
      <div className='logged__blackbg'>
      </div>
      <div className='logged__error'>
        <img className='logged__img' src= { ServerErrorImg }></img>
        <div className='logged__text'>
          <t className='logged__red'>OOPS, WE HAVE A PROBLEM!</t>
          <t className='logged__rest'><t className='logged__bl'>Can’t Establish</t><t className='logged__gr'> Connection to Server</t></t>
        </div>
      </div>
    </div>
  )
}

export default Loggederror;