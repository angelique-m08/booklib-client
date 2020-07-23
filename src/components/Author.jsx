import React from 'react';
import Axios from 'axios';

const Author = ({ author }) => {

  const deleteAuthor = () => {
    Axios.delete(`http://localhost:8000/authors/${author.id}`)
    .then(res => alert("Auteur supprimé"))
  }

  return(
    <div className="authorDiv">
      <div className="authorLeftDiv">
        <img src={author.picture} alt={author.firstname} className="authorCover" />
        <button type="submit" onClick={deleteAuthor}>Supprimer l'auteur</button>
      </div>
      <div className="authorDescriptionDiv">
        <h1 className="authorTitle">{author.firstname} {author.lastname}</h1>
        <p className="authorResume">Biographie :<br></br>{author.biography}</p>
      </div>
    </div>
  )
}

export default Author;