import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton , Button, Form } from 'react-bootstrap';

import PostCard from '../Components/PostCard';
import TagsSidebar from '../Components/TagsSidebar';
import data from '../data/technicalPosts.json';
import '../styles/AllBlogs.css';

const allTags = Array.from(
  new Set(data.posts.flatMap((post) => post.tags))
);
function TechnicalBlogs() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [sortOption, setSortOption] = useState('Newest');
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredPosts = selectedTags.length
    ? data.posts.filter((post) =>
        post.tags.some((tag) => selectedTags.includes(tag))
      )
    : data.posts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === 'Newest') return new Date(b.date) - new Date(a.date);
    if (sortOption === 'Oldest') return new Date(a.date) - new Date(b.date);
    return 0;
  });

  const handleTagSelect = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  const handleSortSelect = (option) => {
    setSortOption(option);
    // setIsDropdownOpen(false);
  };

  return (
    <div className="all-blogs-page">
      <div className="blogs-main">
        <div className="blogs-header">
          <h2>Technical Blog</h2>
          <div className="sort-container">
            <DropdownButton
            id="dropdown-basic-button"
            title="Sort by"
            className="sort-dropdown"
          >
            <Dropdown.Item onClick={() => handleSortSelect('Newest')}>Most Recent</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortSelect('Oldest')}>Oldest</Dropdown.Item>
          </DropdownButton>
          </div>
        </div>
        <div className="blogs-list">
          {sortedPosts.slice(0, visiblePosts).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {visiblePosts < sortedPosts.length && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Read More
          </button>
        )}
      </div>
      <TagsSidebar selectedTags={selectedTags} onSelectTag={handleTagSelect} allTags={allTags} />
    </div>
  );
}

export default TechnicalBlogs;

