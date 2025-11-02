import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Orders />} />
          <Route path="/ecommerce" element={<Dashboard />} />
          <Route path="/courses" element={<Dashboard />} />
          <Route path="/profile/*" element={<Dashboard />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/corporate" element={<Dashboard />} />
          <Route path="/blog" element={<Dashboard />} />
          <Route path="/social" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
