import React from 'react';
import './Icons.css'
import icon1 from '../../utlites/icons/browser 1.svg'
import icon2 from '../../utlites/icons/graphic 1.svg'
import icon3 from '../../utlites/icons/startup 1.svg'
const Icons = () => {
    return (
        <div className='grid'>
            <div className='grid-i'>
            <div className='i-container'>
                <img className='icons'src={icon1} alt="" />
                <h2>UI/UX DESIGN</h2>
                 
                <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </div>

            <div className='i-container'>
            <img className='icons'src={icon2} alt="" />
            <h2>DEVELOPMENT</h2>
                 
                <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </div>

            <div className='i-container'>
            <img className='icons'src={icon3} alt="" />
            <h2>SOFTWARE TESTING</h2>
                 
                <p>Our design is translated into comprehensive digital environments built on latest development standards.</p>
            </div>
        </div>
        </div>
    );
};

export default Icons;