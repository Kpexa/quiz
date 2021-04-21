export type QuizState = {
  results: results
  isFinished: boolean
  activeQuestion: number
  userAnswer: userAnswer
  quiz: quizItem[]
}

export type TAnswer = {
  id: number
  text: string
}

export type ActiveQuizProps = {
  answers: TAnswer[]
  question: string
  correctAnswerId: number
  quizLength: number
  activeQuestion: number
  userAnswer: userAnswer
  onAnswerClick(id: number): void
}

export type AnswersListProps = {
  answers: TAnswer[]
  userAnswer: userAnswer
  onAnswerClick(id: number): void
}

export type AnswerItemProps = {
  answer: TAnswer
  userAnswer: userAnswer
  onAnswerClick(id: number): void
}

export type FinishedQuizProps = {
  results: results
  quiz: quizItem[]
  onRetryClick(): void
}

export type quizItem = {
  id: number
  answers: TAnswer[]
  question: string
  correctAnswerId: number
}

export type userAnswer = {
  id: number
  status: 'success' | 'error'
} | null

export type results = {
  id: number
  status: 'success' | 'error'
}[]
