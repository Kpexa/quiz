import React from 'react'
import { AnswerItemProps } from '../../../../types/types'
import classes from './AnswerItem.module.css'

const AnswerItem = ({ answer, onAnswerClick }: AnswerItemProps) => {
  return (
    <li
      className={classes.answer_item}
      onClick={() => onAnswerClick(answer.id)}
    >
      {answer.text}
    </li>
  )
}

export default AnswerItem
