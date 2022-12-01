import React, { useState } from 'react'
import Modal from 'react-modal'

//import Login from '../../components/login'
import SignUp from '../signupPage'

const signUpModal = (props: any) => {
  const { modalIsOpen, setIsOpen } = props

  const customStyles = {
    content: {
      padding: 0,
      border: 'none',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={setIsOpen} style={customStyles} contentLabel="Example Modal">
        <SignUp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </Modal>
    </>
  )
}

export default signUpModal
