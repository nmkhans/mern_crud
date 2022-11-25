import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import AddProducts from './pages/AddProducts/AddProducts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-products" element={<AddProducts />} />
      </Routes>
    </>
  );
}

export default App;
