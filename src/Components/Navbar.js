import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = () => {
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav flex flex-wrap items-center justify-between p-4 bg-blue-500">
      <Link to="/" className="title text-white text-2xl font-bold">
        Pokescent
      </Link>
      <input
        type="checkbox"
        id="navbar-toggle"
        className="hidden"
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label
        htmlFor="navbar-toggle"
        className="toggle-label cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
      <ul
        className={`nav-links flex flex-col md:flex-row md:ml-auto md:space-x-4 md:items-center ${isMenuOpen ? '' : 'hidden'
          }`}
      >
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Pokedex">Pokedex</CustomLink>
        <CustomLink to="/Abilities">Abilities</CustomLink>
        <CustomLink to="/Items">Items</CustomLink>
        <CustomLink to="/Types">Types</CustomLink>
        <CustomLink to="/Search">Search</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link
        to={to}
        className="side text-white hover:text-gray-300 font-medium"
      >
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
