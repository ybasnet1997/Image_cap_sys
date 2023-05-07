import React, { useEffect } from 'react';
import './captionstab.css';

const Captionstab = ({ regular }) => {
  console.log("Regular Received in Caption:", regular);
  const regularfilt1 = regular.charAt(1).toUpperCase() + regular.slice(2);
  const regularfilt2 = regularfilt1.replace(/^[ \t]+|[ \t]+$/gm, "");

  useEffect(() => {
    // Create a new SpeechSynthesisUtterance object with the text to be spoken
    const utterance = new SpeechSynthesisUtterance(regularfilt2);

    // Set the voice to use (optional)
    utterance.voiceURI = 'Google UK English Male';
    utterance.lang = 'en-US';

    // Speak the text
    window.speechSynthesis.speak(utterance);
  }, [regularfilt2]);

  return (
    <div className='captionstab__capfrm'>
      <div className='captionstab__capfrm-txtcont'>
        <t className='captionstab__capfrm-txt'>
          <t className='captionstab__bl'>Regular </t> <t className='captionstab__gr'>Caption</t>
        </t>
        <t className='captionstab__capfrm-cap'>
          { regularfilt2 + "." }
        </t>
      </div>
    </div>
  )
}

export default Captionstab;