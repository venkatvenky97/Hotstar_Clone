import React, { useEffect, useState } from "react";
import { mediaa } from "./Links";
import styled from "styled-components";
import { useDataLayerValue } from "./DataLayer";
import Media from "./Media";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [{ links }, dispatch] = useDataLayerValue();

  useEffect(() => {
    dispatch({
      type: "SET_LINKS",
    });
  }, [dispatch]);

  console.log(links);
  return (
    <Container>
      <div className="App">
        <div className="watch">
          <span className="span">Continue watch</span>
        </div>
        <div className="media-row">
          {mediaa.map((img) => {
            return <Media img={img.image} />;
          })}
          ;
        </div>
      </div>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
