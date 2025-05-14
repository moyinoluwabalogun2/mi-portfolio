import{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom'; 
import { motion } from 'framer-motion';
 import Header from '../components/Header'; 
 import Footer from '../components/Footer'; 
 
  const blogPosts = [ { 
    id: '1', title: 'Getting Started with React Hooks',
     content: ` <h2>Introduction to React Hooks</h2>
      <p>React Hooks were introduced in React 16.8 and have revolutionized how we write React components.</p>
       <h3>Basic Hooks</h3> <ul> 
       <li><strong>useState</strong> - For state management</li>
        <li><strong>useEffect</strong> - For side effects</li> </ul> `,
         date: 'May 15, 2023', readTime: '5 min read', category: 'React' },
          /* Add more post as needed*/]; 
          const BlogPost = () => {
             const { id } = useParams(); 
             const post = blogPosts.find(post => post.id === id); 
             if (!post) { 
                return (
                 <div className="blog-not-found"> <Header /> 
                 <main className="container"> 
                    <h1>Post not found</h1>
                     <p>The requested blog post doesn't exist.</p> </main> <Footer /> </div> );
                      } return ( 
                      <div className="blog-post-page"> <Header /> <main> 
                        <article className="container"> 
                            <motion.div initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6 }} 
                             className="post-header" > 
                             <span className="post-category">
                                {post.category}</span>
                                 <h1>{post.title}</h1>
                                  <div className="post-meta"> 
                                    <span>{post.date}</span>
                                     <span>•</span>
                                      <span>{post.readTime}</span> </div> 
                                      </motion.div> 
                                      <motion.div
                                       initial={{ opacity: 0 }} 
                                       animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }} 
                                        className="post-content" 
                                        dangerouslySetInnerHTML={{ __html: post.content }} />
                                         </article> </main> <Footer /> </div> ); 
                                         };
                                          export default BlogPost;