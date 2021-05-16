import React, { useEffect, useState } from "react";
import { mediaa } from "../Link/Links";
import styled from "styled-components";
import { useDataLayerValue } from "../../DataLayer";
import Media from "../Media/Media";

const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const [links, dispatch] = useState(useDataLayerValue);
  useEffect(() => {
    console.log("");
    dispatch({
      type: "SET.LINKS",
    });
  }, [dispatch]);

  console.log(links, dispatch);
  return (
    <Container>
      <Content>
        <div className="watch">
          <h4>Continue watch</h4>
        </div>
        <div className="media-row">
          {mediaa.map((img) => {
            return <Media img={img.image} />;
          })}
          ;
        </div>
        <div className="movie">
          <h4>Shows Recommended For You</h4>
        </div>
        <div className="media-row">
          {mediaa.map((img) => {
            return <Media img={img.image} />;
          })}
        </div>
        <div className="sports">
          <h4>Best in Sports</h4>
        </div>

        <div className="media-row">
          {mediaa.map((img) => {
            return <Media img={img.image} />;
          })}
        </div>
      </Content>
    </Container>
  );
};

export default Movies;

const Content = styled.div`
  padding-left: 1%;
  margin-top: 30px;

  media {
    padding: 0px 10px 30px;
    max-width: 100%;
    height: auto;
  }

  h4 {
    margin: 80px;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    margin-inline-start: 30px;
    padding: 15px 10px;
    margin-bottom: 5px;
  }
`;

const Container = styled.div`
  display: grid;
`;
