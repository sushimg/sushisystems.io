import React from 'react';
import './Navbar.css';

interface NavbarProps 
{
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({logo}) => 
{
  return (
    <nav className = "navbar">
        <img src = {logo} alt = "Logo" className = "logo"/>
    </nav>
  );
};

export default Navbar;
