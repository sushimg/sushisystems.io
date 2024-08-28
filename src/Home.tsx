import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home: React.FC = () => 
{
  const handleButtonClick = (buttonName: string) => 
  {
    alert(`Button ${buttonName} clicked!`);
  };

  return (
    <div className="home">
      <Navbar logo = "/SushiGames.png"
      buttonHome = {{ text: 'Home', onClick: () => handleButtonClick('Home') }}
      buttonGames = {{ text: 'Games', onClick: () => handleButtonClick('Games') }}
      buttonContact = {{ text: 'Contact Us', onClick: () => handleButtonClick('Contact Us') }}
      buttonAbout = {{ text: 'About Us', onClick: () => handleButtonClick('About Us') }}/>

      <div className="imageContainer">
        <img className="mobileRTS" src="/mobileRTS.jpg" alt="Mobile RTS" />
          <header className="header">
            <h1>Play mobileRTS NOW.</h1>

            <button className="buttonDownload">Download for Android
              <img className = "androidLogo" src = "\AndroidLogo.png" alt = "img"></img>
            </button>
          </header>
      </div>

    </div>
  );
}

export default Home;
