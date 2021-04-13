import React from 'react'
import { ActiveQuizProps } from '../../types/types'
import classes from './ActiveQuiz.module.css'
import AnswersList from './answers-list/AnswerList'

const ActiveQuiz = ({ answers, question, onAnswerClick }: ActiveQuizProps) => {
  return (
    <div className={classes.active_quiz}>
      <p className={classes.question}>
        <span>
          <strong>1. </strong>
          {question}
        </span>
        <small>3 of 9</small>
      </p>
      <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  )
}

export default ActiveQuiz
