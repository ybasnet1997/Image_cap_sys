import React, { useEffect } from 'react';
import './captionstab.css';

const Bettercaption3 = ({ regular }) => {
  console.log("Regular Recieved in Caption:", regular);
  const regularfilt1 = regular.charAt(0).toUpperCase() + regular.slice(1);
  const regularfilt2 = regularfilt1.replace(/^[ \t]+|[ \t]+$/gm, "");

  useEffect(() => {
    // Create an instance of the SpeechSynthesis API
    const synth = window.speechSynthesis;

    // Create a new SpeechSynthesisUtterance object with the text to be spoken
    const utterance = new SpeechSynthesisUtterance(regularfilt2);

    // Set the voice to use (optional)
    // You can use the `getVoices()` method of the synth object to get a list of available voices
    // utterance.voice = synth.getVoices()[0];

    // Speak the text
    synth.speak(utterance);
  }, [regularfilt2]);

  return (
    <div className='captionstab__capfrm'>
      <div className='captionstab__capfrm-txtcont'>
        <t className='captionstab__capfrm-txt'>
          <t className='captionstab__bl'>Better </t> <t className='captionstab__gr'>Caption: 4th</t>
        </t>
        <t className='captionstab__capfrm-cap'>
          { regularfilt2 + "." }
        </t>
      </div>
    </div>
  )
}

export default Bettercaption3;