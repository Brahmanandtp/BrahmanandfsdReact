// src/components/BookDetails.jsx  

import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { useParams } from 'react-router-dom';  

function BookDetails() {  
  const { id } = useParams(); // Get the book ID from the URL parameters  
  const [book, setBook] = useState(null); // State to hold the book details  
  const [loading, setLoading] = useState(true); // Loading state  
  const [error, setError] = useState(null); // Error state  

  // Fetch the book details when the component mounts  
  useEffect(() => {  
    const fetchBookDetails = async () => {  
      try {  
        const response = await axios.get(`https://localhost:7255/api/Books/${id}`);  
        setBook(response.data); // Set the book details  
      } catch (err) {  
        setError(err); // Set error if the fetch fails  
      } finally {  
        setLoading(false); // End loading state  
      }  
    };  

    fetchBookDetails();  
  }, [id]); // Re-run effect if the ID changes  

  // Conditional rendering based on loading and error states  
  if (loading) {  
    return <div>Loading...</div>;  
  }  

  if (error) {  
    return <div>Error loading book details: {error.message}</div>;  
  }  

  return (  
    <div>  
      <h1>{book.title}</h1>  
      <h3>Description:</h3>  
      <p>{book.description}</p>  
      <p><strong>Year:</strong> {book.year}</p>  
      <p><strong>Author ID:</strong> {book.authorId}</p>  
      <p><strong>Category ID:</strong> {book.categoryId}</p>  
    </div>  
  );  
}  

export default BookDetails;