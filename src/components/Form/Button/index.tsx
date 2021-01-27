import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  padding: 8px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export default Button