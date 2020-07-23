import React from 'react';
import './bookCreate.css'

const BookCreate = () => {
  return (
    <div>
      <h1 className="bookCreateTitle">Ajouter un nouveau livre</h1>
      <form className="bookCreateForm">
        <label for="title">Titre</label>
        <input id="title" name="title" required />
        <label for="author">Auteur</label>
        <input id="author" name="author" />
        <label for="resume">Résumé</label>
        <textarea id="resume" name="resume"></textarea>
        <label for="cover">Lien vers une image de couverture</label>
        <input id="cover" name="cover" />
        <button type="button" className="bookCreateFormButton">Ajouter</button>
      </form>
    </div>
  )
}

export default BookCreate;