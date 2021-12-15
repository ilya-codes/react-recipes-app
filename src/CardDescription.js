import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Description = styled.div`
  margin: 2rem auto 4rem auto;
  width: 85%;
  padding: 2rem 4rem;
  border-radius: 5px;
  box-shadow: 0 6px 16px #8ba18e8b;
  display: grid;
  gap: 2rem;
  justify-items: center;
  overflow: hidden;

  h1 {
    color: #8ba18e;
    text-align: center;
    margin-bottom: 2rem;
  }

  li {
    list-style: circle;
  }

  .side-info {
    align-self: center;
    justify-self: end;
  }

  .accent {
    color: #8ba18e;
    font-weight: 600;
  }

  .link {
    text-decoration: none;
  }
  @media screen and (min-width: 900px) {
    width: 60vw;
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
          <span className="side-info">
            <p>
              Total{" "}
              <span className="accent">{description.calories.toFixed()}</span>{" "}
              Calories
            </p>
            {description.totalTime ? (
              <p>
                Cooking time:{" "}
                <span className="accent">{description.totalTime}</span> min
              </p>
            ) : null}
          </span>
          <Button>
            <span onClick={history.goBack}>Go Back</span>
          </Button>
        </>
      ) : (
        history.push("/")
      )}
    </Description>
  );
};

export default CardDescription;
