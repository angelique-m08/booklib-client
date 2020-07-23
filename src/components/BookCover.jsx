import React, { useState } from 'react';
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
      {bookClicked === true ? 
      <>
        <Book book={book} />
      </>
       : <li><Link to={`/books/${book.id}`} onClick={showBook} className="bookcoverCover"><img src={book.cover} alt={book.title}></img></Link></li>
      }
      <Router>
        <Switch>
          <Route path={`/books/${book.id}`} component={Book} />
        </Switch>
      </Router>
    </>
  )
}

export default BookCover;