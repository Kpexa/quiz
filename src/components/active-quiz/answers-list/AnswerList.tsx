import React from 'react'
import { AnswersListProps } from '../../../types/types'
import AnswerItem from './answer-item/AnswerItem'
import './AnswersList.css'

const AnswersList = ({
  answers,
  onAnswerClick,
  userAnswer,
}: AnswersListProps) => {
  return (
    <ul className=".AnswersList-wrapper">
      {answers.map((answer) => {
        return (
          <AnswerItem
            key={answer.id}
            answer={answer}
            userAnswer={userAnswer}
            onAnswerClick={onAnswerClick}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList
