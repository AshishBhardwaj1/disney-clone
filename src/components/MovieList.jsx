import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'

const MovieList = ({genreId}) => {
    const [movie ,setMovie] =useState([])
    useEffect(()=>{
MoviesById()
    },[])
    const MoviesById = ()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results);
            setMovie(resp.data.results)
        })
    }
  return (
    <div className='flex m-5 p-4 ' > 
        {movie.map((item)=>(
<MovieCard movie={item}/>
        ))} </div>
  )
}

export default MovieList