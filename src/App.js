import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Page1 from './Components/Page1';

// add email form for appointments?
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/breeded-shelter/main" element={<Menu />} />
          <Route path="/breeded-shelter/Staff" element={<Page1 />} />
        </Routes>
    </Router>
  );
}

export default App;