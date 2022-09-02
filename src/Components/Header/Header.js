import React from 'react';
import './Header.css'
import Hero from './Hero/Hero';
import Mobile from '../Mobile/Mobile';

const Header = () => {
    return (
        <div className='container'>
            <Mobile/>
            
            <Hero/>
        </div>
    );
};

export default Header;