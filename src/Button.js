import { StyledBtn } from "./styles/Button.styled";

const Button = (props) => {
  const button =
    props.role === "search" ? (
      <StyledBtn type="submit" form="search-form" className={props.className}>
        {props.children}
      </StyledBtn>
    ) : (
      <StyledBtn>{props.children}</StyledBtn>
    );

  return button;
};

export default Button;
