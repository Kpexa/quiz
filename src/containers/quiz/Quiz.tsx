import React from 'react'
import classes from './Quiz.module.css'

type QuizState = {
  quizes: any[]
}

class Quiz extends React.Component<{}, QuizState> {
  state: QuizState = {
    quizes: [],
  }

  render() {
    return (
      <div className={classes.quiz_main}>
        <h1>Quiz</h1>
      </div>
    )
  }
}

export default Quiz
