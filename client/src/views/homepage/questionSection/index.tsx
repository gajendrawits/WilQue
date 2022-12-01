import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import AnswerSection from "../answerSection";
import Button from "../../../components/buttonComponent";
import MyComponent from "components/RichText";
import FindAnswerImage from "../../../assets/svg/question_section_top.svg";
import QuestionSectionImage from "../../../assets/svg/find_answers.svg";

const QuesSection = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalProvideAnswers, setModalProvideAnswers] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const Container = styled.div`
    /* background-color: #1d2e88; */
    /* margin: 1rem; */
    display: flex;
    flex-direction: column;

    /* gap: 1.5rem; */
    /* padding: 2.4rem; */
    /* border: 1px solid; */
    justify-content: center;
    align-items: center;
  `;

  const QuestionContainer = styled.div`
    background-color: #1d2e88;
    padding: 1.2rem;
  `;

  const QuesWrapper = styled.div`
    border-radius: 10px;
  `;
  const QuestionSecImage = styled.img`
    width: 100%;
  `;
  const FindSolutionImage = styled.img``;

  const Wrapper = styled.div`
    background-color: #d9d9d9;
  `;
  const Question = styled.div`
    background-color: #d9d9d9;
    height: 5.3rem;
    overflow-y: scroll;
  `;
  const ButtonWrapper = styled.div`
    padding: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const PopupContainer = styled.div`
    margin: 2.5rem;
    .quill {
      margin-bottom: 1rem;
    }
    .ql-container {
      height: 150px;
    }
  `;
  const customStyles = {
    content: {
      padding: 0,
      margin: "auto",
      height: "fit-content",
    },
  };
  const customStylesComment = {
    content: {
      padding: 0,
      margin: "auto",
      height: "fit-content",
    },
  };

  const questions = [
    {
      id: 1,
      ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?  ",
    },
    {
      id: 2,
      ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it? ",
    },
    {
      id: 3,
      ques: "What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it?What’s the worst gift you’ve ever received, and what did you do about it? ",
    },
  ];
  return (
    <>
      <Container>
        <QuestionSecImage src={QuestionSectionImage} />
        <div>Find Your Solution </div>

        {questions.map((ques) => {
          return (
            <QuestionContainer>
              <Wrapper key={ques.id}>
                <QuesWrapper>
                  <Question> {ques.ques}</Question>
                  <ButtonWrapper>
                    <Button
                      onClick={() => {
                        setModalProvideAnswers(true);
                      }}
                      name="Give Answers"
                    />
                    <Modal
                      style={customStylesComment}
                      isOpen={modalProvideAnswers}
                      onRequestClose={() => {
                        setModalProvideAnswers(false);
                      }}
                      contentLabel="Example Modal"
                    >
                      <PopupContainer>
                        <MyComponent />
                        <Button name="Post Answer" />
                      </PopupContainer>
                    </Modal>
                    <Button
                      onClick={() => {
                        setIsOpen(true);
                      }}
                      name="View Answers"
                    />
                    <Modal
                      style={customStyles}
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                    >
                      <AnswerSection />
                    </Modal>
                  </ButtonWrapper>
                </QuesWrapper>
              </Wrapper>
            </QuestionContainer>
          );
        })}
        <FindSolutionImage src={FindAnswerImage} />
      </Container>
    </>
  );
};
export default QuesSection;
