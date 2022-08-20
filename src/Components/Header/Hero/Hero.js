import React from 'react';
import './Hero.css'
import hero from '../../../utlites/img/hero.png'
const Hero = () => {
    return (
        <div className="hero-container">
            <div className='hero'>
                <div className='title'>
                    <h1 className='title-h'>Kelvin Karmer Designer & Developer</h1>
                    <p>I'm a portrait, fashion and lifestyle photographer living in New York City. During my thirteen year tenure here.</p>
                </div>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Hero;