import React from 'react';
import './Navi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose,faNavicon} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navi = () => {
    // const [icon, setIcon]=useState(true);
    
  const [nav, setNav] = useState(false);
    return (
        <div >
            <div className='main-nav'>
                    <div className='nav-container'>
                                <h1><a href="#">Kelvin</a><span>.</span></h1>
                                
                                            <ul className='main-nav-list'>
                                                    <li className='main-nav-link'>Home</li>
                                                    <li className='main-nav-link'>Work</li>
                                                    <li className='main-nav-link'>Services</li>
                                                    <li className='main-nav-link'>About</li>
                                                    <li className='main-nav-link'>Contacts</li>
                                            </ul>
                
                    </div>

            </div>
            <button className='btn-m-nav'>
                <FontAwesomeIcon name='close-outline' className='icon-m-nav' icon={faClose}/>
                <FontAwesomeIcon name='menu-outline' className='icon-m-nav' icon={faNavicon}/>
            </button>
        
        </div>

        
    // <div className="main-nav">
    //     <div className={isNavExpanded? "not":'nav-container'}>
    //             <h2 className={isNavExpanded ? "hide" : "show"}><a href="#">Kelvin</a><span>.</span></h2>

    //             {/* ul starts here */}
    //             <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
    //                 <ul>
    //                 <li>Home</li>
    //                 <li>Work</li>
    //                 <li>Services</li>
    //                 <li>About</li>
    //                 <li>Contacts</li>
    //                 </ul>
    //             </div>


    //                 <div className={isNavExpanded? "hamburger-ex":"hamburger"}
    //                 onClick={() => {
    //                 setIsNavExpanded(!isNavExpanded);}}>
    //                     {isNavExpanded? <FontAwesomeIcon icon={faClose}/>:<FontAwesomeIcon icon={faNavicon}/>}
    //                 </div>
                    
                
    //     </div>
    // </div>
    )
};

export default Navi;