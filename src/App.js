import React from 'react';
import List from './List';

function App(props) {
  const arrayOfLists = [];
  const allCards = props.store.allCards;
  for (let item of props.store.lists) {
    let arrayOfCards = [];
    for (let card of Object.values(allCards)) {
      console.log(card);
      if (item.cardIds.includes(card.id)) {
        arrayOfCards.push(card);
      }
    }
    arrayOfLists.push(<List key={item.id} id={item.id} header={item.header} cards={arrayOfCards} />);
  }
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arrayOfLists}
      </div>
    </main>
  );
}

export default App;
