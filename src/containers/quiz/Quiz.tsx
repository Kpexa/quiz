import React from 'react'
import ActiveQuiz from '../../components/active-quiz/ActiveQuiz'
import { quizItem, QuizState } from '../../types/types'
import './Quiz.css'

class Quiz extends React.Component<{}, QuizState> {
  state: QuizState = {
    activeQuestion: 1,
    userAnswer: null,
    quiz: [
      {
        id: 1,
        question: 'Who invented the World Wide Web, and when?',
        answers: [
          { id: 1, text: 'Ilon Mask, 2001' },
          { id: 2, text: 'Bill Gates, 1995' },
          { id: 3, text: 'Tim Berners-Lee, 1990' },
        ],
        correctAnswerId: 3,
      },
      {
        id: 2,
        question: 'How many stripes are there on the US flag?',
        answers: [
          { id: 1, text: '10' },
          { id: 2, text: '13' },
          { id: 3, text: '15' },
        ],
        correctAnswerId: 2,
      },
      {
        id: 3,
        question: 'What country has the most islands in the world?',
        answers: [
          { id: 1, text: 'Sweden' },
          { id: 2, text: 'Norway' },
          { id: 3, text: 'New Zealand' },
        ],
        correctAnswerId: 1,
      },
      {
        id: 4,
        question:
          'Which language has the most words (according to dictionary entries)?',
        answers: [
          { id: 1, text: 'Japanese' },
          { id: 2, text: 'Chinese' },
          { id: 3, text: 'English' },
        ],
        correctAnswerId: 3,
      },
    ],
  }

  onAnswerClickHandler = (id: number): void => {
    const questions = this.getQuestion(this.state.activeQuestion)

    if (questions?.correctAnswerId === id) {
      this.setState({
        userAnswer: { id, status: 'success' },
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            userAnswer: null,
          })
        }
        window.clearTimeout(timeout)
      }, 500)
    } else {
      this.setState({
        userAnswer: { id, status: 'error' },
      })
    }
  }

  getQuestion = (id: number): quizItem | undefined => {
    return this.state.quiz.find((item) => item.id === id)
  }

  isQuizFinished = (): boolean =>
    this.state.activeQuestion === this.state.quiz.length

  render() {
    return (
      <div className="Quiz-main">
        <div className="Quiz-wrapper">
          <h1>Use your brain</h1>
          <ActiveQuiz
            answers={this.getQuestion(this.state.activeQuestion)!.answers}
            question={this.getQuestion(this.state.activeQuestion)!.question}
            correctAnswerId={
              this.getQuestion(this.state.activeQuestion)!.correctAnswerId
            }
            quizLength={this.state.quiz.length}
            activeQuestion={this.state.activeQuestion}
            userAnswer={this.state.userAnswer}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
