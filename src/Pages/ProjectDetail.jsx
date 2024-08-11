// src/pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projects'; // Import your project data

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(proj => proj.id === id);
    console.log(id)
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProjectDetail;
