import React, { useState } from "react";
import Button from "components/Button";
import group from "assets/images/group.png";
import {
  ButtonWrapper,
  Container,
  ImageWrapper,
  QuestionText,
} from "styles/views/Question";
import QuestionPopModal from "components/QuestionPopModal";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const hadleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <QuestionText>
        Empowering the world to develop technology through collective knowledge
      </QuestionText>

      <ButtonWrapper>
        <Button
          label="Ask Questions"
          variant="contained"
          onClick={handleClick}
        />
      </ButtonWrapper>

      <ImageWrapper>
        <img src={group} />
      </ImageWrapper>

      {isOpen && <QuestionPopModal isClose={hadleClose} />}
    </Container>
  );
};

export default Question;
