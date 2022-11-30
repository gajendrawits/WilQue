import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 500px;
  height: 400px;
  top: 50%;
  left: 40%;
  margin: auto;
  border: 1px solid black;
  align-items: center;
  background-color: #e7f3fd;
  gap: 50px;
  border-radius: 10px;
`;

export const CrossIcon = styled.div`
  cursor: pointer;
  text-align: end;
  margin-top: 5px;
`;

export const Qheading = styled.div`
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const QuestionText = styled.div`
  width: 280px;

  .question {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonSubmit = styled.div`
  width: 150px;
`;

export const ButtonQuestion = styled.div`
  width: 150px;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
`;
