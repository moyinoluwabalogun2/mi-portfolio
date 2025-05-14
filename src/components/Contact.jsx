 import { motion } from 'framer-motion';
  import { useRef, useState } from 'react'; 
  
  import emailjs from 'emailjs-com'; 
  import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; 
  import '../styles/components/Contact.css';
  
  
  const Contact = () => { 
    const formRef = useRef(); 
    const [formData, setFormData] = useState
    ({ name: '', email: '', message: '' }); 
    const [isSubmitting, setIsSubmitting] = useState(false);
     const [submitStatus, setSubmitStatus] = useState(null); 
     const handleChange = (e) => { const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value })); }; 
      const handleSubmit = (e) => { 
        e.preventDefault(); setIsSubmitting(true); 
        emailjs.sendForm( 'service_mzuyj9b', 'template_fnsixle', formRef.current, 'c9f9TPJOD44PcAaOM' ) 
        .then((result) => { console.log(result.text); setSubmitStatus('success'); 
            setFormData({ name: '', email: '', message: '' }); }, 
            (error) => { console.log(error.text); setSubmitStatus('error'); }) 
            .finally(() => { setIsSubmitting(false); 
                setTimeout(() => setSubmitStatus(null), 5000); }); }; 
                return ( 
                <section id="contact"
                 className="contact">
                     <div className="contact-container">
                         <motion.div initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true }} 
                          transition={{ duration: 0.6 }} 
                          className="section-header" > 
                          <h2 className="section-title">Get In Touch</h2>
                           <p>Have a project in mind or want to collaborate? Let's talk!</p> </motion.div> 
                           <div className="contact-content"> 
                            <motion.div initial={{ opacity: 0, x: -50 }} 
                            whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                              transition={{ duration: 0.6 }} 
                              className="contact-info" >
                                 <div className="info-item"> 
                                    <FiMapPin className="info-icon" /> 
                                    <div> <h4>Location</h4> <p>ogun state,nigeria</p> 
                                    </div> </div> <div className="info-item">
                                         <FiPhone className="info-icon" /> <div> <h4>Phone</h4> <p>+2349064097405</p> </div> </div>
                                          <div className="info-item"> <FiMail className="info-icon" /> <div> 
                                            <h4>Email</h4> 
                                            <p>moyinoluwabalogun2@gmail.com</p> </div> </div> </motion.div>
                                            
                                             <motion.form ref={formRef} onSubmit={handleSubmit} 
                                             initial={{ opacity: 0, x: 50 }} 
                                             whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                               transition={{ duration: 0.6 }}
                                                className="contact-form" >
                                                     <div className="form-group">
                                                         <input type="text" name="name" value={formData.name} 
                                                         onChange={handleChange} 
                                                         placeholder="Your Name" required /> </div> 
                                                         <div className="form-group"> 
                                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required /> </div>
                                                             <div className="form-group"> 
                                                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required /> </div> 
                                                                <motion.button type="submit" 
                                                                className="btn submit-btn"
                                                                 disabled={isSubmitting} 
                                                                 whileHover={{ scale: 1.05 }} 
                                                                 whileTap={{ scale: 0.95 }} > {
                                                                    isSubmitting ? 'Sending...' : ( <> 
                                                                    <FiSend /> Send Message </> )} </motion.button>
                                                                     {submitStatus === 'success' && ( 
                                                                        <motion.div initial={{ opacity: 0, y: 20 }} 
                                                                        
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                         className="form-message success" > Message sent successfully! </motion.div> )}
                                                                          {submitStatus === 'error' && ( <motion.div initial={{ opacity: 0, y: 20 }} 
                                                                          animate={{ opacity: 1, y: 0 }} 
                                                                          className="form-message error" > Failed to send message. Please try again. </motion.div> )}
                                                                           </motion.form> </div> </div> </section> ); }; 
                                                                           export default Contact;