import React, { useState } from 'react';
import './useriden.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Useriden = ({ firstName, lastName, email }) => {
  console.log("FirstName Received by Useriden:", firstName);
  console.log("LastName Received by Useriden:", lastName);
  console.log("Email Received by Useriden:", email);

  const [logg, setLogg] = useState(false);
  const navigate = useNavigate();

  const handleLog = async (e) => {
    console.log('logged out!');
    try {
      const response = await axios.get('http://localhost:3001/logout');
    
      if (response.data.message) {
        console.log("Success!");
        navigate('/home', { replace: true });
      } else {
        console.log("Error Occured");
      }
    } catch (error) {
        console.log("CAN'T CONNECT TO THE SERVER");
        // setServError(true);
    }
  }

  return (
    <div className='useriden__comp'>
      <div className='useriden__bar'></div>
      <div className='useriden__box'>
          <t className='useriden__name'><t className='useriden__bl'>{ firstName } </t><t className='useriden__gr'>{ lastName }</t></t>
          <t className='useriden__email'>{ email }</t>
          <button className='useriden__butt' style={{ cursor: 'pointer' }} onClick={ handleLog }>
              <t className='useriden__logout'>Logout</t>
          </button>
      </div>
    </div>
  )
}

export default Useriden;