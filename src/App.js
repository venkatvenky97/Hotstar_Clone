import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./Components/Header";
import MediaAd from "./Components/MediaAd";
import Movies from "./Components/Movies";
import Media from "./Components/Media";
import DataLayer from "./Components/DataLayer";
import Links from "./Components/Links";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MediaAd />
      <Movies />
      <DataLayer />
      <Links />
      <Media />
      <Media />
    </div>
  );
}

export default App;
