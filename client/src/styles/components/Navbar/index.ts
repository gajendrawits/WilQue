import styled from "styled-components";
import background from "assets/images/background.png";

export const NavbarContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
`;
export const ButtonWrapper = styled.div`
  padding-left: 1.5vw;
  display: flex;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
export const ButtonSignup = styled.div`
  width: 150px;
`;

export const ButtonLogin = styled.div`
  width: 150px;
`;

export const ButtonLogout = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  .searchbar {
    border-radius: 20px;
    text-align: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  width: 350px;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  margin-top: 2px;
`;

export const UserWrapper = styled.div`
  display: flex;
  background-color: white;
  color: black;
  border-radius: 20px;
  width: 250px;
  gap: 5px;
  justify-content: center;
`;

export const UserData = styled.div`
  margin-top: 2px;
`;
