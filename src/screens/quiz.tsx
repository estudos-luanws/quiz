import QuizBackground from "../../src/components/QuizBackground"
import QuizLogo from "../../src/components/QuizLogo"
import { Widget } from "../../src/components/Widget"
import { Question } from "../../src/models/question"
import QuestionWidget from "../../src/components/Question/QuestionWidget"
import { SyntheticEvent, useEffect, useState } from "react"
import { QuizContainer } from "../../pages"
import { Quiz } from "../models/quiz"

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

interface ResultWidgetProps {
  results: boolean[]
}

const ResultWidget: React.FC<ResultWidgetProps> = function ({ results }) {
  const numberOfCorrectAnswers = results.filter(result => result).length
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultados</h1>
      </Widget.Header>

      <Widget.Content>
        <p>Você acertou {numberOfCorrectAnswers} de {results.length} perguntas</p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              #{index + 1} Resultado: {result ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

interface Props {
  quiz: Quiz
}

const QuizScreen: React.FC<Props> = function (props) {
  const { quiz } = props

  const [screenState, setScreenState] = useState<ScreenState>('LOADING')
  const [results, setResults] = useState<boolean[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const totalQuestions = quiz.questions.length

  function addResult(result: boolean) {
    setResults(results => [...results, result])
  }

  useEffect(() => {
    setQuestions(quiz.questions)
    setScreenState('QUIZ')
  }, [])

  function handleSubmit(event: SyntheticEvent) {
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
            addResult={addResult}
            onSubmit={handleSubmit}
            question={questions[questionIndex]}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
          />
        )}
        {screenState === 'LOADING' && <LoadingWidget />}
        {screenState === 'RESULT' && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  )
}

export default QuizScreen