import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Universities from './Universities/Universities';
import Home from './Home/Home';
import PostalLookup from './Postal/PostalLookup';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/carlos_colina_launchpad-react-code-challenge" element={<Home />} />
      <Route path="/carlos_colina_launchpad-react-code-challenge/universities" element={<Universities />} />
      <Route path="/carlos_colina_launchpad-react-code-challenge/postal-lookup" element={<PostalLookup />} />
    </Routes>
  </Router>
  );
};

export default App;