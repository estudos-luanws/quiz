import { HTMLFactory } from 'react'
import styled from 'styled-components'
import db from '../../../db.json'


const QuizBackground: HTMLFactory<HTMLDivElement> = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${db.bg});
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`

export default QuizBackground
