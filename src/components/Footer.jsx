import { motion } from 'framer-motion'; 
import { FaGithub, FaLinkedin, FaTwitter,  FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => { 
    const whatsappNumber = '+2349064097405';  
    const whatsappUrl = `https://wa.me/${whatsappNumber}`; 
    const socialLinks = [ { icon: <FaGithub />, url: 'https://github.com/moyinoluwabalogun2', label: 'GitHub' },
        
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/balogun-moyinoluwa-595973355', label: 'LinkedIn' },
            
        { icon: <FaTwitter />, url: 'https://twitter.com/BalogunMoy84599', label: 'Twitter' }, 
        
         { icon: <FaWhatsapp />, url: whatsappUrl, label: 'WhatsApp' },

         ];
         
         return ( 
         
         <footer className="footer"> 
         
         <div className="container"> 

            <motion.div initial={{ opacity: 0 }} 
            
            whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            
            transition={{ duration: 0.6 }} className="footer-content" > 
            
            <div className="footer-logo">
                
                 <img src="/assets/logo.png" alt="Bigshow Logo" className="logo-image" /> </div>
                 
                  <div className="footer-links"> 
                    <ul> 
                        <li><a href="#about">About</a></li>
                        
                         <li><a href="#projects">Projects</a></li>
                          <li><a href="#blog">Blog</a></li>
                           <li><a href="#contact">Contact</a></li> </ul> </div> 
                           
                           <div className="footer-social"> 
                            {socialLinks.map((link, index) => (
                                 <motion.a key={index} href={link.url}
                                  target="_blank" rel="noopener noreferrer"
                                   aria-label={link.label} 
                                   whileHover={{ y: -5 }} transition={{ duration: 0.2 }} > 
                                   
                                   {link.icon} </motion.a> ))} </div> {/* WhatsApp CTA Button */} 
                                   
                                   <motion.div className="whatsapp-cta" initial={{ opacity: 0, y: 20 }} 
                                   
                                   whileInView={{ opacity: 1, y: 0 }}
                                   
                                   viewport={{ once: true }} 
                                   transition={{ delay: 0.3 }} >
                                     <a href={whatsappUrl} className="whatsapp-btn"
                                      target="_blank" rel="noopener noreferrer" > <FaWhatsapp /> Message Me </a> </motion.div> </motion.div> 
                                      <div className="footer-bottom"> 
                                        
                                        <p>&copy; {new Date().getFullYear()} MOYINOLUWA. All rights reserved.</p> 
                                        
                                        <p>Built with React and ❤️</p> </div> </div>
                                         </footer> 
                                            ); };
                                         
                                         export default Footer;
