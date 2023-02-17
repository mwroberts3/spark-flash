import './global.css';
import { useState } from 'react';
import Deck from './components/Deck';
import Card from './components/Card';
import { decks } from './data';

function App() {
  const loadedDecks = decks;
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);

  console.log(loadedDecks);
  console.log(selectedDeck);

  return (
    <div className="App">
      {
        !selectedDeck ?
          loadedDecks.map((deck, i) => {
            return <Deck key={i} deckData={deck} setSelectedDeck={setSelectedDeck} />
          })
          :
          <div className='card-table'>
            <Card cardData={selectedDeck.cards[cardIndex]} setCardIndex={setCardIndex} />
          </div>
      }
    </div>
  );
}

export default App;
