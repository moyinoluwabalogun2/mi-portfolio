import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/components/Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tickerNews, setTickerNews] = useState('');
  const [apiError, setApiError] = useState(null);

  const fetchTechNews = async () => {
    try {
      const res = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/'
      );
      const data = await res.json();

      if (data.items) {
        setTickerNews(
          data.items.slice(0, 5).map(i => i.title).join(' • ')
        );
      }
    } catch (err) {
      setApiError('Failed to load news');
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/'
      );
      const data = await res.json();

      const formatted = data.items.map((item, index) => ({
        id: index.toString(),
        title: item.title,
        excerpt: item.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...',
        date: new Date(item.pubDate).toDateString(),
        category: 'Tech',
        readTime: '5 min read',
      }));

      setPosts(formatted);
    } catch (err) {
      setApiError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechNews();
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="blog">
      <div className="blog-container">

        {/* Section header animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Latest Tech Articles</h2>
          <p>Cutting-edge insights on web development</p>
        </motion.div>
{apiError && (
  <p className="api-error">
    {apiError}
    </p>
)}
        {/* Blog grid */}
        <div className="blog-grid">
          {loading && (
            <motion.article
              className="blog-card loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          )}

          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="blog-meta">
                <span className="category">{post.category}</span>
                <span className="date">{post.date}</span>
              </div>

              <h3>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>

              <p>{post.excerpt}</p>

              <div className="blog-footer">
                <span>{post.readTime}</span>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* News ticker (animated via CSS) */}
        <div className="news-ticker">
          <div className="ticker-content">
            {tickerNews || 'Loading latest tech news...'}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
