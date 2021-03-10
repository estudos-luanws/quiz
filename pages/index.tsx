import styled from 'styled-components'
import { useRouter } from 'next/router'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Widget from '../src/components/Widget'
import { SyntheticEvent, useState } from 'react'
import Input from '../src/components/Form/Input'
import Form from '../src/components/Form'
import Button from '../src/components/Form/Button'
import QuizBackground from '../src/components/QuizBackground'
import Link from '../src/components/Link'
import { motion } from 'framer-motion'
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
    <QuizBackground data-background={db.bg}>
      <QuizContainer>
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <Form onSubmit={onSubmit}>
              <p>{db.description}</p>
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
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '100%' }
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Widget.Content>
            <ul>
              {db.external.map((url, index) => {
                const [projectName, githubUser] = url
                  .replace(/https?:\/\//g, '')
                  .replace('.vercel.app', '')
                  .replace('/', '')
                  .split('.')

                return (
                  <li key={index}>
                    <Link href={`/quiz/${projectName}/${githubUser}`}>
                      <Widget.Topic>
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </Link>
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
