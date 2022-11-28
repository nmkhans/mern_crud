import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';

function App() {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== "/login") && <Header />}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/add-products" element={
          <ProtectedRoute>
            <AddProducts />
          </ProtectedRoute>
        } />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
