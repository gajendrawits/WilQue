import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  textarea.ant-input {
    width: 400px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Error = styled.p`
  color: #eb1d36;
`
