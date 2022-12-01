import React, { useState } from 'react'
import SignModal from '../modal/signUpModal'
import LoginModal from '../modal/loginModal'
import styled from 'styled-components'
import background from '../../assets/images/background.png'
import logo from '../../assets/images/logoWits.png'


const index = () => {
  const NavbarContainer = styled.div`
    background-image: url(${background});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
  `
  const ButtonWrapper = styled.div`
    padding-left: 1.5vw;
    display: flex;
    gap: 1rem;
  `
  const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
  `
  const ButtonSignup = styled.button`
    background-color: white;
    border: none;
    padding: 0.5rem 2.5rem;
    border-radius: 15px;
  `
  const ButtonLogin = styled.button`
    background-color: blue;
    border: none;
    color: white;
    padding: 0.5rem 2.5rem;
    border-radius: 15px;
  `

  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalOpenSignup, setIsOpenSignup] = useState(false)

  function openModalLogin() {
    setIsOpen(true)
  }
  function openModalSignup() {
    setIsOpenSignup(true)
  }
  return (
    <NavbarContainer>
      <OptionWrapper>
        <img src={logo} />
        <div>option 1</div>
        <div>option 1</div>
        <div>option 1</div>
      </OptionWrapper>

      <ButtonWrapper>
        <ButtonSignup name="signup" onClick={openModalSignup}>
          SignUp
        </ButtonSignup>
        <SignModal modalIsOpen={modalOpenSignup} setIsOpen={setIsOpenSignup} />
        <ButtonLogin name="login" onClick={openModalLogin}>
          Login
        </ButtonLogin>
        <LoginModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </ButtonWrapper>
    </NavbarContainer>
  )
}

export default index
