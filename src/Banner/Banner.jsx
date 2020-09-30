import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../styles/Banner.css";
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

  function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
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
      {/*background image*/}
      <div className="banner__contents">
        {/*title*/}
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/*DIV->2 OTA BUTTON*/}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/*description*/}
        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>
      <div className="banner__fadeButtom" />
    </header>
  );
}

export default Banner;
