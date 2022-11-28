import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import ManageProducts from './pages/ManageProducts/ManageProducts';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/add-products" element={
          <ProtectedRoute>
            <AddProducts />
          </ProtectedRoute>
        } />

        <Route path="/manage-products" element={
          <ProtectedRoute>
            <ManageProducts />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
