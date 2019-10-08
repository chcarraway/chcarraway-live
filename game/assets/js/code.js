function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var i = 0;
cards = shuffle(cards);
var card = Object.keys(cards);

function showCard() {
    if (i === card.length) {
        i = 0;
        alert("No new cards to display. Shuffling deck and starting over.")
        document.getElementById('card').innerHTML = "Click the button below to begin";
        cards = shuffle(cards);
    } else {
        var newCard = cards[card[i]];
        document.getElementById('card').innerHTML = newCard;
        i++;
    };
};

document.getElementById("nextCard").addEventListener('click', showCard);