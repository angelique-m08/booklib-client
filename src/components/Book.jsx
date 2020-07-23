import React from 'react';

const Book = ({ book }) => {
  return(
    <div>
      <img src={book.cover} alt={book.title} />
      <p className="bookTitle">{book.title}</p>
      <p className="bookResume">Résumé :<br></br>{book.resume}</p>
      <p>Les avis sur le livre :</p>
      <ul className="bookReview">
        <li>Avis 1</li>
        <li>Avis 2</li>
      </ul>
      <form>
        <label for="review">Laissez votre avis</label>
        <textarea id="review" name="review"></textarea>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default Book;