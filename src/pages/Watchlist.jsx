import React, {useContext} from 'react'
// import Navbar from '../components/Navbar'
import { GlobalContext } from '../context/GlobalState'
import WatchlistItem from '../components/WatchlistItem'
import './watchlist.css'

const Watchlist = () => {
    const {watchlist, removeMovieFromWatchlist} = useContext(GlobalContext);

  return (
    <div>
        <div className="watchlist">
            
          {watchlist.length>0 ? (<>{watchlist.map((movie) => {
          return <WatchlistItem movie={movie} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} release_date={movie.release_date} overview={movie.overview} id={movie.id} />
          })}</>) : (<h2>No movie yet! Add some!</h2>)}
            
        </div>
    </div>
  )
}

export default Watchlist