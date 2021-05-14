import React from "react";
import styled from "styled-components";

const MediaAd = () => {
  return (
    <Container>
      <Heading>
        <span>MS Dhoni:The Untold Story</span>
        <p>2hr 58min . 2016 . Biopic . PG . Tamil,Hindi</p>
      </Heading>
      <Description>
        M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language
        biographical sports drama film written and directed by Neeraj Pandey. It
        is based on the life of former Test, ODI and T20I captain of the Indian
        national cricket team, Mahendra Singh Dhoni. The film stars Sushant
        Singh Rajput as Dhoni, along with Disha Patani, Kiara Advani, and Anupam
        Kher. The film chronicles the life of Dhoni from a young age through a
        series of life events.
      </Description>

      <Image>
        <div className="mediaImage">
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"
            alt=""
          />
        </div>
      </Image>
    </Container>
  );
};

export default MediaAd;

const Description = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 600;
  padding: 5px 50px;
`;

const Heading = styled.p`
  margin-top: 20px;
  font-size: 25px;
  margin: 20px 10px;
  color: white;
  font-weight: 400;
  padding: 10px 40px;

  p {
    font-size: 15px;
    padding: 0px;
  }
`;

const Image = styled.div`
  position: absolute;
  color: black;
  height: 100%;
  right: 3%;
  left: 55%;
  top: 15%;
`;

const Container = styled.div`
  width: 830px;
  background-color: black;
`;
