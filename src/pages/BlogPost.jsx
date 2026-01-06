import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/'
        );
        const data = await res.json();
        const article = data.items[id];

        setPost({
          title: article.title,
          content: article.content,
          date: new Date(article.pubDate).toDateString(),
          category: 'Tech',
          readTime: '5 min read',
        });
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!post) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <Header />

      <main className="blog-post-page">
        <article className="container">

          {/* Header animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="post-header"
          >
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Content fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
