import React from 'react'
import ActiveQuiz from '../../components/active-quiz/ActiveQuiz'
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
        <div className={classes.quiz_wrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    )
  }
}

export default Quiz
