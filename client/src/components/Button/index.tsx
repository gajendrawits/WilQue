import React, { ReactElement } from 'react'
import { StyledButton } from 'styles/components/Button/index'

export interface IButtonProps {
  label: ReactElement | string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'contained' | 'outline'
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({ variant, label, type, ...rest }: IButtonProps) => (
  <StyledButton {...rest} type={type} variant={variant}>
    {label}
  </StyledButton>
)


export default Button
