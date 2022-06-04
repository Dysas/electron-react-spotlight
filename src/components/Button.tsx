import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  children: React.ReactNode;
`;

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
