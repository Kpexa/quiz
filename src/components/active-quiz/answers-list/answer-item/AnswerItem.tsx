import React from 'react'
import { AnswerItemProps } from '../../../../types/types'
import './AnswerItem.css'

const AnswerItem = ({ answer, onAnswerClick, userAnswer }: AnswerItemProps) => {
  const cls = ['AnswerItem']

  if (userAnswer?.id === answer.id) {
    cls.push(userAnswer.status)
  }

  return (
    <li className={cls.join(' ')} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  )
}

export default AnswerItem
