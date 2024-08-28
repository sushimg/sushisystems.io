import React from 'react';
import './Navbar.css';

interface NavbarProps 
{
  logo: string;
  buttonHome: {
    text: string;
    onClick: () => void;
  };
  buttonGames: {
    text: string;
    onClick: () => void;
  };
  buttonContact: {
    text: string;
    onClick: () => void;
  };
  buttonAbout: {
    text: string;
    onClick: () => void;
  };
}

const Navbar: React.FC<NavbarProps> = ({logo, buttonHome, buttonGames, buttonContact, buttonAbout}) => 
{
  return (
    <nav className = "navbar">
        <img src = {logo} alt = "Logo" className = "logo"/>

        <div className="navbar-buttons">
          <button className = "button" onClick={buttonHome.onClick}>{buttonHome.text}</button>
          <button className = "button" onClick={buttonGames.onClick}>{buttonGames.text}</button>
          <button className = "button" onClick={buttonContact.onClick}>{buttonContact.text}</button>
          <button className = "button" onClick={buttonAbout.onClick}>{buttonAbout.text}</button>
        </div>
    </nav>
  );
};

export default Navbar;
