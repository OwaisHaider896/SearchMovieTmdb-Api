import React, { useState } from "react";
import "./styles.css";
import MovieCreationIcon from '@material-ui/icons/MovieCreation';

export default function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const apiKey = "c58c4c307b856ef0a1879f3e9b3ef58a";

  const click = async () => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
      const data = await response.json();
      setMovie(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="main">
        < MovieCreationIcon />
      <h2>MovieFinder</h2>
      </div>
      <input
        type="text"
        className="search"
        placeholder="Search Movie"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />

      <button className="btn" onClick={click}>
        Search
      </button>

      <ul className="list">
        <div className="info">
          {movie.map((value) => (
            <li>
              <h4>{value.title} </h4>
              <img
                className="image"
                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                alt={value.title}
              />
              
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

//https://api.themoviedb.org/3/movie/550?api_key=c58c4c307b856ef0a1879f3e9b3ef58a

//https://cors-anywhere.herokuapp.com/

//c58c4c307b856ef0a1879f3e9b3ef58a

//https://image.tmdb.org/t/p/w500$
