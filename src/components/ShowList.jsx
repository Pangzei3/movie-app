import React, {useState, useEffect, useRef} from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import ListItem from './ListItem';
import './showList.css';
// import GetWindowWidth from './GetWindowWidth'



const ShowList = (props) => {
    const [movies, setMovies] = useState([]);
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0)
    const slideHidden = 20 - Math.round(window.innerWidth/205)
    console.log(slideHidden)

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x;
        console.log(distance)
        

        if (direction === "left" && slideNumber >0) {
        setSlideNumber(slideNumber -2);
        listRef.current.style.transform = `translateX(${410 + distance}px)`;
        } else if (direction === "right" && slideNumber < slideHidden) {
        setSlideNumber(slideNumber +2);
        listRef.current.style.transform = `translateX(${-410 + distance}px)`;
        }
    }

    const getMovie = async () => {
        const response = await fetch (props.url);
        const data = await response.json();
        setMovies(data.results)
        //console.log(data.results)
    }
    console.log(window.innerWidth)
    
    useEffect(() => {
        getMovie()
    }, [])

  return (
    <div className="showList">
        <h1>{props.title}</h1>
        <div className="showList-wrapper">
            <ArrowBackIosOutlined 
            className="sliderArrow left" 
            onClick={() => handleClick("left")}
            style={{ display: slideNumber===0 && "none" }}
            />
            <div className="movie-row" ref={listRef}>
                {movies && movies.map( (movie, index) => (
                    <ListItem movie={movie} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} overview={movie.overview} release_date={movie.release_date} id={movie.id} key={index} />
                ))}
            </div>
            <ArrowForwardIosOutlined 
            className="sliderArrow right" 
            onClick={() => handleClick("right")}
            style={{ display: slideNumber===slideHidden && "none" }}
            />
        </div>  
    </div>
  )
}

export default ShowList