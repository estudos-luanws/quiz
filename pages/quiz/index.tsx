import { QuizContainer } from ".."
import QuizBackground from "../../src/components/QuizBackground"
import QuizLogo from "../../src/components/QuizLogo"
import { Widget } from "../../src/components/Widget"
import db from '../../db.json'
import { Question } from "../../src/models/question"
import QuestionWidget from "./QuestionWidget"

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        Carregando...
      </Widget.Content>
    </Widget>
  )
}

export default function QuizPage() {
  const questions: Question[] = db.questions
  const totalQuestions = db.questions.length

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {questions.map((question, index) => (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={index}
          />
        ))}
        {/* <LoadingWidget /> */}
      </QuizContainer>
    </QuizBackground>
  )
}