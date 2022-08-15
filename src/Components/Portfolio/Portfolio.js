import React from 'react';
import './Portfolio.css'
import p1 from '../../utlites/img/reebok_web-1.jpg'
import p2 from '../../utlites/img/reebok_web.jpg'
import p3 from '../../utlites/img/Слой 8.jpg'
const Portfolio = () => {
    return (
        <div className='grid-p'>
            <h1 className='Portfolio'>Portfolio</h1>
            <div>
            <img className='port'src={ p1} alt="" />
            <a href="">Online fashion store-Homepage</a> 
            </div>

            <div>
            <img className='port'src={ p2} alt="" />
            <a href="">Reebok Store - Concept</a> 
            </div>

            <div>
            <img className='port'src={ p3} alt="" />
            <a href="">Braun Landing Page - Concept</a> 
            </div>
        </div>
    );
};

export default Portfolio;