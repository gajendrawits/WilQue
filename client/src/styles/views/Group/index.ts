import styled from "styled-components";
import background from "assets/images/background.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 25px;
`;

export const RightWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const Card = styled.div`
  display: flex;
  background-image: url(${background});
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  align-items: center;
  gap: 50px;
  border-radius: 17px;
`;

export const CardHeading = styled.div`
  width: 100%;
  max-width: 200px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5cacf5;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
`;

export const CardBody = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 10px 5px 30px 5px;
  background-color: aliceblue;
  font-size: 20px;
`;

export const CardText = styled.div`
  text-align: center;
`;

export const CardItems = styled.ol``;

export const CardItem = styled.li`
  padding: 10px 0px;
`;

export const CardButton = styled.div`
  max-width: 150px;
  width: 100%;
  padding: 20px 20px;
`;
