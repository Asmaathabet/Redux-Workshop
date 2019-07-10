import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const MOVIE_POSTER_URL_PREFIX = 'https://image.tmdb.org/t/p/w780' /* Prepend this to the the movie poster_path or backdrop_path to get an image src */

const MovieDetailsPage = () => {
  
  return (
    <div className='movie-details'>
      <Link className='back-button' to='/'>&lt; Back</Link>
    </div>
  )
}

export default MovieDetailsPage