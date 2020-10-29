import React from "react";
import VideoCard from "./VideoCard";
import "./App.css";
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="app">
     <Header/>
      <div className="app__top">
        {/*Logo */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
          alt="insta_logo"
        />
        {/*Text :Reels */}
        <h1 className="app__text">Reels </h1>
      </div>

      <div className="app__videos">
        <VideoCard />
        <VideoCard />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
