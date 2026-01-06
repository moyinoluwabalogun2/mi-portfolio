import { motion } from 'framer-motion';
 import { FiGithub, FiExternalLink } from 'react-icons/fi'; 
 import '../styles/components/Projects.css'
 const projects = [ {
    
    id: 1, title: 'Rental and sale Website', 
    description: 'A full-featured online rental services made to help the rental and sale business to reach more people with an amazing design  .', 
    tags: ['html', 'css', 'javascript','react', ], github: 'https://github.com/moyinoluwabalogun2/rental-website', 
    live: 'https://livingspringsrentals.netlify.app', image: '/assets/hostel2.jpg' },
     { id: 2, title: 'investment website', 
        description: 'an investment website where people get to invest their money and make profits.',
         tags: ['css', 'html', 'javascript'], github: 'https://github.com/moyinoluwabalogun2/traded-inc', 
         live: 'https://moyinoluwabalogun2.github.io/traded-inc',
          image: '/assets/traded.jpg' }, 
          { id: 3, title: 'salon website ', 
            description: 'a website where you can book your appointments for your hair makeups amd so on ',
             tags: ['JavaScript', 'html', 'CSS','react'], github: 'https://github.com/moyinoluwabalogun2/salon-website',
              live: 'https://salonw.netlify.app', image: '/assets/salon1.jpg' }, 
            { id: 4, title: 'gadget store ', 
            description: 'its a modern, responsive and sleek ecommerce website for showcasing and managing tech products,complete with a secure admin dashboard and built using react ',
             tags: ['JavaScript', 'html', 'CSS','react'], github: 'https://github.com/moyinoluwabalogun2/gadget-store',
              live: 'https://favytechstore.netlify.app', image: '/assets/tech.jpeg' }, 
              { id: 5, title: 'restaurant website ', 
            description: 'its a modern, responsive and sleek restaurant website for showcasing and ordering foods and other features complete with a secure admin dashboard and built using react ',
             tags: ['JavaScript', 'html', 'CSS','react'], github: 'https://github.com/moyinoluwabalogun2/restaurant',
              live: 'https://epicureanfood.netlify.app', image: '/assets/restuarant.jpg' },
              { id: 6, title: 'digital launchpad ', 
            description: 'its a modern, responsive and sleek sales page where users have to pay before accessing the products with a  good admin dashboard and built using react ',
             tags: ['JavaScript', 'html', 'CSS','react'], github: 'https://github.com/moyinoluwabalogun2/salespage',
              live: 'https://salespa.netlify.app', image: '/assets/salespage.jpg' }

              
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
              