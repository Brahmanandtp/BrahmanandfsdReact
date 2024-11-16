// src/components/UpdateBook.jsx  

import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { useNavigate, useParams } from 'react-router-dom';  

const UpdateBook = () => {  
  const [title, setTitle] = useState('');  
  const [description, setDescription] = useState('');  
  const [year, setYear] = useState('');  
  const [authorId, setAuthorId] = useState('');  
  const [categoryId, setCategoryId] = useState('');  
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(true);  

  const navigate = useNavigate();  
  const { id } = useParams();  

  // Fetch the book details to update  
  useEffect(() => {  
    const fetchBook = async () => {  
      try {  
        const response = await axios.get(`https://localhost:7255/api/Books/${id}`);  
        const book = response.data;  
        setTitle(book.title);  
        setDescription(book.description);  
        setYear(book.year);  
        setAuthorId(book.authorId);  
        setCategoryId(book.categoryId);  
      } catch (err) {  
        setError('Error fetching book data: ' + err.message);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchBook();  
  }, [id]);  

  // Handle the form submission  
  const handleSubmit = async (event) => {  
    event.preventDefault();  
    const updatedBook = { title, description, year, authorId, categoryId };  

    try {  
      await axios.put(`https://localhost:7255/api/Books/${id}`, updatedBook);  
      // Navigate back to book details or home after successful update  
      navigate(`/book/${id}`);  
    } catch (err) {  
      setError('Error updating book: ' + err.message);  
    }  
  };  

  if (loading) {  
    return <div>Loading...</div>;  
  }  

  return (  
    <div>  
      <h1>Update Book</h1>  
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
        <button type="submit">Update Book</button>  
      </form>  
    </div>  
  );  
};  

export default UpdateBook;