import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jokes API</h1>
      <Routes>
        <Route element={<Main />} path="/homeToDo/" />
        <Route element={<Detail />} path="/homeToDo/:id" />
        <Route element={<Update/>} path="/homeToDO/:id/edit" />
      </Routes>
    </div>
  );
}
export default App;

