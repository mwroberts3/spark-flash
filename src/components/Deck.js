import Card from "./Card"

const Deck = ({ deckData }) => {
  return (
    <div className="deck-face">
      {deckData.name}
      {/* {deckData.cards.map((card, i) => <Card key={i} cardData={card} />)} */}
    </div>
  )
}

export default Deck