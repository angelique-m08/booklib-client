import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Book from './Book';

const BookCover = ({ book }) => {
  const [bookClicked, setBookClicked] = useState(false);

  const showBook = () => {
    setBookClicked(!bookClicked)
  };

  return(
    <>
      {bookClicked === true ? <Book clicked={bookClicked} book={book} /> : <Link to={`books/${book.id}`} onClick={showBook}><img src={book.cover} alt={book.title}></img></Link> }
      <Router>
        <Switch>
          <Route path={`books/${book.id}`} component={Book} />
        </Switch>
      </Router>
    </>
  )
}

export default BookCover;