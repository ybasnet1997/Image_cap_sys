import React from 'react';
import './homepage.css';
import { Footermain, Headermain } from '../../containers'; 
import panel1Img from '../../assets/panel1Img.png';
import panel2Img from '../../assets/panel2Img.png';
import v1 from '../../assets/v1.png';
import v2 from '../../assets/v2.png';
import v3 from '../../assets/v4.png';
import redi from '../../assets/cardLoc.png';

const Homepage = () => {
  return (
    <div className='home__main'>
        <Headermain />
        <div className='home__footer'>
            <Footermain />
        </div>

        <div className='home__panel1'>
            <div className='home__text-cont'>

                <div className='home__text-main'>
                    <t className = 'home__bl'>Captivating Image Captioning: </t><t className = 'home__gr'>Bringing Your Photos to Life</t>
                </div>

                <div className='home__text-par'>
                    <p className='home__para'>Our image captioning technology allows you to add accurate descriptions and captivating captions to your photos, making them more engaging and memorable. With our advanced AI algorithms, your photos will be analyzed and matched with relevant keywords to create an informative caption.</p>
                </div>

                <div className='home__panel1-butt'>
                    <button className='home__panel1-capt' style={{ cursor: 'pointer' }}><a href = "/signup">Caption</a></button>
                    <button className='home__panel1-about' style={{ cursor: 'pointer' }}>About Us</button>
                </div>
            </div>
            <div className='image__cont'>
                <img src={ panel1Img } className='home__panel1-img'></img>
            </div>
        </div>

        <div className='home__panel2'>
            <div className='home__head'>
                <t className='home__head-top'>
                    SYSTEM FLOW
                </t>
                <t className='home__head-desc'>
                    <t className='home__bl'>Implemented </t><t className='home__gr'>Systems</t>
                </t>
            </div>
            <div className='home__mid'>
                <t className='home__mid-text'><t className='home__bl'>An Encoder </t><t className='home__gr'>Decoder Approach</t></t>
                <p className='home__mid-par'>Encoder-Decoder is a widely used neural network architecture for tasks such as image captioning, language translation, and speech recognition. Its success in natural language processing and computer vision has made it an essential tool in modern technologies.</p>
            </div>

            <div className='panel2__img'>
                <img src={ panel2Img } className='home__panelX-img'></img>
            </div>

        </div>

        <div className='home__panel3'>
            <div className='home__panel3-head'>
                <t className='home__panel3-head-top'>
                    DIFFERENT APPROACHES
                </t>
                <t className='home__panel3-head-desc'>
                    <t className='home__bl'>Tried </t><t className='home__gr'>Approaches</t>
                </t>
            </div>
            <div className='home__panel-body'>
                <div className='head__body-card1'>
                    <img src={ v1 } className='head__body-card1-i'></img>
                    <t className='version1'>
                        <t className='home__bl'>Version </t><t className='home__gr'>1</t>
                        <a href='#' className='v1-desc'>Learn About V1</a>
                        <img src={ redi } className='red-arr'></img>
                    </t>
                </div>
                <div className='head__body-card2'>
                    <img src={ v2 } className='head__body-card1-i1'></img>
                    <t className='version2'>
                        <t className='home__bl'>Version </t><t className='home__gr'>2</t>
                        <a href='#' className='v1-desc'>Learn About V2</a>
                        <img src={ redi } className='red-arr'></img>
                    </t>
                </div>
                <div className='head__body-card3'>
                    <img src={ v3 } className='head__body-card1-i3'></img>
                    <t className='version3'>
                        <t className='home__bl'>Version </t><t className='home__gr'>3</t>
                        <a href='#' className='v1-desc'>Learn About V3</a>
                        <img src={ redi } className='red-arr'></img>
                    </t>
                </div>
                <button className='home__panel-redi' style={{ cursor: 'pointer' }}>View All</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage;