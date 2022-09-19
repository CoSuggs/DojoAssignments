import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './views/SearchBar';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return(
    <div style={{ textAlign: "center" }} >
      <SearchBar />
      <Routes>
        <Route element={<People />} path="/people/:id" />
        <Route element={<Planet />} path="/planet/:id" />
      </Routes>
    </div>
  );
}


export default App;
