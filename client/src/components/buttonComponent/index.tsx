import React from 'react'
import styled from 'styled-components'
export interface ButtonProps {
  name: string
  onClick?: () => void
}
const Button = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  color: white;
  border-radius: 8px;
  background-color: #0808ed;
`
const index = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>{name}</Button>
    </>
  )
}

export default index
