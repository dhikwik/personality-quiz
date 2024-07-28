import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcomepage';
import App from './App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>   
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/personality-test" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
 
