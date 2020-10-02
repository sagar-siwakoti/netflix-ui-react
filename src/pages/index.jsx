import React from "react";
import Header from "../components/Main/Header/Header";
import "../App.css";
import HeaderButtom from "../components/Main/HeaderButtom/HeaderButtom";
import Footer from "../components/Main/Footer/Footer";
function Index(props) {
  return (
    <div>
      <Header />
      <HeaderButtom
        text1="Enjoy on your TV."
        text2="Watch on Smart TVs,Playstation,Xbox,
            Chromecast, Apple TV, Blu-ray players, and
            more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
        <HeaderButtom
            text1="Download your shows to watch offline."
            text2="Save your favorites easily and always have something to watch."
            img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        />
        <HeaderButtom
            text1="Watch everywhere."
            text2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
            img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        />
        <Footer/>
    </div>
  );
}

export default Index;
