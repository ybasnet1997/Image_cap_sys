import React, { useState, useEffect } from 'react';
import './signingupform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginLogo from '../../assets/Illusionist.png';
import Errorer from '../errorer/Errorer';
import Serverroer from '../errorer/Serverroer';

const Signingupform = () => {
  const [fname, setFname] = useState('');
  const [fnameError, setFnameError] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameError, setLnameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false);

  const [alreadyReg, setAlreadyReg] = useState(false);

  const [servError, setServError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (alreadyReg) {
      const errTime = setTimeout(() => {
        setAlreadyReg(false);
      }, 6000);
  
      return () => {
        clearTimeout(errTime);
      };
    }
  }, [alreadyReg]);

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

  const borderingStyle = {
    border: '2px solid #B40000',
    borderRadius: '7px',
  };

  const inputStyle = {
    '::placeholder': {
      color: '#D3B3B3',
    },
  };

  const fnameStyle = fnameError ? { ...borderingStyle, ...inputStyle } : inputStyle;
  const lnameStyle = lnameError ? { ...borderingStyle, ...inputStyle } : inputStyle;
  const emailStyle = emailError ? { ...borderingStyle, ...inputStyle } : inputStyle;
  const passStyle = passError ? { ...borderingStyle, ...inputStyle } : inputStyle;

  const validateForm = () => {
    const fnameError = fname.length < 3 || /^[^A-Z]/.test(fname);
    const lnameError = lname.length < 3 || /^[^A-Z]/.test(lname);
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passError = pass.length <= 8;

    setFnameError(fnameError);
    setLnameError(lnameError);
    setEmailError(emailError);
    setPassError(passError);

    return !(fnameError || lnameError || emailError || passError);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlreadyReg(false);

    if (validateForm()) {
      const jsonSign = {
        firstname: fname,
        lastname: lname,
        email: email,
        password: pass,
      };

      try {
        const response = await axios.post('http://localhost:3001/register', jsonSign, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);

        if(response.data.message) {
          setAlreadyReg(true);
        } else if (response.data.firstname) {
          console.log("FirstName Recieved:", response.data.firstname);
          console.log("LastName Recieved:", response.data.lastname);
          console.log("Email recieved:", response.data.email);
          navigate('/upload', { state: { first: response.data.firstname, last: response.data.lastname, emailAd: response.data.email }, replace: true });
        } else {
          console.log("Unexpected Error has Occured");
        }
      } catch (error) {
        console.log("CAN'T CONNECT TO THE SERVER");
        setServError(true);
      }
    }
  };

  return (
    <>
    <div className='signupform__frame'>
      <div className='signupform__rect'>
        <div className='signupform__logo'>
          <img src={LoginLogo} alt='Logo' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='signupform__signup'>
            <t className='signupform__signup-text'><t className='signupform__bl'>Sign</t><t className='signupform__gr'>up</t></t>
          </div>
          <div className='signupform__fs-ls'>
            <div className='signupform__fs-ls-ftxt'>
              <t className='signupform__bl'>First </t><t className='signupform__gr'>Name</t>
            </div>

            <input 
              type='text' 
              id='fname' 
              style={ fnameStyle }
              placeholder='Enter first name here' 
              className='signup__email-input-f'
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
            {!fnameError ? null : <t className='fname__error'>*Can't be Empty, Short OR First Letter Small</t>}

            <div className='signupform__fs-ls-ltxt'>
              <t className='signupform__bl'>Last </t><t className='signupform__gr'>Name</t>
            </div>

            <input
              type='text'
              id='lname'
              style={ lnameStyle }
              placeholder='Enter last name here'
              className='signup__email-input-l'
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            />
            {!lnameError ? null : <t className='lname__error'>*Can't be Empty, Short OR First Letter Small</t>}


          </div>
          <div className='signupform__em-pw'>
            <div className='signupform__em-pw-etxt'>
              <t className='signupform__bl'>Email</t><t className='signupform__gr'> Address</t>
            </div>

            <input 
              type='text' 
              id='email' 
              style={ emailStyle }
              placeholder='Enter your email address here' 
              className='signup__email-input-e' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}/>
            {!emailError ? null : <t className='email__error'>*Can't be Empty OR Should Contain Both '@' and a '.'</t>}

            <div className='signupform__em-pw-ptxt'>
              <t className='signupform__bl'>Password</t>
            </div>
            <input 
              type='password' 
              id='password' 
              style={ passStyle }
              placeholder='Enter your password here' 
              className='signup__email-input-p' 
              onChange={(e) => setPass(e.target.value)}
              value={pass}/>
            {!passError ? null : <t className='pass__error'>*Can't be Empty OR Should be More than 8 Words</t>}

          </div>
          <div className='signup__button'>
            <input type="submit" value="Signup" className='signup__button-b' style={{ cursor: 'pointer' }}></input>
          </div>
          <div className='signup__login-red'>
            <t className='signup__login-txt'>Already a User? </t><a href='/login' className='signup__login-lnk'>Login</a>
          </div>
        </form>
      </div>
    </div>
    {alreadyReg && (
      <div className="erroer">
        <Errorer />
      </div>
    )}
    <div className={`erroer ${alreadyReg ? "show" : "hide"}`}>
      <Errorer />
    </div>

    <div className={`serverroer ${servError ? "show" : "hide"}`}>
      <Serverroer />
    </div>
    </>
  )
}

export default Signingupform