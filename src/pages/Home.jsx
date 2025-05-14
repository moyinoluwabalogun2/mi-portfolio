import { useEffect } from 'react'; 
import Header from '../components/Header'; 
import Hero from '../components/Hero'; 
import About from '../components/About'; 
import Projects from '../components/Projects'; 
import Blog from '../components/Blog'; 
import Contact from '../components/Contact';
 import Footer from '../components/Footer'; 
 
 const Home = () => { useEffect(() => { 
     const handleAnchorClick = (e) => { 
        const target = e.target.closest('a[href^="#"]');
         if (!target) return; 
         
         
         const href = target.getAttribute('href');
          if (href === '#') return; e.preventDefault(); 
          
          const element = document.querySelector(href); 
          
          if (element) { element.scrollIntoView({ behavior: 'smooth' }); 
        } }; document.addEventListener('click', handleAnchorClick);
         return () => document.removeEventListener('click', handleAnchorClick); }, 
         []); return ( 
         
         <div className="home"> <Header /> <main> <Hero /> <About /> <Projects /> <Blog /> <Contact /> </main> <Footer /> </div> );
        
        }; export default Home;