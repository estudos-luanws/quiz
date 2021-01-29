import styled from 'styled-components'
import { useRouter } from 'next/router'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { Widget } from '../src/components/Widget'
import { SyntheticEvent, useState } from 'react'
import Input from '../src/components/Form/Input'
import Form from '../src/components/Form'
import Button from '../src/components/Form/Button'
import QuizBackground from '../src/components/QuizBackground'
import db from '../db.json'

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
  const router = useRouter()
  const [name, setName] = useState<string>('')

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <Form onSubmit={onSubmit}>
              <p>
                Teste seus conhecimentos sobre Zelda e divirta-se criando o seu AluraQuiz!
              </p>
              <Input
                placeholder="Digite seu nome..."
                type="text"
                onChange={e => setName(e.target.value)}
              />
              <Button type="submit" disabled={!name}>
                Jogar
              </Button>
            </Form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <ul>
              {db.external.map((url, index) => {
                const [projectName, authorName] = url
                  .replace(/https?:\/\//g, '')
                  .replace('.vercel.app', '')
                  .replace('/', '')
                  .split('.')

                return (
                  <li key={index}>
                    <Widget.Topic as="a" href={url}>
                      {`${authorName}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/estudos-luanws/quiz" />
    </QuizBackground>
  )
}
