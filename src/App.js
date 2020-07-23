import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import AuthorCreate from './components/AuthorCreate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BookList} />
          <Route path="/createbooks" component={BookCreate} />
          <Route path="/createauthors" component={AuthorCreate} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
