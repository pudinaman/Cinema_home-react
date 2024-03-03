//import{useState,useEffect} from 'react';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './serch.svg';
import MovieCard from './MovieCard';
// 6af2a04b
/*
const Person=(props)=>{
 return (
  <>
    <h1>Name:{props.name}</h1>
    <h2>Last Name:{props.LastName}</h2>
    <h1>Age:{props.age}</h1>
    
  </>
 )
}
*/
const API_URL='http://www.omdbapi.com?apikey=6af2a04b';

const App=()=> {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState([]);
  const searchMovies =async(title)=>{
    const response =await fetch(`${API_URL}&s=${title}`)
    const data =await response.json();
    setMovies(data.Search);
  }
   useEffect(()=>{
     searchMovies("Spiderman");
   },[])
  return (
    <div className="app">
     <h1>Cinema Home</h1>
     <div className='search'>
      <input
        placeholder='Search for movies'
        value ={searchTerm}
        onChange={(e)=>
         setSearchTerm(e.target.value)
        }
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={()=>{
            searchMovies(searchTerm)
          }}
        />
     </div>
     {
      movies?.length>0
        ?(
          <div className="container">
           {movies.map((movie)=>(
             <MovieCard movie={movie}/>
            ))}
     </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
     }
     
    </div>
    
  );
}

export default App;
