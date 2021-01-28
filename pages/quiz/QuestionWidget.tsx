import { Widget } from "../../src/components/Widget"
import { Question } from "../../src/models/question"

interface QuestionWidgetProps {
  question: Question
  totalQuestions: number
  questionIndex: number
}

const QuestionWidget: React.FC<QuestionWidgetProps> = function (props) {
  const { question, totalQuestions, questionIndex } = props
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

        <form>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`

            return (
              <Widget.Topic
                htmlFor={alternativeId}
              >
                {alternative}
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
              </Widget.Topic>
            )
          })}
        </form>

        <pre>
          {JSON.stringify(question, null, 4)}
        </pre>
      </Widget.Content>
    </Widget>
  )
}

export default QuestionWidget