// src/components/Home.jsx  

import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

const Home = () => {  
  const [books, setBooks] = useState([]);  
  const [categories, setCategories] = useState([]);  
  const [error, setError] = useState(null);  

  // Function to fetch books  
  const fetchBooks = async () => {  
    try {  
      const response = await axios.get('https://localhost:7255/api/Books');  
      setBooks(response.data); // Assuming response.data is an array of books  
    } catch (err) {  
      setError('Error fetching books: ' + err.message);  
    }  
  };  

  // Function to fetch categories  
  const fetchCategories = async () => {  
    try {  
      const response = await axios.get('https://localhost:7255/api/Category');  
      setCategories(response.data); // Assuming response.data is an array of categories  
    } catch (err) {  
      setError('Error fetching categories: ' + err.message);  
    }  
  };  

  useEffect(() => {  
    fetchBooks();  
    fetchCategories();  
  }, []);  

  return (  
    <div>  
      <h1>Book Library</h1>  
      <div>  
        <h2>Books</h2>  
        <button onClick={fetchBooks}>Refresh Books</button>  
        {error && <p>{error}</p>}  
        <ul>  
          {books.map((book) => (  
            <li key={book.id}>  
              {book.title}   
              <Link to={`/book/${book.id}`}> View Details</Link>  
            </li>  
          ))}  
        </ul>  
        <Link to="/add-book">  
          <button>Add New Book</button>  
        </Link>  
      </div>  
      <div>  
        <h2>Categories</h2>  
        <button onClick={fetchCategories}>Refresh Categories</button>  
        {error && <p>{error}</p>}  
        <ul>  
          {categories.map((category) => (  
            <li key={category.id}>  
              {category.name} - {category.description}  
            </li>  
          ))}  
        </ul>  
      </div>  
    </div>  
  );  
};  

export default Home;