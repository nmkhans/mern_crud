import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import RouteList from './components/RouteList/RouteList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {RouteList.map(route => <Route
          path={route.path}
          element={<route.element />}
        />)}
      </Routes>
    </>
  );
}

export default App;
