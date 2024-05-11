import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notFoundSVG from "../assets/page-not-found.svg";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <img src={notFoundSVG} height={200} width={200}/>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
};

export default MovieDetails;
