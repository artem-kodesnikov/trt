import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { RecipePage } from './components/RecipePage/RecipePage';


function App() {
  return (
    <Routes>
      <Route
        path='/'
        index
        element={<HomePage />}
      />
      <Route
        path='/recipe/:id'
        element={<RecipePage />}
      />
    </Routes>

  );
}

export default App;
