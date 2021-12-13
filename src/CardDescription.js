import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Description = styled.div`
  margin: 2rem auto;
  width: 85%;
  padding: 2rem 4rem;
  border-radius: 5px;
  box-shadow: 0 6px 16px #8ba18e8b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  h1 {
    color: #8ba18e;
    margin-bottom: 2rem;
    align-self: center;
  }

  ul {
    display: flex;
    flex-flow: column wrap;
    column-gap: 3rem;
    height: 65%;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  li {
    list-style: circle;
    max-width: 15rem;
  }

  p {
    align-self: flex-end;
  }

  .link {
    margin-top: 1rem;
    text-decoration: none;
    align-self: center;
  }

  @media screen and (min-width: 900px) {
    width: 60vw;
    height: 85vh;
    position: fixed;
    left: 20vw;
  }
`;

const CardDescription = ({ description }) => {
  const history = useHistory();

  return (
    <Description>
      {description ? (
        <>
          <h1>{description.label}</h1>
          <ul>
            {description.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{description.calories.toFixed()} Calories</p>
          <p>Cooking time: {description.totalTime}</p>
          <Link className="link" to="/">
            <Button>Go Back</Button>
          </Link>
        </>
      ) : (
        history.push("/")
      )}
    </Description>
  );
};

export default CardDescription;
