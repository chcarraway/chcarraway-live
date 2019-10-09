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
    if (i === card.length) { //shuffle deck and restart
        i = 0;
        alert("No new cards to display. Shuffling deck and starting over.")
        document.getElementById('card').innerHTML = "<h6>Click the button below to begin</h6>";
        cards = shuffle(cards);
    } else {
        var newCard = cards[card[i]];
        if (newCard.header === "") { //ignore card if it's blank
            i++;
            showCard();
        } else { //display card
        document.getElementById('card').innerHTML = '<h3>' + newCard.header + '</h3><br/><h6>' + newCard.body + '</h6>';
        i++;
        };
    };
};

document.getElementById("nextCard").addEventListener('click', showCard);