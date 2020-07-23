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
       : <Link to={`authors/${author.id}`} onClick={showBook} className="authorcoverCover"><img src={author.picture} alt={author.firstname} className="authorPicture"></img></Link> }
      <Router>
        <Switch>
          <Route path={`authors/${author.id}`} component={Author} />
        </Switch>
      </Router>
    </>
  )
}

export default AuthorPicture;