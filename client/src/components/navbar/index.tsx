import React, { useState } from "react";
import SignModal from "components/modal/signUpModal";
import LoginModal from "components/modal/loginModal";
import {
  ButtonContainer,
  ButtonLogin,
  ButtonLogout,
  ButtonSignup,
  ButtonWrapper,
  IconWrapper,
  NavbarContainer,
  OptionWrapper,
  RightWrapper,
  SearchBarWrapper,
  UserData,
  UserWrapper,
} from "styles/components/Navbar";
import logo from "assets/images/logoWits.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalOpenSignup, setIsOpenSignup] = useState(false);
  const { control } = useForm();
  const openModalLogin = () => {
    setIsOpen(true);
  };

  const openModalSignup = () => {
    setIsOpenSignup(true);
  };

  return (
    <NavbarContainer>
      <OptionWrapper>
        <img src={logo} />
        <div>Our Company</div>
        <div>option 1</div>
        <div>option 1</div>
      </OptionWrapper>
      <SearchBarWrapper>
        <TextInput
          name={"searchbar"}
          placeholder="Search here"
          control={control}
          className="searchbar"
        />
      </SearchBarWrapper>
      <ButtonWrapper>
        {false ? (
          <ButtonContainer>
            <ButtonSignup onClick={openModalSignup}>
              <Button label="Sign Up" variant="contained" />
            </ButtonSignup>
            <ButtonLogin onClick={openModalLogin}>
              <Button label="Login" variant="contained" />
            </ButtonLogin>
          </ButtonContainer>
        ) : (
          <RightWrapper>
            <UserWrapper>
              <IconWrapper>
                <AccountCircleOutlinedIcon />
              </IconWrapper>
              <UserData>Aman kapoor</UserData>
            </UserWrapper>
            <ButtonLogout>
              <Button label="Logout" variant="contained" />
            </ButtonLogout>
          </RightWrapper>
        )}
      </ButtonWrapper>

      <SignModal modalIsOpen={modalOpenSignup} setIsOpen={setIsOpenSignup} />
      <LoginModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
