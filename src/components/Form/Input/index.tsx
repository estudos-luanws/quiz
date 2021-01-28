import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const InputBase = styled.input`
  padding: 16px;
  background-color: transparent;
  border: solid 1px gray;
  border-radius: 5px;
  color: white;
  font-size: 12pt;
  flex: 1;
`

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<Props> = function (props) {
  return (
    <Container>
      <InputBase {...props} />
    </Container>
  )
}

export default Input