import React from 'react'
import { AnswersListProps } from '../../../types/types'
import AnswerItem from './answer-item/AnswerItem'
import classes from './AnswersList.module.css'

const AnswersList = ({ answers, onAnswerClick }: AnswersListProps) => {
  return (
    <ul className={classes.answers_list}>
      {answers.map((answer) => {
        return (
          <AnswerItem
            key={answer.id}
            answer={answer}
            onAnswerClick={onAnswerClick}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList
