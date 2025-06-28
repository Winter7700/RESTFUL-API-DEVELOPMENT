import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditPage from './pages/AddEditPage';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>📚 Library Management System</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddEditPage />} />
          <Route path="/edit/:id" element={<AddEditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
