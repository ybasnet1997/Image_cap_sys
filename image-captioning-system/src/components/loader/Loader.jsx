import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className='loading__frame'>
        <div className='loading__frame-overlay'>
            

            </div>
            <div className='loading__frame-box'>
                
            <svg className='svg__load' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="rotate(-90 12 12)"><g fill="none" stroke="#0E8C7F" stroke-linecap="round" stroke-width="2">
                    
                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/>
                    </path>
                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/>
                        <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                        </path>
                        </g>
                        </g>
                        </svg>

            <div className='loading__frame-text'>
            <t className='loading__frame-init'>
                <t className='loading__bl'>Your Caption is Being Generated,</t><br/>
                <t className='loading__gr'>Please Wait a Few Minutes...</t>
            </t>
            </div>
        </div>
    </div>
  )
}

export default Loader