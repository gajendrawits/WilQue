import React from 'react'
import styled from 'styled-components'

const TextInput = styled.input`
  padding: 1rem 0;
  outline: none;
  border: none;
`
const Label = styled.label``
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 1rem;
`
export interface LoginProps {
  name?: string
  type?: string
}

const index = ({ name, type }: LoginProps) => {
  return (
    <InputWrapper>
      <Label>{name}</Label>
      <TextInput type={type} name={name} />
    </InputWrapper>
  )
}

export default index
