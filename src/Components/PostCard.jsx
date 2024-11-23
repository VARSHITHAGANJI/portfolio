import React from 'react';
import '../styles/PostCard.css';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-meta">
        {post.date} • {post.readTime} min read
      </p>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
