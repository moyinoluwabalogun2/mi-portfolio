import { useState, useEffect } from 'react';
 import { motion } from 'framer-motion'; 
 import { Link } from 'react-router-dom'; 
 import '../styles/components/Blog.css'; 
 
 const Blog = () => { 
   const [posts, setPosts] = useState([ 
      { id: 1, title: 'Getting Started with React Hooks', 
         excerpt: 'Learn how to use React Hooks to simplify your functional components.',
          date: new Date('2023-05-15').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), readTime: '5 min read', category: 'React' },
           { id: 2, title: 'CSS Grid vs Flexbox', excerpt: 'When to use Grid and when to use Flexbox for your layouts.', date: new Date('2023-04-28').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: '8 min read', category: 'CSS' },
             { 
               id: 3, title: 'Optimizing React Performance', 
               excerpt: 'Tips and tricks to make your React applications faster.',
                date: new Date('2023-03-10').toLocaleDateString('en-US',
                   { month: 'short', day: 'numeric', year: 'numeric' }), 
                   readTime: '10 min read', category: 'React' } 
                  ]);
                   const [loading, setLoading] = 
                   useState(false); 
                   
                   const [tickerNews, setTickerNews] = useState(''); 
                   
                   const [apiError, setApiError] = useState(null); 
                   /*Fetch tech news for ticker */
                   const fetchTechNews = async () => 
                     { try { const API_KEY = 'gvb0dzj1mbikwhb0pknywadknr5lfjfluoorfx2i';
                         /* Replace with your actual API key */
                          const response = await fetch( `https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/&api_key=${API_KEY}` );
                           if (!response.ok) { throw new Error('Failed to fetch tech news'); }
                            const data = await response.json();
                             if (data.items) {
                               const newsItems =
                                data.items.slice(0, 5).map(item => item.title).join(' • '); 
                                setTickerNews(newsItems); 
                              } } 
                              catch (error) { 
                                 console.error('Error fetching tech news:', error);
                                  setApiError(error.message);
                                   /*Fallback ticker content*/ 
                                   setTickerNews('Latest in tech: React 19 beta released • Next.js introduces new compiler • WebAssembly gains browser support');
                                  } };
                                   /* Simulate new blog posts loading*/ 
                                   const fetchNewPosts = async () => { 
                                    
                                    setLoading(true); try { 
                                       /* In a real app, you would fetch from your blog API*/
                                        const mockNewPosts = [ {
                                           id: Math.floor(Math.random() * 1000), 
                                           title: `Tech Update: ${new Date().toLocaleTimeString()}`, 
                                           excerpt: 'Fresh insights on the latest web technologies and frameworks.',
                                            date: new Date().toLocaleDateString('en-US',
                                              { month: 'short', day: 'numeric', year: 'numeric' }), 
                                              readTime: `${Math.floor(Math.random() * 10) + 5} min read`,
                                               category: ['React', 'CSS', 'JavaScript', 'Web3', 'AI'][Math.floor(Math.random() * 5)] }, 
                                               { id: Math.floor(Math.random() * 1000),
                                                 title: `Dev Journal: ${['State Management', 'Performance', 'Security', 'Accessibility'][Math.floor(Math.random() * 4)]}`,
                                                  excerpt: 'Deep dive into modern web development challenges and solutions.',
                                                   date: new Date().toLocaleDateString('en-US', 
                                                      { month: 'short', day: 'numeric', year: 'numeric' }), 
                                                      readTime: `${Math.floor(Math.random() * 10) + 5} min read`,
                                                       category: ['React', 'CSS', 'JavaScript'][Math.floor(Math.random() * 3)] } ];
                                                        /* Add slight delay for realistic loading*/ 
                                                        await new Promise(
                                                         resolve => setTimeout(resolve, 1500));
                                                          setPosts(prev =>
                                                             [...mockNewPosts, ...prev.slice(0, 2)]); }
                                                              catch (error) { 
                                                               console.error('Error fetching new posts:', error); 
                                                            } 
                                                            finally { setLoading(false); } };
                                                             useEffect(() => { /* Initial data fetch*/ fetchTechNews(); fetchNewPosts();
                                                                /* Set up intervals for auto-refresh*/ 
                                                                const newsInterval = 
                                                                setInterval(fetchTechNews, 3600000);
                                                                 /* Refresh news every hour*/
                                                                  const postsInterval = setInterval(
                                                                     fetchNewPosts, 30000);
                                                                      /* Refresh posts every 30 seconds*/ 
                                                                      return () => {
                                                                         clearInterval(newsInterval);
                                                                          clearInterval(postsInterval); };
                                                                         }, []); return (
                                                                            <section id="blog" 
                                                                            
                                                                            className="blog"> 
                                                                            <div className="blog-container">
                                                                               <motion.div initial={{ opacity: 0, y: 50 }} 
                                                                               whileInView={{ opacity: 1, y: 0 }} 
                                                                               viewport={{ once: true }} 
                                                                               transition={{ duration: 0.6 }} 
                                                                               className="section-header" > 
                                                                               <h2 className="section-title">Latest Tech Articles</h2>
                                                                                <p>Cutting-edge insights on web development and design</p> 
                                                                                {apiError && ( <div className="api-error"> 
                                                                                 <small>News feed: {apiError} (showing demo content)</small> </div>
                                                                                  )} </motion.div>
                                                                                   <div className="blog-grid">
                                                                                     {loading && (
                                                                                        <motion.article className="blog-card loading"
                                                                                         initial={{ opacity: 0 }} 
                                                                                         animate={{ opacity: 1 }} 
                                                                                         transition={{ duration: 0.3 }} >
                                                                                           <div className="loading-content"></div> 
                                                                                           </motion.article> )} 
                                                                                           {posts.map((post, index) => ( 
                                                                                             <motion.article key={`${post.id}-${index}`} 
                                                                                             initial={{ opacity: 0, y: 50 }}
                                                                                              whileInView={{ opacity: 1, y: 0 }} 
                                                                                              viewport={{ once: true }}
                                                                                               transition={{ duration: 0.5, delay: index * 0.1 }} 
                                                                                               className="blog-card" >
                                                                                                 <div className="blog-meta">
                                                                                                    <span className="category">{post.category}</span> 
                                                                                                    <span className="date">{post.date}</span> </div>
                                                                                                     <h3> <Link to={`/blog/${post.id}`}>{post.title}</Link> </h3>
                                                                                                      <p>{post.excerpt}</p> 
                                                                                                      <div className="blog-footer"> 
                                                                                                         <span>{post.readTime}</span>
                                                                                                          <Link to={`/blog/${post.id}`} 
                                                                                                          className="read-more"> Read More → </Link> 
                                                                                                          </div> </motion.article> ))} </div> 
                                                                                                          <motion.div initial={{ opacity: 0 }}
                                                                                                           whileInView={{ opacity: 1 }} 
                                                                                                           viewport={{ once: true }} 
                                                                                                           transition={{ duration: 0.6, delay: 0.3 }} 
                                                                                                           className="blog-cta" > 
                                                                                                           <Link to="/blog" 
                                                                                                           className="btn"> View All Articles </Link>
                                                                                                            </motion.div> </div> 
                                                                                                            <div className="news-ticker"> 
                                                                                                               <div className="ticker-content"> 
                                                                                                                  {tickerNews || 'Loading latest tech news...'} </div> </div> </section> ); 
                                                                                                                  }; 
                                                                                                                  export default Blog;