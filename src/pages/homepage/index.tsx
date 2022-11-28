import React from 'react'
import Logo from 'assets/svg/witslogo'

import Button from 'components/Button'

import { MainContainer } from 'styles/pages/homepage'

const HomePage = () => {
  return (
    <MainContainer>
      <Logo />
      <p>Please Login In Wil Que</p>
      <Button label="Submit data" />
    </MainContainer>
  )
}

export default HomePage
