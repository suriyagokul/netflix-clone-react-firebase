import React, { useEffect, useState } from "react";
import axios from "../utils/axiosHelper";
import "../styles/Row.css";

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchUrl, isLargeImage }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row-component">
      <h2 className="title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${imageBaseUrl}${
              isLargeImage ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            className={isLargeImage ? "largeImagePoster" : "poster"}
          />
        ))}
      </div>
    </div>
  );
}
