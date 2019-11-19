
import axios from 'axios' /* axios is already added as a dependency */

/* Append a search query to this url, then GET tmdb's search endpoint */
const MOVIE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=6e104dc4c228f5bbe9ec0d282c017d64&query='

/* The schema of the movie search response looks like this:
  {
    data: {
      results: [
        {
          id: "",
          poster_path: "",
          backdrop_path: "",
          original_title: "",
          overview: "",
        },
      ]
    }
  }
*/

/* TODO: add action dispatcher functions in this file */
export const searchMovies = () => async ( dispatch, getState) => {
  const { searchTerm } = getState()
  const url = `${ MOVIE_SEARCH_URL}${ searchTerm }`
  const response = await axios.get( url )
  const movies = response.data.results 

  dispatch({
    type: 'LOADED_MOVIES',
    movies
  })
}

export const onChangeSearchTerm = (searchTerm) =>{
  return {
    type: 'ON_CHANGE_SEARCH_TERM',
    searchTerm, 
  }
}

export const onClearSearchTerm = () =>{
  return {
    type: 'ON_CLEAR_SEARCH_TERM'
  }
}