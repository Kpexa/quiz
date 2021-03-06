import React from 'react'
import Quiz from './containers/quiz/Quiz'
import Layout from './hoc/Layout/Layout'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    )
  }
}

export default App
