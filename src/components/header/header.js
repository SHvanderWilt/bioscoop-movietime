import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${isOpen ? 'sticky' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recensies">Recensies</a></li>
          <li><a href="/vestigingen">Vestigingen</a></li>
          <li><a href="/films">Films</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
