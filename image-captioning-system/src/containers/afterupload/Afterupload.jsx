import React, { useState } from 'react';
import './afterupload.css';
import { Captionstab, Bettercaption, Bettercaption1, Bettercaption2, Bettercaption3 } from '../../components';
import ArrowLeft from '../../assets/leftarr.png';
import ArrowRight from '../../assets/rightarr.png';

const Afterupload = ({ caption, imagedat, beam1, beam2, beam3, beam4 }) => {
  console.log("Afterupload received captioned:", imagedat);
  
  // Create a URL for the image data
  const imageUrl = URL.createObjectURL(imagedat);

  // Define state variable for current caption index
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);

  // Define click handler for the left arrow
  const handleLeftArrowClick = () => {
    setCurrentCaptionIndex(currentCaptionIndex === 0 ? 4 : currentCaptionIndex - 1);
  };

  // Define click handler for the right arrow
  const handleRightArrowClick = () => {
    setCurrentCaptionIndex(currentCaptionIndex === 4 ? 0 : currentCaptionIndex + 1);
  };

  return (
    <>
      <div className='afterupload__img-frame'>
        <img className='afterupload__img-frame-res' src={ imageUrl } alt="Uploaded" />
      </div>
      <div className='afterupload__arrow-func'>
        <img className='left__arr-arrow' src={ ArrowLeft } alt='Previous Caption' onClick={ handleLeftArrowClick } style={{ cursor: 'pointer' }}/>
        <img className='right__arr-arrow' src={ ArrowRight } alt='Next Caption' onClick={ handleRightArrowClick } style={{ cursor: 'pointer' }}/>
      </div>
      <div className='afterupload__result'>
        {currentCaptionIndex === 0 && <Captionstab regular={ caption } />}
        {currentCaptionIndex === 1 && <Bettercaption regular={ beam1 } />}
        {currentCaptionIndex === 2 && <Bettercaption1 regular={ beam2 } />}
        {currentCaptionIndex === 3 && <Bettercaption2 regular={ beam3 } />}
        {currentCaptionIndex === 4 && <Bettercaption3 regular={ beam4 } />}
      </div>
    </>
  );
};

export default Afterupload;