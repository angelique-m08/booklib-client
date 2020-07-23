import React, { useState } from 'react';
import Axios from 'axios';

const AuthorCreate = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [biography, setBiography] = useState('');
  const [picture, setPicture] = useState('');

  const addAuthor = () => {
    Axios.post("http://localhost:8000/authors", { firstname, lastname, biography, picture } )
    .then((res) => alert('Auteur enregistré'))
  };
  
  return (
    <div className="bookCreateDiv">
      <h1 className="bookCreateTitle">Ajouter un auteur</h1>
      <form className="bookCreateForm"
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <label for="title">Prénom</label>
        <input id="title" name="title" required onChange={(event) => setFirstname(event.target.value)} />
        <label for="author">Nom</label>
        <input id="author" name="author" onChange={(event) => setLastname(event.target.value)} />
        <label for="resume">Biographie</label>
        <textarea id="resume" name="resume" onChange={(event) => setBiography(event.target.value)}></textarea>
        <label for="cover">Lien vers une photo de l'auteur</label>
        <input id="cover" name="cover" onChange={(event) => setPicture(event.target.value)}/>
        <button type="submit" className="bookCreateFormButton" onClick={addAuthor}>Ajouter</button>
      </form>
    </div>
  )
}

export default AuthorCreate;