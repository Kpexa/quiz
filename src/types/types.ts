export type QuizState = {
  quiz: { answers: TAnswer[]; question: string; correctAnswerId: number }[]
}

export type TAnswer = {
  id: number
  text: string
}

export type ActiveQuizProps = {
  answers: TAnswer[]
  question: string
  correctAnswerId: number
  onAnswerClick(id: number): void
}

export type AnswersListProps = {
  answers: TAnswer[]
  onAnswerClick(id: number): void
}

export type AnswerItemProps = {
  answer: TAnswer
  onAnswerClick(id: number): void
}
