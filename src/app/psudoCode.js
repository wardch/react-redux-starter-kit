/*
1. get the colors going.
2. write a script that creates all of the features files off the bat. with empty defaults.
3. You need to be able to write the state of the app in middleware and the

const exampleState = {
  columns: {
    column1: {
      cards: [{
        cardId: 1,
        text: 'Sample ToDO thing',
        columnId: 1,
      }],
      title: 'Sample Title'
    }
  }
}

APP => COLUMN => CARD

APP => (columnId: 1)
  Column
  /*
  1. The column will be connected to the state, with the columnId can get:
  2. Its title
  3. Its cards
  4. There will be an addButton div, that opens a window prompt. We save the output from this,
  and then dispatch an addCard action => with the card info has the payload. The
  function should add the card to the correct part of the state, and assign the card
  and ID.

  Column
  Column => (cards: array)
    Card => (card: object)
    Card
    Card
    Card
      /*
      1. The card component will get an object and display it.
      2. There will be a left and right arrow, they will both have moveCard functions
      with the cardObject, and the targetColumn to add the card too.
      The move function should remove the card from its current column
      and then add a card to the target column.

// use a grid for the css, and divs.
*/
