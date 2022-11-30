import React, { useState } from "react";
import Button from "components/Button";
import group from "assets/images/group.png";
import {
  ButtonContain,
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
        <h2>
          Empowering the world to develop technology through collective
          knowledge
        </h2>
      </QuestionText>
      <ButtonContain>
        <ButtonWrapper>
          <Button
            label="Ask Questions"
            variant="contained"
            onClick={handleClick}
          />
        </ButtonWrapper>
      </ButtonContain>
      <ImageWrapper>
        <img src={group} />
      </ImageWrapper>

      {isOpen && <QuestionPopModal isClose={hadleClose} />}
    </Container>
  );
};

export default Question;
