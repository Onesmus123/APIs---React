import React from 'react';
import './Footer.css'; // For styling Footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} User List App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
