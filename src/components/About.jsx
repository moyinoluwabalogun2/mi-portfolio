import { motion } from 'framer-motion';
 import { FaDownload } from 'react-icons/fa';
 import '../styles/components/About.css'
  const About = () => {
     const skills = [ { 
        name: 'HTML/CSS', level: 95 }, { name: 'JavaScript', level: 90 }, { name: 'React', level: 85 }, { name: 'React Router', level: 88 },{ name: 'Context API', level: 85 },{ name: 'Firebase Authentication', level: 90 },{ name: 'Firestore', level: 90 },
        { name: 'Rest APIs', level: 90 },{ name: 'Git', level: 90 },{ name: 'Github', level: 90 },{ name: 'Netlify', level: 93 },{ name: 'Webpack', level: 85 },{ name: 'Jest', level: 90 },
        { name: 'Responsive Web Design', level: 95 },
        { name: 'UI Animations', level: 85 },
        { name: 'Figma', level: 80 },
        
     ]; 
     
     return (
         <section id="about" className="about">
            
             <div className="container"> 
                <motion.div initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }} 
                 viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                   className="about-content" > 
                   <h2 className="section-title">About Me</h2>
                    <p> I'm a passionate frontend developer with 2 years of experience creating modern web applications. I specialize in React and love building interactive, performant, and accessible user interfaces. </p>
                     <p> When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. </p>
                      <div className="fun-facts"> <h4>Fun Facts:</h4> <ul> <li>☕ Coffee enthusiast</li> <li>🌍 Travel lover</li> <li>🎮 hardcore gamer</li> <li>likes learning</li> </ul> </div> 
                      <a href="/assets/cv.pdf" download className="btn download-btn">

                       <FaDownload /> Download Resume </a> </motion.div> 

                       <motion.div initial={{ opacity: 0  }} whileInView={{ opacity: 1  }}

                       viewport={{  }} transition={{ duration: 0.6 }} className="skills" > <h3>My Skills</h3>

                       <div className="skills-container"> 


                        {skills.map((skill, index) => ( <div key={index}

                         className="skill-item"> <div className="skill-info">

                             <span>{skill.name}</span> <span>{skill.level}%</span> </div>

                              <div className="skill-bar"> <motion.div initial={{ width: 0 }}

                              whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}

                               transition={{ duration: 1, delay: index * 0.1 }}

                               className="skill-progress" /> </div> </div> ))} </div> </motion.div> </div> </section> );
                            
                            }; 
                               export default About;