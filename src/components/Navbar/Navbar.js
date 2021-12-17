import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/a.png'

import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="gpt3__navbar-links_container ml-6">
                    <p><a href="#home" style={{color:"white",textDecoration:"none"}}>Home</a></p>
                    <p><a href="#wgpt3" style={{color:"white",textDecoration:"none"}}>About</a></p>
                    <p><a href="#possibility" style={{color:"white",textDecoration:"none"}}>Service</a></p>
                    <p><a href="#features"  style={{color:"white",textDecoration:"none"}}>Contact</a></p>
                   
                </div>
            </div>
           
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                        <p><a href="#home" style={{color:"white",textDecoration:"none"}}>Home</a></p>
                    <p><a href="#wgpt3" style={{color:"white",textDecoration:"none"}}>About</a></p>
                    <p><a href="#possibility" style={{color:"white",textDecoration:"none"}}>Service</a></p>
                    <p><a href="#features"  style={{color:"white",textDecoration:"none"}}>Contact</a></p>
                        </div>
                     
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;