import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import './ProjectsSection.css'; 

const ProjectsSection = () => {
  const navigate = useNavigate(); // Use the navigate function from react-router-dom

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const handleReferencesClick = () => {
    navigate('/project'); // Navigate to the /project route
  };

  return (
    <div className="projects-section">
      <div className="projects-card" data-aos="fade-up" data-aos-duration="1000">
        <div style={{width:'1000px;'}}>
      <a
  href="/amen.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="projects-card-button connect-link"
  data-aos="zoom-in"
  data-aos-duration="1000"
>
  View Resume
</a>
</div>

        <button className="projects-card-button" data-aos="zoom-in" data-aos-duration="1200" onClick={handleReferencesClick}>
          References
        </button>

        <div className="connect-links">
          
          <div className="link-card" data-aos="slide-in-left" data-aos-duration="1000" data-aos-delay="400">
            <a href="https://www.linkedin.com/in/amen-bejaoui-619ba9336/" target="_blank" rel="noopener noreferrer" className="connect-link">LinkedIn</a>
          </div>
          <div className="link-card" data-aos="slide-in-left" data-aos-duration="1000" data-aos-delay="500">
            <a href="https://github.com/Amen1235f" target="_blank" rel="noopener noreferrer" className="connect-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
