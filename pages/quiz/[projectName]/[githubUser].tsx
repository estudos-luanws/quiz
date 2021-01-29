import { GetServerSideProps } from "next/types"
import { ThemeProvider } from "styled-components"
import { Quiz } from "../../../src/models/quiz"
import QuizScreen from "../../../src/screens/quiz"

interface Props {
  quiz: Quiz
}

const ExternalQuizPage: React.FC<Props> = function (props) {
  const { quiz } = props

  return (
    <ThemeProvider theme={quiz.theme}>
      <QuizScreen quiz={quiz} />
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function (context) {
  const { projectName, githubUser } = context.query
  const response = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
  const quiz = await response.json() as Quiz


  return {
    props: {
      quiz
    }
  }
}

export default ExternalQuizPage