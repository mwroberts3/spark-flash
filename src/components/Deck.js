const Deck = ({ deckData, setSelectedDeck }) => {
  const selectAndShuffleDeck = () => {
    setSelectedDeck(deckData);
  }

  return (
    <div className="deck-face" onClick={selectAndShuffleDeck}>
      {deckData.name}
    </div>
  )
}

export default Deck