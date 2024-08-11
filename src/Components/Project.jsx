// src/components/Project.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Projects.css';



const Project = ({id, title, description, tags, links, timeline, githubLink, detailPage ,icon}) => {
  return (
    
 
        <>
        <div className="project-meta">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        <h3 className="vertical-timeline-element-title">{title}</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">description</h4> */}
          <p>{description}</p>
          {/* <p>Integrated workflow of machine learning pipelines in CT scan machines for lung tumor detection</p> */}
        
          
        </div>
        <div className="project-links">
          {links.map((link, index) => (
              <div key={index} className="link-button ">
              <a className="link-button bg-light" href={link.url} >{link.name}</a>
              </div>
            ))}
        </div>
        </>
 

  );
};

export default Project;
