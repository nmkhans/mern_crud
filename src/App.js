import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-products" element={<ProtectedRoute>
          <AddProducts />
        </ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
