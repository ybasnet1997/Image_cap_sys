import React from 'react';
import './beforeupload.css';
import { Imageupload } from '../../components';
import { useState } from 'react';
import checkEmp from '../../assets/Rectangle 23.png';
import checkedEmp from '../../assets/Rectangle 24.png';
import arr from '../../assets/arrBelow.png';
import checkM from '../../assets/checkMark.png';
import rightArr from '../../assets/rightarr_bef.png';
import leftArr from '../../assets/leftarr_bef.png';
const Beforeupload = ({ firstName, lastName, email }) => {

  const [select, setSelected] = useState(false);
  const [url, setUrl] = useState('http://localhost:8000/v1/caption/generate/?switcher=Regular');
  console.log("Selected as:", select);
  console.log("URL:", url);
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(1);


  const handleLeftArrowClick = () => {
    setCurrentCaptionIndex(currentCaptionIndex === 0 ? 1 : currentCaptionIndex - 1);
    console.log("Current Index Is:", currentCaptionIndex);
    if(select && currentCaptionIndex==0) {
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Attention');
    } else if (select && currentCaptionIndex==1){
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Nepali');
    } else {
      console.log("Not Selected!");
    }
  };


  const handleRightArrowClick = () => {
    setCurrentCaptionIndex(currentCaptionIndex === 1 ? 0 : currentCaptionIndex + 1);
    console.log("Current Index Is:", currentCaptionIndex);
    if(select && currentCaptionIndex==0) {
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Attention');
    } else if (select && currentCaptionIndex==1){
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Nepali');
    } else {
      console.log("Not Selected!");
    }
  };


  const selectHandler = () => {
    setSelected(!select);
    if (currentCaptionIndex === 1 && !select) {
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Attention');
    } else if (currentCaptionIndex === 0 && !select) {
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Nepali');
    } else if (select) {
      setUrl('http://localhost:8000/v1/caption/generate/?switcher=Regular');
    }
  };


  return (
    <>
    <div className='before__upload'>
      <div className='before__upload-mainframe'>
        <div className='before__upload-mainparent'>
          <div className='before__upload-maintext'>
          <p className='before__upload-text-bl'>Bring your Images to Life With</p> 
          <p className='before__upload-text-gr'>Perfect Captions</p>
          </div>
        </div>
      </div>

      <div className='inform'>
        <img src = { arr } className='point'></img>
        <t className='informer'>Hover Below for Model Change</t>
      </div>

      {currentCaptionIndex === 1 && select ? (
        <div className='att-model'>
          <img src={checkM} className='checkMsg' />
          <t className='att-model-txt'>Attention Model Selected</t>
        </div>
      ) : currentCaptionIndex === 0 && select ? (
        <div className='nep-model'>
          <img src={checkM} className='checkMsg' />
          <t className='nep-model-txt'>Nepali Model Selected (For Nepali Caption)</t>
        </div>
      ) : (
        <div className='reg-model'>
          <img src={checkM} className='checkMsg' />
          <t className='reg-model-txt'>Regular Model Selected</t>
        </div>
      )}

    <div className='before__upload-subframe'>
          <div className='upload__form-frame'>
            <Imageupload firstName={firstName} lastName={lastName} email={email} url={url}/>
          </div>
          <div className='attention__main' >
              
            <div className='attention__main-rect'>
                <img src={ rightArr } className = 'rightArr_bef' style={{cursor: 'pointer'}} onClick={ handleRightArrowClick }></img>
                <img src={ leftArr } className = 'leftArr_bef' style={{cursor: 'pointer'}} onClick={ handleLeftArrowClick }></img>
              
                {currentCaptionIndex === 1 ? (
                  <t className='attention__main-text'>
                    <t className='before__upload-text-bl1'>Give Your Captions a Boost, </t>
                    <t className='before__upload-text-gr1'>Try The Attention Model</t>
                  </t>
                ) : null}
                {currentCaptionIndex === 0 ? (
                  <t className='attention__main-text'>
                    <t className='before__upload-text-bl1'>TRY OUR NEPALI CAPTION, </t><br/>
                    <t className='before__upload-text-rd1'>BE AMAZED WITH ORIGINALITY</t>
                  </t>
                ) : null}
                
              {select ? (
                  <img src={checkedEmp} className="check" onClick={selectHandler} style={{ cursor: 'pointer' }}/>
                ) : (
                  <img src={checkEmp} className="check" onClick={selectHandler} style={{ cursor: 'pointer' }}/>
                )}
            </div>
          </div>
          </div>
    </div>
    </>
  )
}
export default Beforeupload;