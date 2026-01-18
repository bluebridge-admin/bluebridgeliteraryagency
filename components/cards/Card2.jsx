import React from "react";
import { styled } from "styled-components";

const StyledCard = styled.div`
  /* From Uiverse.io by joe-watson-sbf */
  width: 190px;
  height: 120px;
  transition: all 0.5s;
  box-shadow: 15px 15px 30px rgba(25, 25, 25, 0.11), -15px -15px 30px rgba(60, 60, 60, 0.082);
  text-align: center;
  overflow: hidden;

  &:hover {
    height: 260px;
    background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
  }

  & .header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212121;
    margin-bottom: 16px;
  }

  & .header .img-box {
    width: 50px;
  }

  & .header .title {
    font-size: 1em;
    letter-spacing: 0.1em;
    font-weight: 900;
    text-transform: uppercase;
    padding: 4px 0 14px 0;
    transition: all 0.5s;
    color: #edededc5;
  }

  &:hover .header {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 96%);
  }

  &:hover & .header .title {
    padding: 0;
  }

  & .content {
    display: block;
    text-align: left;
    color: #212121;
    margin: 0 18px;
  }

  & .content p {
    transition: all 0.5s;
    font-size: 0.8em;
    margin-bottom: 8px;
  }

  & .content a {
    color: #1d8122;
    cursor: pointer;
    transition: all 0.5s;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  & .content .btn-link:hover {
    border-bottom: 1px solid #1d8122;
  }
`;

const Card2 = () => {
  return (
    <StyledCard>
      <div className="header">
        <div className="img-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"
              fill="rgba(66,193,110,1)"
            ></path>
          </svg>
        </div>
        <span className="title">Features</span>
      </div>

      <div className="content">
        <p>Lorem ipsum dolor sit tali amet, consectus uy adipiscing it amet it...</p>

        <a className="btn-link">Read More...</a>
      </div>
    </StyledCard>
  );
};

export default Card2;
