import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AuthorPicture from './AuthorPicture';
import './author.css'

const AuthorList = () => {
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/authors`)
      .then((res) => res.data)
      .then((data) => {
        setAllAuthors(data);
      });
  }, []);

  return(
    <div className="authorlistDiv">
      <ul className="authorlistList">
        {allAuthors.map((author) => <li><AuthorPicture author={author} /></li> )}
      </ul>
    </div>
  )
}

export default AuthorList;