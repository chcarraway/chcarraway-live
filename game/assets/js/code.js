rules = [];
players = [];
currentPlayer = "Corey";
turn = 0;
i = 0;
ruleCount = 0;
activeRules = 0;
cards = shuffle(cards); //comment out for decay testing
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

function welcomeContinue() {
    $('#welcomeModal').modal('hide');
    $('#addPlayerModal').modal('show');
    document.getElementById('beginGame').disabled = true;
    document.getElementById('player').focus();
}

function addPlayerModal() {
    document.getElementById('addPlayerModalLabel').innerHTML = `Player ${1 + players.length}`;
    document.getElementById('player').value = "";
    document.getElementById('nameLabel').innerHTML = "What is your name?";
    if (players.length >= 2) {
        button = document.getElementById('beginGame');
        button.disabled = false;
        button.classList.remove("btn-secondary");
        button.classList.add("btn-danger");
        $('button').tooltip('disable');
    };
    document.getElementById('player').focus();
}

function addPlayer() {
    player = document.getElementById('player').value;
    players.push(player);
    addPlayerModal();
}

function beginGame() {
    $('#addPlayerModal').modal('hide');
    currentPlayer = players[turn];
}

function newTurn() {
    //change the text on the button
    document.getElementById('nextCard').innerHTML = "Next Turn";
    //destroy ongoing effects table
    tbody.innerHTML = "";
    //add items to table
    for (loop = 0; loop < ruleCount; loop++){
        if (rules[loop].decay > 0) {
            tbody.innerHTML += "</td><td>" + rules[loop].header + "</td><td>" + rules[loop].body + "</td><td>" + rules[loop].decay + "</td><td>" + rules[loop].player + "</td></tr>"; //add rule to Ongoing Effects table
        }
        if (rules[loop].decay == 0) {
            activeRules--
        }
        rules[loop].decay--; //decriment existing rules with decay
    }
    if (activeRules == 0) { //hide table if no rules
        table.classList.add("d-none")
    } else { //show table
        table.classList.remove("d-none")
    }
    //change active player
    currentPlayer = players[turn];
    document.getElementById('header').innerHTML = currentPlayer + '\'s Turn';
    turn++;
    if (turn === players.length) {
        turn = 0;
    };

    //call showCard
    showCard();
}

function showCard() {
    if (i === card.length) { //if 0 cards left in deck, shuffle deck and restart
        $('#shuffleModal').modal('show');
        i = 1;
        document.getElementById('card').innerHTML = "<h1>Drinking Game</h1>";
        cards = shuffle(cards); //comment out for decay testing
    } else {
        var newCard = cards[card[i]];
        if (newCard.header === "") { //if card is blank, ignore this card and move on to the next
            i++;
            showCard();
        } else { //display card
            document.getElementById('card').innerHTML = '<h3>' + newCard.header + '</h3><br/><h6>' + newCard.body + '</h6>';
            i++;
            if (newCard.decay > 0) { //if card has a decay value...
                var duration = newCard.decay * players.length;
                rule = new Rule(ruleCount, newCard.header, newCard.body, duration, currentPlayer); //create new rule
                rules.push(rule);
                ruleCount++;
                activeRules++
            };
        };
    };
}

function removeShake() {
    document.getElementById('addPlayerModal').classList.remove("shake");
}

function validate() {
    var player = document.getElementById('player').value;
    if (player == "" || player == null) {
        document.getElementById('nameLabel').innerHTML = "Please enter a name";
        document.getElementById('addPlayerModal').classList.add("shake");
        setTimeout(removeShake, 1000);
        document.getElementById('player').focus();
        return false;
    } else {
        addPlayer()
    }
}

document.getElementById("welcomeContinue").addEventListener('click', welcomeContinue);
document.getElementById("addPlayer").addEventListener('click', validate);
document.getElementById("beginGame").addEventListener('click', beginGame);
document.getElementById("nextCard").addEventListener('click', newTurn);