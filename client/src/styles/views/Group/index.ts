import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 25px;
`;

export const RightWrapper = styled.div``;

export const LeftWrapper = styled.div``;

export const Card = styled.div`
  display: flex;
  background-image: url(${background});
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: 450px;
  align-items: center;
  gap: 50px;
  border-radius: 17px;
`;

export const CardHeading = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5cacf5;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const CardBody = styled.div`
  width: 280px;
  height: 220px;
  background-color: aliceblue;
  text-align: center;
  font-size: 20px;
`;

export const CardText = styled.div``;

export const CardButton = styled.div`
  width: 150px;
  height: 80px;
`;
