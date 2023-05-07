import React from 'react';
import './afteruploadpg.css';
import { Afterupload, Footermain, Headermain } from '../../containers'; 
import { Useriden } from '../../components';
import { useLocation } from 'react-router-dom';
import BackImg from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';

const Afteruploadpg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const caption = location.state && location.state.responseData.regular_caption;
  const imagedat = location.state && location.state?.imageData;

  const firstName = location.state && location.state.firstName;
  const lastName = location.state && location.state.lastName;
  const email = location.state && location.state.email;

  const beam1 = location.state && location.state.responseData.beamed_caption[0];
  const beam2 = location.state && location.state.responseData.beamed_caption[1];
  const beam3 = location.state && location.state.responseData.beamed_caption[2];
  const beam4 = location.state && location.state.responseData.beamed_caption[3];

  console.log("Location State:", location);
  console.log("Afteruploadpg mounted");
  console.log("FirstName User:", firstName);
  console.log("LastName User:", lastName);
  console.log("Email User:", email);

  console.log("Caption is:", caption);
  console.log("Beam 1 Generated:", beam1);
  console.log("Beam 2 Generated:", beam2);
  console.log("Beam 3 Generated:", beam3);
  console.log("Beam 4 Generated:", beam4);
  console.log("Image is:", imagedat);

  const redirectUpload = () => {
    navigate('/upload', { state: { first: firstName, last: lastName, emailAd: email }, replace: true });
  };

  return (

    <>
      <div>
        <div>
          <Useriden firstName={firstName} lastName={lastName} email={email} />
        </div>
        <div className='navigate__upl'>
          <img className='navigate__back' src= { BackImg } style={{ cursor: 'pointer' }} onClick={ redirectUpload }></img>
          <t className='navigate__txt'><t className='navigate__bl'>Re</t><t className='navigate__gr'>upload</t></t>
        </div>
      </div>
      <div>
        <Headermain />
      </div>
      <div>
        <Afterupload 
          caption = { caption } 
          imagedat = { imagedat } 
          beam1 = { beam1 } 
          beam2 = { beam2 } 
          beam3 = { beam3 } 
          beam4 = { beam4 }
        />
      </div>
      <div>
        <Footermain />
      </div>
    </>
  )
}

export default Afteruploadpg;