const Deck = ({ deckData, setSelectedDeck }) => {
  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  const selectAndShuffleDeck = () => {
    console.log(deckData);
    setSelectedDeck({ name: deckData.name, cards: shuffleDeck(deckData.cards) });
  }

  return (
    <div className="deck-face" onClick={selectAndShuffleDeck}>
      {deckData.name}
    </div>
  )
}

export default Deck