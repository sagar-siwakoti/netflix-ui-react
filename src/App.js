import React from "react";
import "./App.css";
import Row from "./components/Rows/Row";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Nav from "./components/NavBar/Nav";
function App() {
  return (
    <div className="app">

     {/*=====================Inside signup work============================*/}
      {/*Nav*/}
      {/*<Nav/>
      Banner
      <Banner/>
      <Row
        title="NETFLIX Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   */}
        {/*=====================Inside signup work============================*/}

    </div>
  );
}

export default App;
