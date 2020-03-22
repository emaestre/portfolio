import React from 'react';
import logo from '../../assets/logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from '../about';
import Home from '../home';
import Projects from '../projects';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/about" component={About} />

          <div className="navigation">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="navigation-sub">
              <Link to="/" className="item">Home</Link>
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
