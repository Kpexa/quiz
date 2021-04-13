import React from 'react'
import ActiveQuiz from '../../components/active-quiz/ActiveQuiz'
import { QuizState } from '../../types/types'
import classes from './Quiz.module.css'

class Quiz extends React.Component<{}, QuizState> {
  state: QuizState = {
    quiz: [
      {
        question: 'Who invented the World Wide Web, and when?',
        answers: [
          { id: 1, text: 'Ilon Mask, 2001' },
          { id: 2, text: 'Bill Gates, 1995' },
          { id: 3, text: 'Tim Berners-Lee, 1990' },
        ],
        correctAnswerId: 3,
      },
    ],
  }

  onAnswerClickHandler = (id: number) => {
    console.log(id)
  }

  render() {
    return (
      <div className={classes.quiz_main}>
        <div className={classes.quiz_wrapper}>
          <h1>Use your brain</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            correctAnswerId={this.state.quiz[0].correctAnswerId}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
