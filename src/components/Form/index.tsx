import { HTMLFactory } from 'react'
import styled from 'styled-components'

const Form: HTMLFactory<HTMLFormElement> = styled.form`
  display: flex;
  flex-direction: column;
`

export default Form