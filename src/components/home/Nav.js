import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import Home from './components/home/Home';
import Homepage from '../home/Home';
import './Nav.scss';

const Nav = props => {
  return (
    <div>
      <div className="nav-wrapper">
        <div className="left-nav">
          <div className="nav-logo">
            <h2>progvibes</h2>
          </div>
        </div>
        <div className="right-nav">
          <nav className="navBar">

          </nav>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      {/* <Homepage /> */}
    </div>
  );
};

export default Nav;