import styled from 'styled-components'

const QuizBackground = styled.img.attrs((props) => ({
  src: props['data-background']
}))`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  background-color: ${({ theme }) => theme.colors.mainBg};
  @media screen and (max-width: 500px) {
    object-fit: contain;
  }
`

export default QuizBackground
