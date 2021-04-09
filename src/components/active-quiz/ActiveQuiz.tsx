import React from 'react'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = () => {
  return (
    <div className={classes.active_quiz}>
      <p className={classes.question}>
        <span>
          <strong>1. </strong>
          How are U?
        </span>
        <small>3 of 9</small>
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default ActiveQuiz
