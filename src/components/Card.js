import { useState } from 'react'

const Card = ({ cardData, setCardIndex, rightWrongAnswers, setRightWrongAnswers }) => {
  const { questions, answers } = cardData;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const revealAnswer = () => {
    if (!showAnswer) setQuestionIndex((index) => {
      setShowAnswer(true);
      index = index + 1;
      if (index === questions.length) return 0;
      else return index;
    });
    if (showAnswer) setAnswerIndex((index) => {
      setShowAnswer(false);
      index = index + 1;
      if (index === questions.length) return 'answered';
      else return index;
    });
  }

  const logAnswer = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === 'Right') {
      setRightWrongAnswers((answers) => {
        answers.right++;
        return answers;
      })
    } else {
      setRightWrongAnswers((answers) => {
        answers.wrong++;
        return answers;
      })
    }

    setShowAnswer(false);
    setAnswerIndex(0);
    setCardIndex((index) => {
      index = index + 1;
      return index;
    });
  }

  return (
    <div className='flash-card'>
      {
        answerIndex !== 'answered' ?
          <p style={{ marginRight: 10, paddingBottom: 10 }} onClick={revealAnswer}>
            {!showAnswer ? questions[questionIndex] : answers[answerIndex]}
          </p> :
          <div className='question-answered-prompt' onClick={logAnswer}>
            <p>Right</p>
            <p>Wrong</p>
          </div>
      }
    </div>
  )
}

export default Card
