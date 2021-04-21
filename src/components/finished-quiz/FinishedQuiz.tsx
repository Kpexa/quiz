import React from 'react'
import { FinishedQuizProps } from '../../types/types'
import './FinishedQuiz.css'

const FinishedQuiz = ({ results, quiz }: FinishedQuizProps) => {
  const successCount = results.reduce((acc, item) => {
    if (item.status === 'success') {
      acc++
    }
    return acc
  }, 0)

  return (
    <div className="FinishedQuiz">
      <ul>
        {quiz.map((quizItem) => {
          const cls = [
            'fa',
            results.find((resultItem) => resultItem.id === quizItem.id)
              ?.status === 'error'
              ? 'fa-times FinishedQuiz-error'
              : 'fa-check FinishedQuiz-success',
          ]

          return (
            <li key={quizItem.id}>
              <strong>{quizItem.id}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>

      <p>
        Correct {successCount} from {quiz.length}
      </p>

      {/* <button>Try again</button> */}
    </div>
  )
}

export default FinishedQuiz
