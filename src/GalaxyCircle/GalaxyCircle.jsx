import React, { useEffect, useState } from 'react';
import './GalaxyCircle.css';

const GalaxyCircle = () => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCentered(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='card' data-aos="zoom-in"> {/* AOS attribute */}
      <div className={`card-container ${isCentered ? 'center' : 'offscreen'}`}>
        <div className="galaxy-circle-container">
          <div className="galaxy-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyCircle;
