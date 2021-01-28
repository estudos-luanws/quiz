import { QuizContainer } from ".."
import QuizBackground from "../../src/components/QuizBackground"
import QuizLogo from "../../src/components/QuizLogo"
import { Widget } from "../../src/components/Widget"
import db from '../../db.json'
import { Question } from "../../src/models/question"
import QuestionWidget from "./QuestionWidget"
import { SyntheticEvent, useEffect, useState } from "react"

type ScreenState = 'LOADING' | 'QUIZ' | 'RESULT'

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h2>Quiz</h2>
      </Widget.Header>

      <Widget.Content>
        Carregando...
      </Widget.Content>
    </Widget>
  )
}

export default function QuizPage() {
  const [screenState, setScreenState] = useState<ScreenState>('LOADING')
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const totalQuestions = db.questions.length

  useEffect(() => {
    setQuestions(db.questions)
    setScreenState('QUIZ')
  }, [])

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex < totalQuestions) setQuestionIndex(nextQuestionIndex)
    else setScreenState('RESULT')
  }

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        {screenState === 'QUIZ' && (
          <QuestionWidget
            onSubmit={handleSubmit}
            question={questions[questionIndex]}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
          />
        )}
        {screenState === 'LOADING' && <LoadingWidget />}
        {screenState === 'RESULT' && (
          <div>
            Você acertou X questões, parabéns!
          </div>
        )}
      </QuizContainer>
    </QuizBackground>
  )
}