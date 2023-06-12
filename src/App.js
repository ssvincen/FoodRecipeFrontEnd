import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Header/Navbar';
import RecipePage from './views/Recipe/RecipePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/recipe" replace />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/home" element={<RecipePage />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
