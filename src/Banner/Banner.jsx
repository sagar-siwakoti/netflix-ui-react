import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner(props) {
  const [movie, setMoive] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMoive(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header className="banner"
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
    }}>
        {/*background image*/}
      <div className="banner__contents">
        {/*title*/}
        <h1>
          {movie?.title ||movie?.name||movie?.original_name}
        </h1>
        <div className="banner__button">

        </div>
        {/*DIV->2 OTA BUTTON*/}
        {/*description*/}
      </div>
    </header>
  );
}

export default Banner;
