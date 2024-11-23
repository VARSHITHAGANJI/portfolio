import React from 'react';
import '../styles/TagsSidebar.css';

function TagsSidebar({ selectedTags, onSelectTag ,allTags}) {
  // const allTags = ['React', 'JavaScript', 'CSS', 'Python', 'Machine Learning'];

  return (
    <div className="tags-sidebar">
      <h4 className="sidebar-title">Tags</h4>
      <div className="tags-container">
        {allTags.map(tag => (
          <span
            key={tag}
            className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagsSidebar;
