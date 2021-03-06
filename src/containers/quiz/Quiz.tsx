import React from 'react'
import ActiveQuiz from '../../components/active-quiz/ActiveQuiz'
import FinishedQuiz from '../../components/finished-quiz/FinishedQuiz'
import { quizItem, QuizState, userAnswer } from '../../types/types'
import './Quiz.css'

class Quiz extends React.Component<{}, QuizState> {
  state: QuizState = {
    activeQuestion: 1,
    userAnswer: null,
    isFinished: true,
    results: [],
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

  handleResult = (answer: userAnswer): void => {
    const { activeQuestion } = this.state

    const isExistResult = (): boolean => {
      const existResult = this.state.results.find(
        (result) => result.id === activeQuestion
      )
      return existResult ? true : false
    }

    if (isExistResult()) {
      this.setState({
        userAnswer: answer!,
      })
      return
    }

    this.setState({
      results: [
        ...this.state.results,
        { id: activeQuestion, status: answer!.status },
      ],
      userAnswer: answer!,
    })
  }

  onAnswerClickHandler = (id: number): void => {
    const userAnswer = this.state.userAnswer
    const activeQuestion = this.state.activeQuestion
    const questions = this.getQuestion(this.state.activeQuestion)

    if (userAnswer) {
      if (userAnswer.status === 'success') {
        return
      }
    }

    if (questions?.correctAnswerId === id) {
      this.handleResult({ id, status: 'success' })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: activeQuestion + 1,
            userAnswer: null,
          })
        }
        window.clearTimeout(timeout)
      }, 500)
    } else {
      this.handleResult({ id, status: 'error' })
    }
  }

  getQuestion = (id: number): quizItem | undefined => {
    return this.state.quiz.find((item) => item.id === id)
  }

  isQuizFinished = (): boolean =>
    this.state.activeQuestion === this.state.quiz.length

  retryHandler = () => {
    this.setState({
      activeQuestion: 1,
      userAnswer: null,
      isFinished: false,
      results: [],
    })
  }

  render() {
    return (
      <div className="Quiz-main">
        <div className="Quiz-wrapper">
          <h1>Use your brain</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetryClick={this.retryHandler}
            />
          ) : (
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
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
