import { GetServerSideProps } from "next/types"

export default function QuizPage() {
  return (
    <div>
      Quiz externo
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async function (context) {
  console.log(context.query.id)
  return {
    props: {}
  }
}