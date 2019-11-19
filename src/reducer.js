
const initialState = {
  searchTerm: '',
  movies: [],
}

const reducer = ( state = initialState, action ) => {
  // /* TODO: handle different actions based on action.type and return new state */
  // return state

  switch(action.type){
    case 'ON_CHANGE_SEARCH_TERM':
      return {
        ...state,
        searchTerm : action.searchTerm
      }

      case 'ON_CLEAR_SEARCH_TERM':
        return {
          ...state,
          searchTerm:''
        }

      case 'LOADED_MOVIES':
        return { 
          ...state,
          movies: action.movies,
        }  

      default: 
      return state 
  }
}

export default reducer