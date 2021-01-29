import { GetServerSideProps } from "next/types"
import { Quiz } from "../../src/models/quiz"
import QuizScreen from "../../src/screens/quiz"

interface Props {
  quiz: Quiz
}

const ExternalQuizPage: React.FC<Props> = function (props) {
  const { quiz } = props

  return (
    <QuizScreen quiz={quiz} />
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function (context) {
  const response = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
  const quiz = await response.json() as Quiz

  return {
    props: {
      quiz
    }
  }
}

export default ExternalQuizPage