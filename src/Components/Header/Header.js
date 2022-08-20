import React from 'react';
import './Header.css'
import Navi from './Navigation/Navi';
import Hero from './Hero/Hero';
const Header = () => {
    return (
        <div className='container'>
            <Navi/>
            <Hero/>
        </div>
    );
};

export default Header;