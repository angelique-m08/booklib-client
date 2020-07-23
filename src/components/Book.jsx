import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Book = ({ book }) => {
  const [allReviews, setAllReviews] = useState([]);
  const [Review, setReview] = useState("");

  useEffect(() => {
    showBook()
  }, []);

  const showBook = () => {
    Axios.get(`http://localhost:8000/reviews/${book.id}`)
    .then((res) => res.data)
    .then((data) => {
      setAllReviews(data, Review);
    });
  }

  const deleteBook = () => {
    Axios.delete(`http://localhost:8000/books/${book.id}`)
    .then(res => alert("Livre supprimé"))
  }

  const addReview = () => {
    Axios.post(`http://localhost:8000/reviews/${book.id}`, { book_id: book.id, Review } )
    .then((res) => alert("Avis enregistré"))
    .then((res) => showBook())
  }

  return(
    <div className="bookDiv">
      <div className="bookLeftDiv">
        <img src={book.cover} alt={book.title} className="bookCover" />
        <button type="submit" onClick={deleteBook}>Supprimer le livre</button>
      </div>
      <div className="bookDescriptionDiv">
        <h1 className="bookTitle">{book.title}</h1>
        <p className="bookResume">Résumé :<br></br>{book.resume}</p>
        <p>Les avis sur le livre :</p>
        <ul className="bookReview">
          {allReviews.map((reviews) => <li>{reviews.review}</li> )}
        </ul>
        <form className="bookForm"
          onSubmit={(event) => {
            event.preventDefault()}}>
          <label for="review">Laissez votre avis</label>
          <textarea id="review" name="review" required onChange={(event) => setReview(event.target.value)}></textarea>
          <button type="submit" onClick={addReview}>Ajouter</button>
        </form>
      </div>
    </div>
  )
}

export default Book;