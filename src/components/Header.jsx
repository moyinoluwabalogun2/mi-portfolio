import { motion } from 'framer-motion'; 

import { NavLink } from 'react-router-dom'; 

import { useState } from 'react'; 

import { FiMenu, FiX } from 'react-icons/fi'; 
import '../styles/components/Header.css';

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] =
     useState(false); 
     
     const navLinks = [
       { name: 'Home', path: '/' }, 
       { name: 'About', path: '#about' },
        { name: 'Projects', path: '#projects' },
         { name: 'Blog', path: '#blog' }, 
         { name: 'Contact', path: '#contact' } ];
          return (
             <header className="header">
                <div className="header-container">
                   {/* Logo - Left Side */} <a href="/" className="logo"> <img src="/assets/logo.png" alt="bigshow Logo" /> 
                    </a>
                    {/* Desktop Nav - Right Side */} 
                    <nav className="desktop-nav"> 
                     <ul className="nav-list"> 
                        {navLinks.map((link) => ( 
                           <li key={link.name}> 
                           <a href={link.path} 
                           className="nav-link"> 
                           {link.name} </a> </li> ))}
                            </ul> </nav> {/* Mobile Toggle - Far Right */} 
                            <button className="mobile-menu-btn" 
                            onClick={() => setIsMobileOpen(!isMobileOpen)} 
                            aria-label="Menu" > 
                            {isMobileOpen ? <FiX size={24} /> 
                            : <FiMenu size={24} />} </button>
                             {/* Mobile Menu - Slides from Right */} 
                             <nav className={
                              `mobile-nav ${isMobileOpen ? 'open' : ''}
                              `}> <ul className="mobile-nav-list"> 
                              {navLinks.map((link) => 
                              ( <li key={link.name}> 
                              <a href={link.path} 
                              className="mobile-nav-link" 
                              onClick={() => setIsMobileOpen(false)} >
                                  {link.name} </a> </li> ))} </ul> </nav> 
                                  </div> </header> );
                                   }; 
export default Header;