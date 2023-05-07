import React from 'react';
import './footer1.css';

const Footer1 = () => {
  return (
    <><div className='footer1__sec1'>
      <t className='footer1__sec1-text'>WANT TO KNOW MORE</t>
    </div>
    <div className='footer1__sec2'>
      <t className = 'footer1__sec2-text'><t className = 'footer__bl'>Let’s</t> <t className = 'footer__gr'>Talk!</t></t>
    </div>
    <div className = 'footer1__sec3'>
      <form>
        <input type='text' id='lname' placeholder='Enter your email address here' className='footer1__sec3-input'></input>
        <input type="submit" value="Submit" className='footer1__sec3-submit'></input>
      </form>
    </div>
    </>
  )
}

export default Footer1