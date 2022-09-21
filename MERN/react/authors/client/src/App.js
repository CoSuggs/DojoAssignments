import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<Main />} path="/author/" />
        <Route element={<Detail />} path="/author/:id" />
        <Route element={<Update/>} path="/author/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

