import React, {useState, useEffect} from 'react'
// import LandingImg from './images/landing.jpg';
import './landing.css'

// src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
function Landing() {
    const [movie, steMovie] = useState({});
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    const getMovie = async () => {
        const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1';
        const response = await fetch(NOW_PLAYING_API);
        const data = await response.json();
        //console.log(data.results)
        const randomNum = Math.floor(Math.random() *20)
        //console.log(data.results[randomNum])
        steMovie(data.results[randomNum])
    }
    useEffect(() => {
        getMovie()
    },[])
    //console.log(movie.title)
  return (
    <div className="landing">
        <div className="landing_desc">   
            <div className="desc_container">
                <h2>{movie.title}</h2>
                <h5>{movie.release_date}</h5>
                <span className="overview">{movie.overview}</span>
            </div>                          
        </div>
        <div className="landing_poster">
            <img src={`${IMG_PATH + movie.poster_path}`} alt=''/>
        </div>
        
    </div>
  )
}

export default Landing