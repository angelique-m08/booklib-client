import React, { useState } from 'react';
import Axios from 'axios';
import './bookCreate.css'

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [genre, setGenre] = useState('');
  const [cover, setCover] = useState('');

  const addBook = () => {
    Axios.post("http://localhost:8000/books", {title, resume, cover, genre} )
    .then((res) => alert('Livre enregistré'))
  };
  
  return (
    <div>
      <h1 className="bookCreateTitle">Ajouter un nouveau livre</h1>
      <form className="bookCreateForm"
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <label for="title">Titre</label>
        <input id="title" name="title" required onChange={(event) => setTitle(event.target.value)} />
        <label for="author">Auteur</label>
        <input id="author" name="author" />
        <label for="genre">Genre</label>
        <input id="genre" name="genre" onChange={(event) => setGenre(event.target.value)} />
        <label for="resume">Résumé</label>
        <textarea id="resume" name="resume" onChange={(event) => setResume(event.target.value)}></textarea>
        <label for="cover">Lien vers une image de couverture</label>
        <input id="cover" name="cover" onChange={(event) => setCover(event.target.value)}/>
        <button type="submit" className="bookCreateFormButton" onClick={addBook}>Ajouter</button>
      </form>
    </div>
  )
}

export default BookCreate;