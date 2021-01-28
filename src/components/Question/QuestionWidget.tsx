import { SyntheticEvent, useState } from "react"
import Form from "../Form"
import Button from "../Form/Button"
import { Widget } from "../Widget"
import { Question } from "../../models/question"
import AlternativesForm from "../AlternativesForm"

interface Props {
  question: Question
  totalQuestions: number
  questionIndex: number
  onSubmit(event: SyntheticEvent): void
  addResult(result: boolean): void
}

const QuestionWidget: React.FC<Props> = function (props) {
  const { question, totalQuestions, questionIndex, onSubmit, addResult } = props
  const questionId = `question__${questionIndex}`
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState<boolean>(false)
  const [selectedAlternative, setSelectedAlternative] = useState<number | undefined>(undefined)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined

  function handleOnSubmit(event: SyntheticEvent) {
    event.preventDefault()
    setIsQuestionSubmitted(true)
    setTimeout(() => {
      addResult(isCorrect)
      setIsQuestionSubmitted(false)
      setSelectedAlternative(undefined)
      onSubmit(event)
    }, 2 * 1000)
  }

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

        <AlternativesForm onSubmit={handleOnSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`
            const isSelected = selectedAlternative === index
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'

            return (
              <Widget.Topic
                key={index}
                htmlFor={alternativeId}
                selected={isSelected}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                {alternative}
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(index)}
                  checked={isSelected}
                  type="radio"
                />
              </Widget.Topic>
            )
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget