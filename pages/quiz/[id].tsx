import { GetServerSideProps } from "next/types"
import QuizScreen from "../../src/screens/quiz"

interface Props {
  quiz: string[]
}

const ExternalQuizPage: React.FC<Props> = function (props) {
  const { quiz } = props

  return (
    <div>
      Desafio
      <QuizScreen
        quiz={quiz}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async function (context) {
  const response = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
  const json = await response.json()
  const props: Props = {
    quiz: json
  }

  return {
    props
  }
}

export default ExternalQuizPage