import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import ViewJob from './pages/ViewJob';
import EditJob from './pages/EditJob';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/view/:id" element={<ViewJob />} />
        <Route path="/edit/:id" element={<EditJob />} />
      </Routes>
    </Router>
  );
};

export default App;
