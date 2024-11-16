// src/App.js  

import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './Components/Home'; // Ensure this path is correct  
import BookDetails from './Components/BookDetails'; // This should also be correct  
import AddBook from './Components/AddBook'; // This should also be correct  
import UpdateBook from './Components/UpdateBook'; // This should also be correct  

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/book/:id" element={<BookDetails />} />  
          <Route path="/add-book" element={<AddBook />} />  
          <Route path="/update-book/:id" element={<UpdateBook />} />  
        </Routes>  
      </div>  
    </Router>  
  );  
};  

export default App;