// Section2.js
import React, { useEffect } from "react";
import './Section2.css'; // Ensure this CSS file is imported
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Section2 = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="card-1" data-aos="fade-up"> {/* Add AOS attribute here */}
      <p className="description">
        I'm Amen Allah Bejaoui, 21 years old. I'm an IT student filled with passion. I have knowledge of several programming languages in web and mobile development, and a little knowledge in AI, such as React, Angular, Node.js, Express, Laravel, Flask, .NET, and Android.
      </p>
    </div>
  );
};

export default Section2;
