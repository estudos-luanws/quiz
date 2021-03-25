import styled from 'styled-components'

const QuizBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.mainBg};
  background-image: url(${(props) => props['data-background']});
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(
          transparent, 
          ${({ theme }) => theme.colors.mainBg}), 
          url(${(props) => props['data-background']}
        );
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
