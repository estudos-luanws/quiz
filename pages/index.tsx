import styled from 'styled-components'
import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { Widget } from '../src/components/Widget'

const Background = styled.div`
  background-image: url(${db.bg});
  flex: 1;
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <Background>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>fasdfasdf asdfasdfas dfsdfsdasfd</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>fasdfasdf asdfasdfas dfsdfsdasfd</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/estudos-luanws/quiz" />
    </Background>
  )
}
