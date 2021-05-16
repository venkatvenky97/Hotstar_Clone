import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Bottom>
      <div className="footer">
        <div className="footer-left">
          <span>About Disney+Hotstar</span>
          <span> TermsOfUse</span>
          <span> Privacy</span>
          <span> Policy</span>
          <span> FAQ</span>
          <span> Feedback</span>
          <span> Careers</span>
        </div>
      </div>
    </Bottom>
  );
};

export default Footer;

const Bottom = styled.div`
  font-size: large;
  font-weight: 400;
  padding: 0 20px 00;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin-top: 20px;

   {
    display: flex;
    background: #030b17;
    justify-content: space-around;
    padding: 0 20px 0;
    word-spacing: 1cm;
  }

  color: #919191;
  font-size: 25px;
  font-weight: 700px;
  font-size: large;
  margin-left: 50px;
  color: white;
`;
