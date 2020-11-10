import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';
function Movie({id, year, title, summary, poster,genres }) {
  return (
    <div className="movie">
    <img src ={poster} alt ={title} title={title} />

    <div className="movie-data">    
      <h3 className="movie-title" style={{backgroundColor: "red"}} >{title}</h3>
      <h5 className="movie-year">{year}</h5>
      <ul className="movie-genres"></ul>
      <ul>
        {genres.map((genre, index) => {
          return <li key={index}className = "movie-genre">{genre}</li>;
        }
        )}

      </ul>
      <p className ="movie-summary">{summary}</p>
      <p className ="movie-genres">{genres}</p>
  </div>
  </div>
  );


}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;