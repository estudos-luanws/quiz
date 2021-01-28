import { SyntheticEvent } from "react"
import Form from "../../src/components/Form"
import Button from "../../src/components/Form/Button"
import { Widget } from "../../src/components/Widget"
import { Question } from "../../src/models/question"

interface Props {
  question: Question
  totalQuestions: number
  questionIndex: number
  onSubmit(event: SyntheticEvent)
}

const QuestionWidget: React.FC<Props> = function (props) {
  const { question, totalQuestions, questionIndex, onSubmit } = props
  const questionId = `question__${questionIndex}`

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

        <Form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`

            return (
              <Widget.Topic
                htmlFor={alternativeId}
              >
                {alternative}
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
              </Widget.Topic>
            )
          })}
          <Button type="submit">
            Confirmar
          </Button>
        </Form>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget