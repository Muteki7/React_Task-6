// src/components/Project.js
import React from 'react';
import './Project.css'; // Import the CSS file

const Project = ({ title, description, projectUrl }) => {
  const imageUrl =
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;
