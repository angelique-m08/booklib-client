import React from 'react';
import {
  Link
} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbarMenu">
      <li className="navbarTitleApp"><Link to="/">BookLib</Link></li>
      <li><Link to="/books">Livres</Link></li>
      <li><Link to="/authors">Auteurs</Link></li>
      <li><Link to="/createbooks">Ajouter un livre</Link></li>
      <li><Link to="/createauthors">Ajouter un auteur</Link></li>
      <li><Link to="/search">Rechercher</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar;