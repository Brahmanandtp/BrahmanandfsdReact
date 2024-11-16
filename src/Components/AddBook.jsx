// src/components/AddBook.jsx  

import React, { useState } from 'react';  
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';  

const AddBook = () => {  
  const [title, setTitle] = useState('');  
  const [description, setDescription] = useState('');  
  const [year, setYear] = useState('');  
  const [authorId, setAuthorId] = useState('');  
  const [categoryId, setCategoryId] = useState('');  
  const [error, setError] = useState(null);  

  const navigate = useNavigate();  

  // Handle form submission  
  const handleSubmit = async (event) => {  
    event.preventDefault();  
    const newBook = { title, description, year, authorId, categoryId };  

    try {  
      await axios.post('https://localhost:7255/api/Books', newBook);  
      // Navigate to the home page or book details page after successful addition  
      navigate('/');  
    } catch (err) {  
      setError('Error adding book: ' + err.message);  
    }  
  };  

  return (  
    <div>  
      <h1>Add New Book</h1>  
      {error && <p style={{ color: 'red' }}>{error}</p>}  
      <form onSubmit={handleSubmit}>  
        <div>  
          <label>Title:</label>  
          <input  
            type="text"  
            value={title}  
            onChange={(e) => setTitle(e.target.value)}  
            required  
          />  
        </div>  
        <div>  
          <label>Description:</label>  
          <textarea  
            value={description}  
            onChange={(e) => setDescription(e.target.value)}  
            required  
          />  
        </div>  
        <div>  
          <label>Year:</label>  
          <input  
            type="number"  
            value={year}  
            onChange={(e) => setYear(e.target.value)}  
            required  
          />  
        </div>  
        <div>  
          <label>Author ID:</label>  
          <input  
            type="number"  
            value={authorId}  
            onChange={(e) => setAuthorId(e.target.value)}  
            required  
          />  
        </div>  
        <div>  
          <label>Category ID:</label>  
          <input  
            type="number"  
            value={categoryId}  
            onChange={(e) => setCategoryId(e.target.value)}  
            required  
          />  
        </div>  
        <button type="submit">Add Book</button>  
      </form>  
    </div>  
  );  
};  

export default AddBook;