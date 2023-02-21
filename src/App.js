import './global.css';
import { useState } from 'react';
import { decks } from './data';
import Deck from './components/Deck';
import Card from './components/Card';
import LiveDeckStats from './components/LiveDeckStats';

function App() {
  const loadedDecks = decks;
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [rightWrongAnswers, setRightWrongAnswers] = useState({ right: 0, wrong: 0 });
  const [cardIndex, setCardIndex] = useState(0);

  // console.log(loadedDecks);
  // console.log(selectedDeck);

  return (
    <div className="App">
      {
        !selectedDeck ?
          loadedDecks.map((deck, i) => {
            return <Deck key={i} deckData={deck} setSelectedDeck={setSelectedDeck} />
          })
          :
          <div className='card-table'>
            <LiveDeckStats rightWrongAnswers={rightWrongAnswers} />
            <Card cardData={selectedDeck.cards[cardIndex]} setCardIndex={setCardIndex} rightWrongAnswers={rightWrongAnswers} setRightWrongAnswers={setRightWrongAnswers} />
          </div>
      }
    </div>
  );
}

export default App;
