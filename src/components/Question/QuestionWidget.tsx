import { SyntheticEvent, useState } from "react"
import Form from "../Form"
import Button from "../Form/Button"
import { Widget } from "../Widget"
import { Question } from "../../models/question"

interface Props {
  question: Question
  totalQuestions: number
  questionIndex: number
  onSubmit(event: SyntheticEvent)
}

const QuestionWidget: React.FC<Props> = function (props) {
  const { question, totalQuestions, questionIndex, onSubmit } = props
  const questionId = `question__${questionIndex}`
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState<boolean>(false)
  const [selectedAlternative, setSelectedAlternative] = useState<number | undefined>(undefined)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined

  return (
    <Widget>
      <Widget.Header>
        <h3>Pergunta {questionIndex + 1} de {totalQuestions}</h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
      />

      <Widget.Content>
        <h1>
          {question.title}
        </h1>
        <p>
          {question.description}
        </p>

        <Form onSubmit={(event) => {
          event.preventDefault()
          setIsQuestionSubmitted(true)
          setTimeout(() => {
            setIsQuestionSubmitted(false)
            onSubmit(event)
          }, 3 * 1000)
        }}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`
            const isCurrentAlternativeSelected = selectedAlternative === index

            return (
              <Widget.Topic
                key={index}
                htmlFor={alternativeId}
                selected={isCurrentAlternativeSelected}
              >
                {alternative}
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(index)}
                  type="radio"
                />
              </Widget.Topic>
            )
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          <p>Alternativa selecionada: {selectedAlternative}</p>
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </Form>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget