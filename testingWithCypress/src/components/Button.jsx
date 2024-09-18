import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${(props) => props.color || "gray"};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ color, children, ...props }) => {
  return (
    <StyledButton color={color} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired, 
};

export default Button;
