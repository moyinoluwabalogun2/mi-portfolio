import { motion } from 'framer-motion';
 import { FiGithub, FiExternalLink } from 'react-icons/fi'; 
 import '../styles/components/Projects.css'
 const projects = [ {
    
    id: 1, title: 'Rental and sale Website', 
    description: 'A full-featured online rental services made to help the rental and sale business to reach more people with an amazing design  .', 
    tags: ['html', 'css', 'javascript', ], github: 'https://github.com/moyinoluwabalogun2/daddy-business', 
    live: 'https://moyinoluwabalogun2.github.io/daddy-business/', image: '/assets/hostel2.jpg' },
     { id: 2, title: 'investment website', 
        description: 'an investment website where people get to invest their money and make profits.',
         tags: ['css', 'html', 'javascript'], github: 'https://github.com/moyinoluwabalogun2/traded-inc', 
         live: 'https://moyinoluwabalogun2.github.io/traded-inc',
          image: '/assets/traded.jpg' }, 
          { id: 3, title: 'furniture website ', 
            description: 'a website where you can get all your comfy furnitures ',
             tags: ['JavaScript', 'html', 'CSS'], github: 'https://github.com/moyinoluwabalogun2/furniture-website',
              live: 'https://moyinoluwabalogun2.github.io/furniture-website', image: '/assets/furnitureez.jpeg' }, 
            ]; 
              const Projects = () => {
                 return ( 
                 <section id="projects" className="projects">
                     <div className="projects-container">
                         <motion.div initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }} 
                          viewport={{ once: true }} 
                          transition={{ duration: 0.6 }} 
                          className="section-header" > 
                          <h2 className="section-title">My Projects</h2> 
                          <p>Here are some of my recent works.</p> 
                          </motion.div>
                           <div className="projects-grid"> 
                            {projects.map((project, index) => ( 
                                <motion.div key={project.id} 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.5, delay: index * 0.1 }} 
                                className="project-card" > 
                                <div className="project-image"> 
                                    <img src={project.image} 
                                    alt={project.title} /> 
                                    <div className="project-links"> 
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            
                                            
                                             <FiGithub /> </a> <a href={project.live} target="_blank" rel="noopener noreferrer"> 
                                                <FiExternalLink /> </a> </div> </div> 
                                                <div className="project-content"> 
                                                    <h3>{project.title}</h3> 
                                                    
                                                    <p>{project.description}</p> 
                                                    <div className="project-tags"> 
                                                        {project.tags.map((tag, i) =>
                                                         ( <span key={i}>{tag}</span> ))} </div> </div> 
                                                         </motion.div> ))} </div> </div> </section> ); 
                                                         }; 
                                                         export default Projects;
              