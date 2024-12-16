import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="Header-container" data-aos="fade-down"> {/* AOS attribute */}
            <h1>
                <span>Next</span> <span>World</span>
            </h1>
        </div>
    );
}

export default Header;
