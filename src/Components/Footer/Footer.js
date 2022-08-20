import React from 'react';
import './Footer.css'
import social1 from '../../utlites/social/LinkedIn.svg'
import social2 from '../../utlites/social/Instargam.svg'
import social3 from '../../utlites/social/Dribble.svg'
import social4 from '../../utlites/social/Behance.svg'
const Footer = () => {
    return (
        <div className='f-container'>
            <div className="con">
                <h1>Contacts</h1>
                <p>Want to know more or just chat? You are welcome!</p>
                <button className='primary-btn'>Send message</button>
            </div>

            <div className="i-grid">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
            </div>
            <p className='texts'>Like me on LinkedIn, Instagram, Behance, Dribble</p>
        </div>
    );
};

export default Footer;