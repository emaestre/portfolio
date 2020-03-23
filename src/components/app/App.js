import React from 'react';
import logo from '../../assets/logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouter from './App.router';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
          <div className="navigation">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="navigation-sub">
              <Link to="/" className="item">Home</Link>
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
            </div>
          </div>
          <AppRouter/>
      </div>
    </Router>
  );
}

export default App;
