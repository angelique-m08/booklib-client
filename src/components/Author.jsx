import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Author = ({ author }) => {
  const [allAuthorBooks, setAllAuthorBooks] = useState([]);

  useEffect(() => {
    showAuthorBook()
  }, []);

  const showAuthorBook = () => {
    Axios.get(`http://localhost:8000/books-authors/${author.id}/books`)
    .then((res) => res.data)
    .then((data) => {
      setAllAuthorBooks(data);
    });
  }

  const deleteAuthor = () => {
    Axios.delete(`http://localhost:8000/authors/${author.id}`)
    .then(res => alert("Auteur supprimé"))
  }

  return(
    <div className="authorDiv">
      <div className="authorLeftDiv">
        <img src={author.picture} alt={author.firstname} className="authorCover" />
        <button type="submit" onClick={deleteAuthor} className="authorButton">Supprimer l'auteur</button>
      </div>
      <div className="authorDescriptionDiv">
        <h1 className="authorTitle">{author.firstname} {author.lastname}</h1>
        <p className="authorResume"><span className="authorUnderline">Biographie :</span><br></br>{author.biography}</p>
        <p className="authorUnderline">Livres de l'auteur :</p>
        <ul>
          {allAuthorBooks.map((book) => <li className="authorBookList">{book.title}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Author;