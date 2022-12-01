import React from 'react'
import styled from 'styled-components'

import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import Input from '../input'

// views/homepage/input'

import Button from '../buttonComponent'

const Wrapper = styled.div`
  /*position: relative;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35rem;
  background-color: lightgray;
  padding: 1.5rem 0 3rem 0;
  gap: 1.2rem;
  border-radius: 8px;
`
const Heading = styled.h2``
export interface LoginSignupProps {
  name: string
}
const Container = styled.div`
  display: flex;
  justify-content: center;
`
const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 70%;
  .ant-dropdown-trigger {
    width: 100%;
    padding: 1rem 0;
    background-color: white;
  }
  .ant-spaceP {
    display: flex;
    justify-content: space-between;
  }
  .dropDown {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  }
`
const Close = styled.p`
  width: 95%;
  display: flex;
  justify-content: end;
  font-size: 1.2rem;
  font-weight: 500;
`
const MemberWrapper = styled.p`
  span {
    color: blue;
  }
`
export interface LoginSignupProps {
  name: string
}

const items: MenuProps['items'] = [
  {
    label: <a>1st menu item</a>,
    key: '0',
  },
  {
    label: <a>2nd menu item</a>,
    key: '1',
  },
]
const index = (props: any) => {
  const { setIsOpen } = props

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={() => {
            setIsOpen(false)
          }}
        >
          X
        </Close>
        <Heading> SignUp Here</Heading>
        <Input name="Name" type="text" />
        <Input name="Email" type="text" />
        <Input name="Password" type="password" />
        <DropdownWrapper>
          <>Designation</>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="dropDown">
                Designation
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </DropdownWrapper>
        <Button name="Submit" />
        <MemberWrapper>
          Already a Member ? <span>Login Here!</span>
        </MemberWrapper>
      </Wrapper>
    </Container>
  )
}

export default index
