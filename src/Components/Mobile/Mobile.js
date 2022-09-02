
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faNavicon} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <div className="main-nav"
        style={{
            backgroundColor: Mobile ?'white':'#F1F1F1'
          }}>
            <nav className='navbar'>
          <h3 className={Mobile ? "logo-mobile" : "logo"}><a href="#">Kelvin</a><span>.</span></h3>

          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <li>Home</li>
            <li>Works</li>
            <li>Services</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <FontAwesomeIcon icon={faClose}/> : <FontAwesomeIcon icon={faNavicon}/>}
          </button>
        </nav>
        </div>
        
    );
};

export default Mobile;