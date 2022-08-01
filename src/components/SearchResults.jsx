import React from 'react'
import ListItem from './ListItem'
import './searchResults.css'


function SearchResults(props) {
  return (
    <div className="searchResults">
        <div className="searchResults-top">
            <h2 className="search-title">{props.movies.length > 0 ? `Viewing ${props.movies.length} results for "${props.search}"` : "There is no result based on your research "}</h2>
            {props.movies.length && <button className="clearSearch" onClick={props.clearSearch}>Close</button>}
        </div>
        <div className="searchResults-container">
            {props.movies.map( (movie, index) => (
                <ListItem movie={movie} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} release_date={movie.release_date} id={movie.id} key={index} />
            ))}
        </div>
    </div>
  )
}

export default SearchResults