import React from "react";
import styled from "styled-components";
import Input from "../input";

import Button from "../buttonComponent";

const Wrapper = styled.div`
  /*border: 1px solid black;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35rem;
  background-color: lightgray;
  padding: 1rem 0 3rem 0;
  gap: 2rem;
  border-radius: 8px;
`;
const Heading = styled.h2``;

export interface LoginSignupProps {
  name: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Close = styled.p`
  width: 95%;
  display: flex;
  justify-content: end;
  font-size: 1.2rem;
  font-weight: 500;
`;

const index = (props: any) => {
  const { setIsOpen } = props;

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={() => {
            setIsOpen(false);
          }}
        >
          X
        </Close>
        <Heading> Login Here</Heading>
        <Input name="Email" type="text" />
        <Input name="Password" type="password" />
        <Button name="Submit" />
      </Wrapper>
    </Container>
  );
};

export default index;
