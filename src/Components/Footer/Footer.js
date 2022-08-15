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
                <br />
                <h2>Want to know more or just chat?
                    <br />
                    You are welcome!
                </h2>
                <br />
                <button>Send message</button>
            </div>

            <div className="i-grid">
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
            </div>
            <span>Like me on
                <br />
                LinkedIn, Instagram, Behance, Dribble
            </span>
        </div>
    );
};

export default Footer;