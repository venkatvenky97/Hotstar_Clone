import React from "react";
import Header from "./Components/Header";
import MediaAd from "./Components/MediaAd";
import Movies from "./Components/Movies";
import Media from "./Components/Media";
import DataLayer from "./DataLayer";
import Footer from "./Components/Footer";
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
