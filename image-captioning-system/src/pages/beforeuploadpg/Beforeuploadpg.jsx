import React from 'react'

import { Beforeupload, Footermain, Headermain } from '../../containers'; 
import { Useriden } from '../../components';
import { useLocation } from 'react-router-dom';

const Beforeuploadpg = () => {
  const location = useLocation();
  const firstName = location.state && location.state.first;
  const lastName = location.state && location.state.last;
  const email = location.state && location.state.emailAd;
  console.log("First Name Recieved by BeforeUpload:", firstName);
  console.log("Last Name Recieved by BeforeUpload:", lastName);
  console.log("Email Recieved by BeforeUpload:", email);

  return (
    <>
      <div>
      <Useriden firstName={firstName} lastName={lastName} email={email} />
      </div>
      <div>
        <Headermain />
      </div>
      <div>
        <Beforeupload firstName={firstName} lastName={lastName} email={email} />
      </div>
      <div>
        <Footermain />
      </div>
      
    </>
  )
}

export default Beforeuploadpg