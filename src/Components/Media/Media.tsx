import React from "react";
import styled from "styled-components";

let Media = ({ img: any }) => {
  return (
    <Image>
      <div className="media">
        <img src={any} alt="" />
      </div>
    </Image>
  );
};

export default Media;

const Image = styled("div")`
  img {
    width: 250px;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 10px;
  }

  media {
    margin: 10px;
    transition: transform 100ms;
    cursor: pointer;
  }
`;
