import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BookCover from './BookCover';
import './book.css'

const BookList = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/books`)
      .then((res) => res.data)
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  return(
    <div className="booklistDiv">
      <ul className="booklistList">
        {allBooks.map((book) => <li className="booklistListLis"><BookCover book={book} /></li> )}
      </ul>
    </div>
  )
}

export default BookList;