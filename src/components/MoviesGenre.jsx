import React from 'react'
import GenreList from '../Genre/GenreList'
import MovieList from './MovieList'

const MoviesGenre = () => {
  return (
    <div>
        {
            GenreList.genere.map((item,i)=>(
 <div >
<h2 className='text-white text-[26px] m-8 font-bold'> {item.name} </h2>
<MovieList genreId ={item.id}/>
 </div>
         

            ))
        }
    </div>
  )
}

export default MoviesGenre