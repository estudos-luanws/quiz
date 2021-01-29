import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
  padding: 12px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  flex: 1;
  transition: 0.3s;
  
  &:hover {
    opacity: 0.5;
  }
`

export default Button