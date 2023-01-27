import React from 'react';
import Moviecard from "./Moviecard"
import { useState, useEffect } from 'react';
// 65b8c89d
import "./app.css";
import SearchIcon from "./image.png";



const API_URL = "https://www.omdbapi.com?apikey=65b8c89d";


const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
/*const [randomStatic, setRandomStatic] = useState("")*/


/*const getRandom = () => {
  const staticSize = movies.length;
  const randomIndex = Math.floor(Math.random() * staticSize );
  let randomStaticData = movies[randomIndex];
  const randomStatic1 = randomStaticData.title;

  setRandomStatic(randomStatic1);
            
}

getRandom();*/

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json()

  setMovies(data.Search);
}
  useEffect(() => {
    
    searchMovies('Superman');

 }, []);




 
  return (
    <>
      <div className='app'>
        <h1>MoviePlanet</h1>

        <div className='search'>
          <input type="text" placeholder='Search for movies' 
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}/>
         
          
          <img src={SearchIcon}
           alt="search" 
           onClick={() => searchMovies(searchTerm)}/>
       
       
        </div>
          {
            movies?.length > 0
            ? (
              <div className="container">
                 { movies.map((movie) => (
                  <Moviecard movie={movie}/>
                 ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No Movies Found</h2>
              </div>
            )
          }
        <div className='container'>
         
        </div>
      </div>
    </>
  )
}

export default App
