import { HTMLFactory } from 'react'
import styled from 'styled-components'

const Button: HTMLFactory<HTMLButtonElement> = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  padding: 12px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  flex: 1;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export default Button