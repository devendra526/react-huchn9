import React from 'react';
import './style.css';
import UseEffectExample from './UseEffectExample';
import ApiExample from './ApiExample';
import Home from './Route/Home';
import About from './Route/About';
import Contact from './Route/Contact';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
