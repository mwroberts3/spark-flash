import React from 'react'

const LiveDeckStats = ({ rightWrongAnswers }) => {
  // should have option to save to localstorage after all cards are answered

  return (
    <div>
      <p>Right: {rightWrongAnswers.right} Wrong: {rightWrongAnswers.wrong}</p>
    </div>
  )
}

export default LiveDeckStats