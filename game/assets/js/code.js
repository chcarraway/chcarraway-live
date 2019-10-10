/*
TODO:
build modal to get # of players and their names
restructure decay to be turns = rounds * players
rebuild Ongoing Effects table each turn
*/


rules = [];
players = 0;
currentPlayer = "Corey";
i = 0;
ruleCount = 0;
//cards = shuffle(cards); //commented out for decay testing
card = Object.keys(cards);
table = document.getElementById("ongoingtable");
tbody = document.getElementById("ongoingtbody");
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
function Rule(id, header, body, decay, player) {
    this.id = id;
    this.header = header;
    this.body = body;
    this.decay = decay;
    this.player = player;
}
function Player(id, name) {
    this.id = id;
    this.name = name;
}
function newTurn() {
    //decay loop
    //destroy ongoing effects table
    tbody.innerHTML = "";
    for (loop = 0; loop < ruleCount; loop++){
        if (rules[loop].decay > 0) {
            tbody.innerHTML += "<tr><td>" + rules[loop].id + "</td><td>" + rules[loop].header + "</td><td>" + rules[loop].body + "</td><td>" + rules[loop].decay + "</td><td>" + rules[loop].player + "</td></tr>"; //add rule to Ongoing Effects table
        }
        rules[loop].decay--; //decriment existing rules with decay
    }
    //change active player

    //call showCard
    showCard();
}
function showCard() {
    if (i === card.length) { //if 0 cards left in deck, shuffle deck and restart
        i = 0;
        alert("No new cards to display. Shuffling deck and starting over.");
        document.getElementById('card').innerHTML = "<h6>Click the button below to begin</h6>";
//        cards = shuffle(cards); //commented out for decay testing
    } else {
        var newCard = cards[card[i]];
        if (newCard.header === "") { //if card is blank, ignore this card and move on to the next
            i++;
            showCard();
        } else { //display card
            document.getElementById('card').innerHTML = '<h3>' + newCard.header + '</h3><br/><h6>' + newCard.body + '</h6>';
            i++;
            if (newCard.decay > 0) { //if card has a decay value...
                rule = new Rule(ruleCount, newCard.header, newCard.body, newCard.decay, currentPlayer); //create new rule
                rules.push(rule);
                ruleCount++;
            };
        };
    };
}
document.getElementById("nextCard").addEventListener('click', newTurn);