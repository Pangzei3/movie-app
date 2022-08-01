import React, {useContext}from 'react'
import './watchlistItem.css'
import {GlobalContext} from '../context/GlobalState';

const WatchlistItem = ({movie, title, poster_path, vote_average, overview, release_date, id}) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const {watchlist, removeMovieFromWatchlist} = useContext(GlobalContext)

    return (
        <div className="watchlistItem">
            <div className="watchlistItem-left">
                <img src={`${IMG_PATH + poster_path}`}/>
            </div>
            <div className="watchlistItem-right">
                <h3>{title}</h3>
                <span>Release Date: {release_date}</span>
                <span>Film Score: {vote_average}</span>
                <h4>Overview: </h4>
                <span className="overview">{overview}</span>
                <button onClick={() => {removeMovieFromWatchlist(id)}}>Remove from Watchlist</button>
            </div>
        </div>
    )
}

export default WatchlistItem