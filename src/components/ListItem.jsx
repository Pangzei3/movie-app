import React, {useContext} from 'react';
import './listItem.css';
import {GlobalContext} from '../context/GlobalState';

function ListItem({movie, title, poster_path, vote_average, overview, release_date, id}) {
  //console.log(poster_path)
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  // const addMovieToWatchlist = useContext(GlobalContext)
  //console.log(addMovieToWatchlist)
  const {watchlist, addMovieToWatchlist} = useContext(GlobalContext)
  //console.log(movie)
  
  let storedMovie = watchlist.find(item => item.id === id);
  const buttonDisabled = storedMovie ? true : false;
  //console.log(watchlist)

  const getRateBgc = (vote) => {
    if(vote >= 8) {
      return "green"
    } else if (vote >= 5) {
      return "orange"
    } else {
      return "red"
    }
  }
  return (
    <div className="listItem">
      <img src={`${IMG_PATH + poster_path}`} />
      <h4>{title}</h4>
      <div className="item-info">       
        <span>{release_date}</span>
        <span className={getRateBgc(vote_average)}>{vote_average}</span>
      </div>
      <div className="item-overview">
        {/* <button id="add_btn" onClick={() => addMovieToWatchlist(movie)}>Add to WatchList</button> */}
        {buttonDisabled ? (<>{<button disabled={buttonDisabled} style={{color: "yellow", cursor: "not-allowed"}}>Movie is in watchlist</button>}</>):(<>{<button onClick={() => addMovieToWatchlist(movie)} id="add_btn">Add to Watchlist</button>}</>)}
        {/* {button ? (<>{<button onClick={() => removeMovieFromWatchlist(id)} className="remove">-REMOVE</button>}</>) : (<>{<button onClick={() => addMovieToWatchlist(movie)} disabled={button} className="add">+ADD</button>}</>)} */}
        <span>{overview}</span>
      </div>
    </div>
  )
}

export default ListItem