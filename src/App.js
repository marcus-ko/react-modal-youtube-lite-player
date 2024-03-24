import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import Home from './components/home/Home';
import Homepage from './components/home/Home';
import './App.scss';
import './components/home/Nav.scss';
import Nav from './components/home/Nav';

const App = props => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export default App;
