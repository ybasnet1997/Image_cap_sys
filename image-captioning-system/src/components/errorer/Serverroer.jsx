import React from 'react';
import './serverrorer.css';
import ServerErrorImg from '../../assets/servError.png';

const Serverroer = () => {
  return (
    <div className='serv__main'>
      <div className='serv__blackbg'>
      </div>
      <div className='serv__error'>
        <img className='serv__img' src= { ServerErrorImg }></img>
        <div className='serv__text'>
          <t className='serv__red'>OOPS, WE HAVE A PROBLEM!</t>
          <t className='serv__rest'><t className='serv__bl'>Can’t Establish</t><t className='serv__gr'> Connection to Server</t></t>
        </div>
      </div>
    </div>
  )
}

export default Serverroer;