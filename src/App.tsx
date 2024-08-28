import React from 'react';
import Navbar from './Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar logo = "/SushiGames.png"/>

      <header className="App-header">
        <h1>Welcome to My React TypeScript App</h1>
        <p>
          This is a simple starter template for your React TypeScript project.
        </p>
        <button className="primary-button">Click Me</button>
      </header>
    </div>
  );
}

export default App;
