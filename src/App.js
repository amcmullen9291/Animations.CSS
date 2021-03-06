import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import TestArea from './Components/TestArea';
import TestArea2 from './Components/TestArea2';
import TestArea3 from './Components/TestArea3';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/testArea" element={<TestArea />} />
          <Route path="/testArea2" element={<TestArea2 />} />
          <Route path="/testArea3" element={<TestArea3 />} />
        </Routes>
    </Router>
  );
}

export default App;