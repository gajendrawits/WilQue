import React from 'react'
import Logo from 'assets/svg/witslogo'

import Button from 'components/Button'

import { MainContainer } from 'styles/pages/homepage'

const HomePage = () => {
  return (
    <MainContainer>
      <Logo />
      <Button label="Submit" />
    </MainContainer>
  )
}

export default HomePage
