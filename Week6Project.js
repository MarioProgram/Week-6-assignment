let createdDeck = []; // is here make the deck a global variable
let emptydeck= []; // is here to swap cards back and forth to shuffle

class War{
    constructor() {
        this.player1 = player1;
        this.player2 = player2;
        this.score
    }
    //main menu to run through functions in order
    newGame(){
        cards.deckCreator()
        shuffle.start()
        this.dealer()
        this.cardDraw()
        this.final()
    }
    cardDraw(){
        let anouncement = '' //used to store winner of the round
        let p1Card = [];// these will used to store the results of the array.
        let p2Card = [];
        for (let i = 0; i < 26; i++) {
            p1Card = this.converter(player1.deck[i].amount)
            p2Card = this.converter(player2.deck[i].amount)
            anouncement = score.decider(p1Card, p2Card) //sends to function to check which card is bigger after converted
            score.scoreboard(i, player1.deck[i].suit, player1.deck[i].amount, player2.deck[i].suit, player2.deck[i].amount, anouncement) //sends results to function to add to a string 
        }
    }
    //Changes card to number to compare
    converter(x) {
        switch (x) {
            case 'Ace': return 14; //ace wins in my game
            break;
            case '2': return  2;
            break;
            case '3': return  3;
            break;
            case '4': return  4;
            break;
            case '5': return  5;
            break;
            case '6': return  6;
            break;
            case '7': return  7;
            break;
            case '8': return  8;
            break;
            case '9': return  9;
            break;
            case '10': return  10;
            break;
            case 'Jack': return  11;
            break;
            case 'Queen': return  12;
            break;
            case 'King': return  13;
            break;
        }
    } 

    dealer() {
        for (let i = 0; i < 52; i++){ //i will be used as the number for the deck array 
            if (i % 2 === 0) { //checks to see if i is even to push every other card
                player2.deck.push(createdDeck[i]) 
            } else {
                player1.deck.push(createdDeck[i])
            
            }   
        }
    }
    //puts all results in an aorganized string
    final() {
        console.log(score.winner()+ '\n' + '\n' + score.scoreScreen + 'Final scores' + '\n' + 'Player 1. ' + score.player1Score + '\n' + 'Player 2. ' + score.player2Score)
    }
}

class CardCreator {
    constructor() {
        this.suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        this.amount = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    }
    deckCreator() {
        for (let i = 0; i < this.suits.length; i++) { //this loops 4 time once for every suit
            for (let u = 0; u < this.amount.length; u++) { //this loops every amount
            let create = {amount: this.amount[u], suit: this.suits[i]}; //createa an opject with the suit name that is looping and the amount that is also looping
            createdDeck.push(create) ;
            }   
        }
    }
}

class Shuffle {
    constructor() {
    }
    //this function allows me to randomly replace the cards in the deck arrays with each other 
    randomizer(deckWithCards, deckWithNoCards) {
    let x = 52 //plugs into the random number generator 
    for (let i = 0; i < 52; i++) { 
        let r = Math.floor(Math.random() * x);//generates a random number and r allows me to plug the result into the arrays
        deckWithNoCards.push(deckWithCards[r]); //pushes the random result of r into the opposite array
        deckWithCards.splice(r,1);//deletes the result from the array to stop duplicates
        x--; // Minuses one since we deleted the result from the deck with no cards so number generator will choose a number within the array
    }
}

    //for loop allows me to shuffle the cards between each deck as many times as i want 
    start() {
        for (let i = 0; i < 21; i++){ 
    this.randomizer(createdDeck, emptydeck);
    this.randomizer(emptydeck, createdDeck);
        }
   
}        


}

class Player1 {
    constructor(){
        this.deck = [];
    }
    select(){
        
    }
}

class Player2{
    constructor(){
        this.deck = [];
    }
    select(){

    }
}
class ScoreKeeper{
    constructor(){
        this.player1Score = 0;
        this.player2Score = 0;
        this.scoreScreen = '';
    }
    //checks who has more wins and returns winner in a string
    winner(){
        if (this.player1Score > this.player2Score) {
            return 'PLAYER 1 IS THE WINNER';
        } else {
            return 'PLAYER 2 IS THE WINNER';
        }
            
    }
    //Check converted cards to see which ones bigger will add 1 to winner score and return a string
    decider(p1, p2) {
        if (p1 > p2) {
            this.player1Score  += 1;
            return 'Player 1 wins ';
        } else if (p1 < p2) {
            this.player2Score += 1;
            return 'Player 2 wins ';
        } else {
            return 'Players tie ';
        }
     }
     //adds the results of round, card number, types, and winner in one varaiable in order to log 
     scoreboard(round, suite1, amount1, suite2, amount2, result) {
        this.scoreScreen += 'Player 1 draws ' + amount1 + ' of ' + suite1 + '\n' + 'Player 2 draws ' + amount2 + ' of ' + suite2 + '\n' + result + 'Round ' + (round + 1) + '         ' + '\n' + '\n';
     }

}
let score = new ScoreKeeper
let player1 = new Player1
let player2 = new Player2
let cards = new CardCreator
let shuffle = new Shuffle
let startGame = new War
startGame.newGame()


