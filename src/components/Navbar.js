import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <AiFillCode className='navbar-icon' />
                        Filippo Salmina
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                                    About Me
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </> )
}

export default Navbar;
