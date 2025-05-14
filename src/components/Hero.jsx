import { motion } from 'framer-motion'; 
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFileDownload,} from 'react-icons/fa'; 
import { HiOutlineMail } from 'react-icons/hi'; 
import React from 'react'
import '../styles/components/Hero.css'


 const Hero = () => { 
    const socialLinks = [ 
        { icon: <FaGithub />, url: 'https://github.com/moyinoluwabalogun2' }, 
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/balogun-moyinoluwa-595973355' },
         { icon: <HiOutlineMail />, url: 'moyinoluwabalogun2@gmail.com' }, 
         
         { icon: <FaWhatsapp />, url: 'https://wa.me/+2349064097405 ' },
            { icon: <FaTwitter />, url: 'https://twitter.com/BalogunMoy84599' }
        ]; return ( 
            <section id="home" 
            className="hero">
                 <div className="hero-container">
                     {/* Left Column - Text & Social */}
                      <div className="hero-content"> 
                        <motion.div initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6 }} > 
                        <h4 className="greeting">Hi, I'm</h4> 
                        <h1 className="name">BALOGUN MOYINOLUWA</h1> 
                        <h2 className="title">Frontend Developer</h2> 
                        <p className="intro"> I build exceptional digital experiences with modern technologies.
                             Focused on creating clean, efficient, and user-friendly interfaces. </p> 
                             <div className="cta-buttons">
                                 <motion.a href="/assets/cv.pdf" 
                                 download className="btn btn-primary" whileHover={{ scale: 1.05 }} >
                                  <FaFileDownload style={{
                                     marginRight: '0.5rem' }} /> Download CV </motion.a> 
                                     <motion.a href="#contact"
                                      className="btn btn-secondary" 
                                      whileHover={{ scale: 1.05 }} > Contact Me </motion.a> 
                                      </div> </motion.div> 
                                      {/* Social Links - Floating Bottom */} 
                                      <motion.div className="hero-social"
                                       initial={{ opacity: 0 }} 
                                       animate={{ opacity: 1 }} 
                                       transition={{ delay: 0.4 }} >
                                         {socialLinks.map((link, index) => ( 
                                            <motion.a key={index} href={link.url}
                                             target="_blank" rel="noopener noreferrer" 
                                             whileHover={{ y: -5 }} > {link.icon} </motion.a> 
                                            ))} </motion.div> </div> 
                                            {/* Right Column - Circular Profile Pic */}
                                             <motion.div 
                                             className="hero-image" 
                                             initial={{ opacity: 0, x: 50 }} 
                                             animate={{ opacity: 1, x: 0 }} 
                                             transition={{ duration: 0.6, delay: 0.2 }} > 
                                             <img src="/assets/profile.jpg" alt="Bigshow " className="profile-pic" /> </motion.div> </div> </section> ); 
                                            }; 
                                            
                                            export default Hero;
