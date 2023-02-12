import './global.css';
import { useState } from 'react';
import Deck from './components/Deck';
import { decks } from './data';

function App() {
  const [loadedDecks, setLoadedDecks] = useState(decks);

  console.log(loadedDecks);

  return (
    <div className="App">
      {loadedDecks.map((deck, i) => <Deck key={i} deckData={deck} />)}
    </div>
  );
}

export default App;
