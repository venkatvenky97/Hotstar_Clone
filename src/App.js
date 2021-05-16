import React from "react";
import Header from "./Components/Header/Header";
import MediaAd from "./Components/MediaAd/MediaAd";
import Movies from "./Components/Moviess/Movies";
import Media from "./Components/Media/Media";
import DataLayer from "./DataLayer";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MediaAd />
      <Movies />
      <DataLayer />
      <Media />
      <DataLayer />
      <Footer />
    </div>
  );
}

export default App;
