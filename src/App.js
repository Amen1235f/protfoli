import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import Header from './Header/Header';
import GalaxyCircle from './GalaxyCircle/GalaxyCircle';
import Section1 from './Section1/Section1';
import './App.css';
import RightSection from './RightSection/RightSection';
import Section2 from './Section2/Section2';
import Contact from './Contact/Contact';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import Projects from './Projects/Projects';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <Router>
      <div>
        
        
        <Routes>
          {/* Main page that displays ProjectsSection */}
          <Route path="/" element={
            <>
            <Header />
            <GalaxyCircle />
              <Section1 />
              <RightSection />
              <Section2 />
              <Contact />
              <ProjectsSection /> {/* This will be displayed on the main page */}
            </>
          } />
          {/* Separate route for the Projects page */}
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
