import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Button from "../../../components/buttonComponent";
import Like from "../../../assets/svg/likeButton";
import DisLike from "../../../assets/svg/dislikeButton";
import Star from "../../../assets/svg/star";
import MyComponent from "components/RichText";

const AnswerSection = () => {
  const Container = styled.div`
    display: grid;
  `;
  const AnswersWrapper = styled.div`
    background: grey;
    border: 1px solid red;
  `;
  const Answer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 4rem;
  `;

  const IconsWrapper = styled.div`
    display: flex;
    margin: 10px 3px 0 0;
  `;

  return (
    <>
      <Container>
        <AnswersWrapper>
          <Answer>
            <p>Your Answer</p>
          </Answer>
        </AnswersWrapper>
        <IconsWrapper>
          <div>
            <Like />
          </div>
          <div>
            <DisLike />
          </div>

          <div>
            <Star />
          </div>
        </IconsWrapper>
      </Container>
    </>
  );
};

export default AnswerSection;
