import React from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onChangeSearchTerm, onClearSearchTerm, searchMovies } from '../../actions'

class SearchBar extends React.Component {

  onChangeSearchTerm = ( e ) => {
    const searchTerm = e.target.value
    this.props.onChangeSearchTerm( searchTerm )
    /* TODO: call action dispatcher to update the current search term */
  }

  onSubmit = ( e ) => {
    e.preventDefault()
    /* TODO: call action dispatcher to query TMDB endpoint */
    this.props.searchMovies()
  }

  onClickClearButton = () => {
    /* TODO: call action dispatcher to clear the current search term */
    this.props.onClearSearchTerm()
  }

  render() {

    /* TODO: Connect to redux and display the current search term */

    return (
      <div className='search-bar'>
        <span className='search-bar-logo' role='img' aria-label='camera'>🎥</span>
        <form onSubmit={this.onSubmit}>
          <input value={this.props.searchTerm} type='text' placeholder='Search for a movie' onChange={this.onChangeSearchTerm}/>
          <div className='clear-search-button' onClick={this.onClickClearButton}>
            <span role='img' aria-label='clear'>✖️</span>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    searchTerm: state.searchTerm,
  }
}
const mapDispatchToProps = ( dispatch ) => bindActionCreators({
onChangeSearchTerm,
onClearSearchTerm,
searchMovies,
}, dispatch )


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)