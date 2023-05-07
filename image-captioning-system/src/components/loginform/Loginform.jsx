import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginform.css';
import LoginLogo from '../../assets/Illusionist.png';
import Errorer1 from '../errorer/Errorer1';
import Loggederror from '../errorer/Loggederror';

const Loginform = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [usErr, setUsErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [nonUser, setNonUser] = useState(false);
  const [servError, setServError] = useState(false);

  const navigate = useNavigate();

  const combinedStyleU = usErr ? { border: '2px solid #B40000', borderRadius: '7px', 'input[type="password"]::placeholder': { color: '#D3B3B3' } } : { 'input[type="password"]::placeholder': { color: '#D3B3B3' } };
  const combinedStyleP = passErr ? { border: '2px solid #B40000', borderRadius: '7px', 'input[type="password"]::placeholder': { color: '#D3B3B3' } } : { 'input[type="password"]::placeholder': { color: '#D3B3B3' } };

  useEffect(() => {
    if (nonUser) {
      const errTime = setTimeout(() => {
        setNonUser(false);
      }, 6000);
  
      return () => {
        clearTimeout(errTime);
      };
    }
  }, [nonUser]);

  useEffect(() => {
    if (servError) {
      const servTime = setTimeout(() => {
        setServError(false);
      }, 6000);
  
      return () => {
        clearTimeout(servTime);
      };
    }
  }, [servError]);
  
  const validateForm = () => {
    const usErr = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user);
    const passErr = pwd.length <= 8;

    setUsErr(usErr);
    setPassErr(passErr);

    return !(usErr || passErr);
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    if(validateForm()) {

      const jsonSign = {
        email: user,
        password: pwd,
      };

      console.log("JSON Created:", jsonSign);

      try {
        const response = await axios.post('http://localhost:3001/login', jsonSign, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);

        if(response.data.message) {
          setNonUser(true);
          console.log(nonUser);
        } else if (response.data.firstname) {
          console.log("FirstName Recieved After Login:", response.data.firstname);
          console.log("LastName Recieved After Login:", response.data.lastname);
          console.log("Email recieved After Login:", response.data.email);
          navigate('/upload', { state: { first: response.data.firstname, last: response.data.lastname, emailAd: response.data.email }, replace: true });
        } else {
          console.log("Unexpected Error has Occured");
        }
      } catch (error) {
        console.log("CAN'T CONNECT TO THE SERVER");
        setServError(true);
      }


    } else {
      console.log("Validation Error");
    }
  }

  return (
    <>
    <div className='login__form-frame'>
      
      <div className='login__form-imgframe'>
        <img src={ LoginLogo } alt='Logo'></img>
      </div>
      <div className='login__form-login'>
        <t className='login__form-login-txt'><t className = 'login__bl'>Log</t><t className = 'login__gr'>in</t></t>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className='login__input-form'>
          <label htmlFor='email' className='login__email-frame'>
            <t className = 'login__email-text'><t className = 'login__bl'>Email</t><t className = 'login__gr'> Address</t></t>
          </label>
            <input 
              type='text' 
              id='email' 
              style={ combinedStyleU }
              onChange={(e) => setUser(e.target.value)} 
              value={user} 
              placeholder='Enter your authorized email address here' 
              className='login__email-input' />
          {usErr && <t className='us__error'>*Can't be Empty OR Should Contain Both '@' and a '.'</t>}
        </div>
        <div className='login__password-frame'>
          <label htmlFor='pword'>
            <t className = 'login__password-text'><t className = 'login__bl'>Password</t></t>
          </label>
            <input 
              type='password' 
              id='pword' 
              style={ combinedStyleP }
              onChange={(e) => setPwd(e.target.value)} 
              value={pwd}
              placeholder='Enter authorized your password here' 
              className='login__password-input' />
            {passErr && <t className='password__error'>*Can't be Empty OR Should be More than 8 Words</t>}
        </div>
        <div className='login__button-frame'>
          <input type="submit" value="Login" className='login__button-login' style={{ cursor: 'pointer' }}></input>
        </div>
      </form>
    </div>
    {nonUser && (
      <div className="errorlog">
        <Errorer1 />
      </div>
    )}
    <div className={`errorlog ${nonUser ? "show" : "hide"}`}>
      <Errorer1 />
    </div>

    <div className={`serverroer ${servError ? "show" : "hide"}`}>
      <Loggederror />
    </div>
    </>
  )
}

export default Loginform