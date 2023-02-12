import Card from "./Card"

const Deck = ({ deckData }) => {
  return (
    <div>
      {deckData.cards.map((card, i) => <Card key={i} cardData={card} />)}
    </div>
  )
}

export default Deck