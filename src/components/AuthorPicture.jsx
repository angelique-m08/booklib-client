import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Author from './Author';

const AuthorPicture = ({ author }) => {
  const [authorClicked, setAuthorClicked] = useState(false);

  const showBook = () => {
    setAuthorClicked(!authorClicked)
  };

  return(
    <>
      {authorClicked === true ? 
        <Author author={author} />
       : <li><Link to={`/authors/${author.id}`} onClick={showBook} className="authorcoverCover"><img src={author.picture} alt={author.firstname} className="authorPicture"></img></Link></li> }
      <Router>
        <Switch>
          <Route path={`/authors/${author.id}`} component={Author} />
        </Switch>
      </Router>
    </>
  )
}

export default AuthorPicture;