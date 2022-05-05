import React, { useState } from 'react'
import MovieCardComponent from './MovieCardComponent';

export default function SearchMovie() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie/?api_key=aa04e5d766ef0dffa308bcbcf04324cb&language=en-US&query=${query}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setMovies(data.results);
        } catch(err) {
            console.error(err);
        }
    };

  return (
    <>
    <form className='form' onSubmit={searchMovies}>
        <label htmlFor='query' className='label'>Movie Name:</label>
        <input 
        type='text' 
        name='query' 
        placeholder='Find your favorite movie :)' 
        className='input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        uncontroled='true'
        autoFocus={true}
        ></input>
        <button className='button' type='submmit'>Search</button>
    </form>

    <div className='card-list'>
    {movies.map(movie => (
       <MovieCardComponent movie={movie} key={movie.id}/>
     )) }
</div> 
    </>
  )
}
