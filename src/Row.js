import React, { useState, useEffect } from "react";
import axios from "./axios.js";

function Row({ title, fetchUrl }) {
  const { movies, setMovies } = useState([]);
  // code that runs based on as specific condition

  useEffect(() => {
    //fetch the movies
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      {/* <div className="row_posters">
        {movies.map((movie) => {
          <img src={movie.poster_path} alt={movie.name} />;
        })}
      </div> */}
      {/** container with movies posters */}
    </div>
  );
}

export default Row;
