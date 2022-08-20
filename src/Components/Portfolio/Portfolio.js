import React from 'react';
import './Portfolio.css'
import p1 from '../../utlites/img/reebok_web-1.jpg'
import p2 from '../../utlites/img/reebok_web.jpg'
import p3 from '../../utlites/img/Слой 8.jpg'
const Portfolio = () => {
    return (
        <div className="grid-x">
            <h1 className='Portfolio'>Portfolio</h1>
            <div className='grid-p'>
                <div className='box'>
                    <img className='port'src={ p1} alt="" />
                    <a className='port-a' href="#">Online fashion store-Homepage</a> 
                </div>

                <div className='box'>
                    <img className='port'src={ p2} alt="" />
                    <a className='port-a' href="#">Reebok Store - Concept</a> 
                </div>

                <div className='box'>
                    <img className='port'src={ p3} alt="" />
                    <a className='port-a' href="#">Braun Landing Page - Concept</a> 
                </div>
            </div>
        </div>
    );
};

export default Portfolio;