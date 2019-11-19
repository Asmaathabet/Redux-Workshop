import React from 'react'
import './styles.css'
import { connect } from 'react-redux' 

const MOVIE_POSTER_URL_PREFIX = 'https://image.tmdb.org/t/p/w342' /* Prepend this to the the movie poster_path to get a full image src */

const MovieSearchResults = ( props ) => {
  
  /* TODO: Connect to Redux and display an <img /> tag for each movie */
const { movies } = props
  return (
    <div className='movie-search-results'>
      {movies.map( movie => {
        return (
          <img 
          src={`${ MOVIE_POSTER_URL_PREFIX }${ movie.poster_path}`} 
          key={movie.id}
          alt="posterImage" />
        )
      })}
    </div>
  )
}
const mapStateToProps = ( state ) => {
  return {
    movies: state.movies,
  }
}
export default connect(
  mapStateToProps,
  null
)(MovieSearchResults)