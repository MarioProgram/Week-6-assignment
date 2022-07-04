const expect = chai.expect;

describe('class to make cards', function() {
    it('checking length', function() {
        var x = createdDeck.length
        expect(x).to.equal(52)
    })
})

describe('Dealer function to deal cards', function() {
    it('should deal 26 cards to each player', function() {
        var x = player1.deck.length
        var y = player2.deck.length
        expect(x && y).to.equal(26)
    })
})