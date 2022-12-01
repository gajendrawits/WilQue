import React from "react";
import styled from "styled-components";
export interface ButtonProps {
  name: string;
  onClick?: any;
}
const Button = styled.button`
  padding: 0.4rem;
  color: white;
  border-radius: 8px;
  background-color: blue;
  border: none;
`;
const index = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>{name}</Button>
    </>
  );
};

export default index;
