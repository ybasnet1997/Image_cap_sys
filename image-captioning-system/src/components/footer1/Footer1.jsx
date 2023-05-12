import React, { useState } from 'react';
import './footer1.css';

const Footer1 = () => {
  const [mail, setMail] = useState('');

  function handleSub(e) {
    e.preventDefault();

    console.log("Handle Submit Triggered");
    const subject = "Information Request: Captioning System";
    const message = `Dear basnetyugant@gmail.com,

I am writing to request information about the captioning system. Please provide details regarding its features, implementation, and any additional relevant information.

Email: ${mail}

Thank you for your assistance.

Best regards,
${mail}`;

    window.location.href = `mailto:basnetyugant@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  function handleMailChange(e) {
    setMail(e.target.value);
  }

  return (
    <>
      <div className='footer1__sec1'>
        <span className='footer1__sec1-text'>WANT TO KNOW MORE</span>
      </div>
      <div className='footer1__sec2'>
        <span className='footer1__sec2-text'><span className='footer__bl'>Let’s</span> <span className='footer__gr'>Talk!</span></span>
      </div>
      <div className='footer1__sec3'>
        <form onSubmit={handleSub}>
          <input
            type='text'
            id='lname'
            placeholder='Enter your email address here'
            className='footer1__sec3-input'
            value={mail}
            onChange={handleMailChange}
          />
          <input
  type="submit"
  value="Submit"
  className="footer1__sec3-submit"
  style={{ cursor: 'pointer' }}
/>
        </form>
      </div>
    </>
  );
};

export default Footer1;