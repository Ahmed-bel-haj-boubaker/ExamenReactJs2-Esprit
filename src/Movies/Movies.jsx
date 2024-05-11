import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const Api = `http://localhost:3000/movies`;

  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Api);
        setMovie(response.data);
        console.log(response.data);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [Api]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchTerm("");
    }
  };

  const filteredMovies = movie.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            description={movie.description}
          />
          
        ))
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
};

export default Movies;
