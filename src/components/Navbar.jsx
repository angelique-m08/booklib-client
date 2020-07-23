import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import Burger from 'react-css-burger';
import './navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbarTitleApp"><Link to="/">BookLib</Link></h1>
        <Burger
          onClick={() => setActive(!active)}
          active={active}
          burger="slider"
          color="white"
          className="navbarBurger"
        />
        {
        active === true ?
          <div>
            <ul className="navbarMenu">
              <li><Link to="/books">Livres</Link></li>
              <li><Link to="/authors">Auteurs</Link></li>
              <li><Link to="/createbooks">Ajouter un livre</Link></li>
              <li><Link to="/createauthors">Ajouter un auteur</Link></li>
            </ul>
          </div>
          : ''
        }
    </nav>
  </>
  )
}

export default Navbar;