import React from 'react';
import './Navi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faNavicon} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import heroImage from '../../utlites/img/hero.png'

const Navi = () => {
    const [icon, setIcon]=useState(true);
    return (
        <div className='top-container'>
            <div className="nav-container">
            <nav className="nav-desktop">
                <h2 id="logo">Kelvins</h2>
                <ul>
                    <a href="">Home</a>
                    <a href="">Work</a>
                    <a href="">Service</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </ul>
                </nav>

                <nav className="nav-mobile">
                <a href="#" id='logo' className={icon? 'hide': 'show'}>Kelvin <span className='period'>.</span></a>
                <ul id='main-box' className={icon? 'hamburger': 'desktop'}>
                   <li className="items">
                       <a href="#" className="nav-link">Home</a></li>
                   <li className="items">
                       <a href="#" className="nav-link">Work</a></li>
                   <li className="items">
                       <a href="#" className="nav-link">Services</a></li>
                   <li className="items">
                       <a href="#" className="nav-link">About</a></li>
                   <li className="items">
                       <a href="#" className="nav-link">Contact</a></li>
               </ul>
               
               <FontAwesomeIcon onClick={()=>setIcon(!icon)} className='ham' icon={icon?faClose:faNavicon}/>
            </nav>
            </div>
            <div className="header-container">
                <div id="hero-text">
                    <h1>Kelvin kramer Designer &  Developer</h1>
                    <br/>
                    <p>I'm a portrait, fashion and lifestyle photographer living in New York City. During my thirteen year tenure here</p>
                </div>
                <img src={heroImage} alt="" />
                
            </div>
        </div>
    )
};

export default Navi;