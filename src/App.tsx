import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './screens/cadastro';
import Login from './screens/login';
import Home from './screens/home';
import Header from './components/header/Header';
import './App.css'

const App: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default App;
