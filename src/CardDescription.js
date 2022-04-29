import { useHistory } from "react-router-dom";
import Button from "./Button";
import { StyledDescription } from "./styles/CardDescription.styled";

const CardDescription = ({ description }) => {
  const history = useHistory();

  return (
    <StyledDescription>
      {description ? (
        <>
          <h1 className="desc-header">{description.label}</h1>
          <ul className="desc-list">
            {description.ingredientLines.map((ingredient, index) => (
              <li key={index} className="desc-item">
                {ingredient}
              </li>
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
    </StyledDescription>
  );
};

export default CardDescription;
