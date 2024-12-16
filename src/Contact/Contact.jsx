// Contact.js
import React, { useEffect } from "react";
import './Contact.css'; // Import the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="contact-card" data-aos="fade-up">
      <div className="contact-header">
        <p className="contact-description" data-aos="fade-right">Do you have a<br/> question?</p>
        <img src="./right-up.png" alt="Arrow" className="arrow-icon" data-aos="fade-left" />
      </div>
      <p className="contact-us" >
        <span className="contact-title">Contact</span>
        <span className="contact-us-italic"> Us</span>
      </p>
    </div>
  );
};

export default Contact;
