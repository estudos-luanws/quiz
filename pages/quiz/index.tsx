import db from '../../db.json'
import QuizScreen from "../../src/screens/quiz"

export default function QuizPage() {
  return (
    <QuizScreen quiz={db} />
  )
}