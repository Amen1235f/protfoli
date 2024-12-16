import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "E-Learning Platform",
      description: "An e-learning platform to educate little kids on the roadmap of web development and enhance their skills with React.js.",
      images: ["/cap1.png", "/image2.jpg", "/image3.jpg"], // Array of image URLs
      link: "https://github.com/Amen1235f/elearning", // GitHub link
    },
    {
      title: "Quiz Preparation Tool",
      description: "A tool for new developers to test their knowledge on programming languages through quizzes and NLP to predict answer correctness.",
      images: ["/quiz.jpg", "/image2.jpg", "/image3.jpg"],
      link: "https://github.com/Amen1235f/quizPreparation", // Replace with actual link when available
    }
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(Array(projects.length).fill(0));

  const handleNextImage = (index) => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] + 1) % projects[index].images.length;
      return newIndices;
    });
  };

  const handlePreviousImage = (index) => {
    setCurrentImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = (newIndices[index] - 1 + projects[index].images.length) % projects[index].images.length;
      return newIndices;
    });
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index} data-aos="zoom-in">
          <div className="slideshow-container">
            <div className="image-wrapper">
              <img
                src={project.images[currentImageIndices[index]]} // Display current image for each project
                alt={project.title}
                className="project-image slide-fade" // Add slide-fade class for animation
              />
            </div>
            <button className="prev" onClick={() => handlePreviousImage(index)}>❮</button>
            <button className="next" onClick={() => handleNextImage(index)}>❯</button>
          </div>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
