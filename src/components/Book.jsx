import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Book = ({ book }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [Review, setReview] = useState("");
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    showReview()
    showAuthor()
  }, []);

  const showReview = () => {
    Axios.get(`http://localhost:8000/reviews/${book.id}`)
    .then((res) => res.data)
    .then((data) => {
      setAllReviews(data, Review);
    });
  }

  const showAuthor = () => {
    Axios.get(`http://localhost:8000/books-authors/${book.id}/authors`)
    .then((res) => res.data)
    .then((data) => {
      setAllAuthors(data);
    });
  }

  const deleteBook = () => {
    Axios.delete(`http://localhost:8000/books/${book.id}`)
    .then(res => alert("Livre supprimé"))
  }

  const addReview = () => {
    Axios.post(`http://localhost:8000/reviews/${book.id}`, { book_id: book.id, Review } )
    .then((res) => alert("Avis enregistré"))
    .then((res) => showReview())
  }

  return(
    <div className="bookDiv">
      <div className="bookLeftDiv">
        <img src={book.cover} alt={book.title} className="bookCover" />
        <button type="submit" onClick={deleteBook} className="bookButton">Supprimer le livre</button>
      </div>
      <div className="bookDescriptionDiv">
        <h1 className="bookTitle">{book.title}</h1>
        <h2 className="bookAuthor"><span className="bookUnderline">Auteur(s): </span>{allAuthors.map((author) => <p>{author.firstname} {author.lastname}</p>)}</h2>
        <p className="bookResume"><span className="authorUnderline">Résumé :</span><br></br>{book.resume}</p>
        <p className="authorUnderline">Les avis sur le livre :</p>
        <ul className="bookReview">
          {allReviews.map((reviews) => <li className="bookBookList">{reviews.review}</li> )}
        </ul>
        <form className="bookForm"
          onSubmit={(event) => {
            event.preventDefault()}}>
          <label for="review" className="authorUnderline">Laissez votre avis</label>
          <textarea id="review" name="review" className="bookTextarea" required onChange={(event) => setReview(event.target.value)}></textarea>
          <button type="submit" onClick={addReview} className="bookButton">Ajouter</button>
        </form>
      </div>
    </div>
  )
}

export default Book;