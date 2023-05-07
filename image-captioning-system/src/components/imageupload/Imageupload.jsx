import React, { useRef, useState } from 'react';
import './imageupload.css';
import cloud from '../../assets/Upload.png';
import axios from 'axios';
import { Loader } from '../../components';
import { useNavigate } from 'react-router-dom';

const Imageupload = ({ firstName, lastName, email, url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responsedat, setResponsedat] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  console.log("FirstName by Imageupload:", firstName);
  console.log("LastName by Imageupload:", lastName);
  console.log("Email by Imageupload", email);
  console.log("URL CAUGHT:", url);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);

    setIsLoading(true);

    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
        setResponsedat(response.data);
        setIsLoading(false);

        navigate('/results', { state: { imageData: formData.get('image'), responseData: response.data, firstName: firstName, lastName: lastName, email: email }, replace: true });
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className='enclose__rect'>
      {isLoading && <Loader />}
      
      <div className='upload__cloud'>
          <img src={cloud} alt="upload" />
      </div>

      <div className='upload__text'>
        <div className='upload__text-text'>
          <p>(Only One Upload at A Time is Allowed)</p>
        </div>
      </div>

      <div className='upload__textor'>
        <div className='upload__textor-text'>
          <p>Choose a File</p>
        </div>
      </div>

      <div className='button__frame' onClick={handleClick} style={{ cursor: 'pointer' }}>
        <button className='button__frame-button' style={{ cursor: 'pointer' }}>
          <t className='button__frame-text'>Browse Files</t>
        </button>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      </div>
    
    </div>
  );
};

export default Imageupload;