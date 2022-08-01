import React, {useEffect, useState} from 'react';
import Logo from './images/logo.png'
import {Search, Menu, Close } from '@material-ui/icons';
import './navbar.css'
import {Link} from "react-router-dom"
import SearchResults from './SearchResults';

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false)
  const clickToggle = () => {
    setmenuOpen(!menuOpen)
  }
  //console.log(menuOpen)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovie = async (searchString) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1e4805d5be3b17922e07f8c0d3633244&language=en-US&query=${searchString}&page=1&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setMovies(data.results);
    }
  }
  const clearSearch = () => {setSearch("")}

  useEffect(() => {
    searchMovie(search)
  },[search])

  return (
    <>
      <div className="navbar">
          <div className="nav-left">
              <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
          <div className="nav-middle">
              <input type="search" className="nav-search" placeholder="Search Movie..." value={search} onChange={(event) => setSearch(event.target.value)}/>
              <Search style={{cursor: 'pointer'}}/>
          </div>
          <div className="nav-right">
              <Link to="/watchlist" className='menu-item'><span>Watchlist</span></Link>
              <Link to="/singIn" className='menu-item'><span>SignIn</span></Link>
              <Link to="/" className='menu-item'><span>EN</span></Link>
          </div>
          <div className="nav-right-mobile">
            <Menu onClick={clickToggle}/>
            <div className={menuOpen? "mobile-menu-open" : "mobile-menu"}>
              <Link to="/watchlist" className='menu-item'><span>Watchlist</span></Link>
              <Link to="/singIn" className='menu-item'><span>SignIn</span></Link>
              <Link to="/" className='menu-item'><span>EN</span></Link>
              <Close onClick={clickToggle}/>
            </div>
          </div>
      </div>
      {movies.length && search.length ? <SearchResults movies={movies} search={search} clearSearch={clearSearch}/> : null}
    </>
  )
}

export default Navbar