import styled from "styled-components";

export const KeyFeatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  /* width: 100%; */
`;

export const MidSection = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #b2a9ee;
  text-align: center;
`;
export const TextSection = styled.div`
  width: 100%;
  max-width: 400px;
  font-size: 28px;
  color: #f7d7bd;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin-top: 15px;
`;
export const ButtonSection = styled.div`
  width: 100%;
  max-width: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeyFeatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media (max-width: 1350px) {
    margin-top: 50px;
  }
  @media (max-width: 767px) {
    display: grid;
    margin-top: 0;
  }
`;
