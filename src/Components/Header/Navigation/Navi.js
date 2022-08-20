import React from 'react';
import './Navi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faNavicon} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navi = () => {
    // const [icon, setIcon]=useState(true);
    
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        // <div className='main-nav'>
        //     <div className='nav-container'>
                        // <h1><a href="#">Kelvin</a><span>.</span></h1>
                        
                                //      <ul >
                                        //     <li>Home</li>
                                        //     <li>Work</li>
                                        //     <li>Services</li>
                                        //     <li>About</li>
                                        //     <li>Contacts</li>
                                //      </ul>
           
        //      </div>
        // </div>
        
    <div className="main-nav">
        <div className={isNavExpanded? "not":'nav-container'}>
                <h2 className={isNavExpanded ? "hide" : "show"}><a href="#">Kelvin</a><span>.</span></h2>

                {/* ul starts here */}
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contacts</li>
                    </ul>
                </div>


                    <div className={isNavExpanded? "hamburger-ex":"hamburger"}
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);}}>
                        {isNavExpanded? <FontAwesomeIcon icon={faClose}/>:<FontAwesomeIcon icon={faNavicon}/>}
                    </div>
                    
                
        </div>
    </div>
    )
};

export default Navi;