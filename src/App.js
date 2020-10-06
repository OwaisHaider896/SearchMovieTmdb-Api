import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const apiKey = "c58c4c307b856ef0a1879f3e9b3ef58a";

  const click = async () => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
      const { results } = await response.json();
      setMovie(results);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
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

      {movie.map((value) => (
        <ul>
          <li>{value.title}</li>

          <p>{value.overview} </p>
          <img src={value.backdrop_path} alt={value.title} />
        </ul>
      ))}
    </div>
  );
}

//https://api.themoviedb.org/3/movie/550?api_key=c58c4c307b856ef0a1879f3e9b3ef58a

//https://cors-anywhere.herokuapp.com/

//c58c4c307b856ef0a1879f3e9b3ef58a
