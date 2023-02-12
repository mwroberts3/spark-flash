import { useState } from 'react'

const Card = ({ cardData }) => {
  const [currentCard, setCurrentCard] = useState(cardData)
  const [questionIndex, setQuestionIndex] = useState(0)
  const { questions, answers } = currentCard;

  const revealAnswer = (e) => {
    e.target.children[1].style.display = 'block';

    if (cardData.questions.length > 1) setQuestionIndex((questionIndex) => questionIndex + 1);
  }

  return (
    <div className='flash-card' onClick={revealAnswer}>
      <p style={{ marginRight: 10, paddingBottom: 10 }}>  {questions[questionIndex]}
      </p>
      <p style={{ display: 'none' }}>
        {answers[questionIndex]}
      </p>
    </div>
  )
}

export default Card
