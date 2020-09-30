import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row__posters">
        {/*posters*/}
        {movies.map((movie) => (
          <img
              key={movie.id}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/*container with posters*/}
      {/*posters*/}
    </div>
  );
}

export default Row;
