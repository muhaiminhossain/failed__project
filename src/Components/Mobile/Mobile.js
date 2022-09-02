
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faNavicon} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
        <nav className='navbar'
        style={{
            backgroundColor: Mobile ?   'white':'#F1F1F1'
          }}>
          <h3 className={Mobile ? "logo-mobile" : "logo"}>Logo</h3>
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <FontAwesomeIcon icon={faClose}/> : <FontAwesomeIcon icon={faNavicon}/>}
          </button>
        </nav>
      </>
    );
};

export default Mobile;