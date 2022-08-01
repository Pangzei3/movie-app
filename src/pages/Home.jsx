import React from 'react'
import Landing from '../components/Landing'
import ShowList from '../components/ShowList'

function Home() {
  const POPULAR_API = 'https://api.themoviedb.org/3/movie/popular?api_key=1e4805d5be3b17922e07f8c0d3633244&language=en-US&page=1'
  const NOW_PLAYING_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1e4805d5be3b17922e07f8c0d3633244&language=en-US&page=1'
  const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1e4805d5be3b17922e07f8c0d3633244&language=en-US&page=1'
  const mostPopular = "Most Populay Movies ...";
  const nowPlaying = "Now Playing Movies ...";
  const topRated = "Top Rated Movies ..."
  return (
    <div>
        <Landing />
        <ShowList url={POPULAR_API} title={mostPopular} />
        <ShowList url={NOW_PLAYING_API} title={nowPlaying} />
        <ShowList url={TOP_RATED_API} title={topRated} />
    </div>
  )
}

export default Home