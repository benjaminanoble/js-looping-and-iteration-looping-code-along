const cards = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, surprise) {
    let cards = []
    for ( let i = 0; i < names.length; i++ ) {
      cards.push( `Thank you, ${names[i]}, for the wonderful ${surprise} gift!` )
    }
    return cards
  }

  const firstNumber = 10

function countDown(firstNumber) {
    while(firstNumber > 0) {
        console.log(firstNumber);
        firstNumber -=1
    }
    console.log(firstNumber);
}