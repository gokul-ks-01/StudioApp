import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} /> Menu
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recent-works">Recent Works</Link></li>
          <li><Link to="/packages">Packages</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
