import { useState } from 'react'

const Card = ({ cardData }) => {
  const { questions, answers } = cardData;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const revealAnswer = () => {
    setShowAnswer(!showAnswer);
    if (!showAnswer) setQuestionIndex((index) => {
      index = index + 1;
      if (index === questions.length) return 0;
      else return index;
    });
    if (showAnswer) setAnswerIndex((index) => {
      index = index + 1;
      if (index === questions.length) return 0;
      else return index;
    });
  }

  return (
    <div className='flash-card' onClick={revealAnswer}>
      <p style={{ marginRight: 10, paddingBottom: 10 }}>
        {!showAnswer ? questions[questionIndex] : answers[answerIndex]}
      </p>
    </div>
  )
}

export default Card
