import React from 'react';

const Book = ({ book }) => {
  return(
    <div>
      <img src={book.cover} alt={book.title} />
      <p className="bookTitle">{book.title}</p>
      <p className="bookResume">{book.resume}</p>
      <ul className="bookReview">
        <p>Avis</p>
        <li>Avis 1</li>
        <li>Avis 2</li>
      </ul>
      <form>
        <label for="review">Laissez un avis</label>
        <textarea id="review" name="review"></textarea>
        <button type="button">Ajouter</button>
      </form>
    </div>
  )
}

export default Book;