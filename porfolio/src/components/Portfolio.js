// src/components/Portfolio.js
import React from 'react';
import Project from './Project';

const portfolioData = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    imageUrl: 'project1.jpg',
    projectUrl: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    imageUrl: 'project2.jpg',
    projectUrl: 'https://example.com/project2',
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects">
        {portfolioData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
