import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./request.js";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request_movie = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request_movie.data.results[
          Math.floor(Math.random() * request_movie.data.results.length)
        ]
      );
      return request_movie;
    }
    fetchMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/** title */}
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        {/** div > 2 buttons*/}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/** description */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
