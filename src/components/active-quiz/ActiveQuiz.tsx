import React from 'react'
import { ActiveQuizProps } from '../../types/types'
import './ActiveQuiz.css'
import AnswersList from './answers-list/AnswerList'

const ActiveQuiz = ({
  answers,
  question,
  onAnswerClick,
  quizLength,
  activeQuestion,
  userAnswer,
}: ActiveQuizProps) => {
  return (
    <div className="ActiveQuiz-warapper">
      <p className="ActiveQuiz-question">
        <span>
          <strong>
            {activeQuestion}. {question}
          </strong>
        </span>
        <small>
          {activeQuestion} of {quizLength}
        </small>
      </p>
      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        userAnswer={userAnswer}
      />
    </div>
  )
}

export default ActiveQuiz
