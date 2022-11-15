import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import './MovieGrid.css'


export interface movieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  showLink:Boolean
}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRateUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie:movieProps) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
