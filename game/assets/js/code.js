rules = [];
players = [];
currentPlayer = "Corey";
turn = 0;
i = 0;
ruleCount = 0;
activeRules = 0;
card = Object.keys(cards);
table = document.getElementById("ongoingtable");
tbody = document.getElementById("ongoingtbody");
gameArea = document.getElementById("gameArea");
cat = "";

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
}

function addPlayerModal() {
    document.getElementById('addPlayerModalLabel').innerHTML = `Player ${1 + players.length}`;
    document.getElementById('player').value = "";
    document.getElementById('nameLabel').innerHTML = "What is your name?";
    if (players.length >= 2) {
        document.getElementById('nameLabel').innerHTML = "Add more players or click Begin Game to start!";
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
    cards = shuffle(cards);
}


function newTurn() {
    if (Array.isArray(players) && players.length === 0) {
        gameArea.innerHTML = "";
        $('#addPlayerModal').modal('show');
        document.getElementById('beginGame').disabled = true;
        document.getElementById('nextCard').innerHTML = "Start Game";
    } else {
    //change the text on the button
    document.getElementById('nextCard').innerHTML = "Next Turn";
    //destroy ongoing effects table
    tbody.innerHTML = "";
    //add items to table
    for (loop = 0; loop < ruleCount; loop++){
        if (rules[loop].decay > 0) {
            tbody.innerHTML += "<tr><td>" + rules[loop].header + "</td><td>" + rules[loop].body + "</td><td>" + rules[loop].decay + "</td><td>" + rules[loop].player + "</td></tr>"; //add rule to Ongoing Effects table
        }
        if (rules[loop].decay == 0) {
            activeRules--;
        }
        rules[loop].decay--; //decriment existing rules with decay
    }
    if (activeRules == 0) { //hide table if no rules
        table.classList.add("d-none");
    } else { //show table
        table.classList.remove("d-none");
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
}}

function showCard() {
    if (i === card.length) { //if 0 cards left in deck, shuffle deck and restart
        $('#shuffleModal').modal('show');
        i = 1;
        cards = shuffle(cards);
        showCard();
    } else {
        var newCard = cards[card[i]];
        if (newCard.header === "" || newCard.nac === "nac") { //if card is blank, or if card is not a card, ignore this card and move on to the next
            i++;
            showCard();
        } else { //display card
            newCard.contrib === undefined && (newCard.contrib = "AGDG") //if contrib is undefined, AGDG
            gameArea.innerHTML = '<div class="card shadow ' + newCard.category + '"> ' +
                '<div class="card-header border-0 w-100 bg-transparent"><h4>' + newCard.header + '</h4></div> ' +
                '<div class="card-body align-items-center d-flex justify-content-center"><p class="card-text ">' + newCard.body + '</p></div>' +
                '<div class="card-footer border-0 w-100 bg-transparent text-muted"><small class="">' + newCard.contrib + '</small></div></div>';
            i++;
        }
        if (newCard.decay > 0) { //if card has a decay value...
            var duration = newCard.decay * players.length;
            rule = new Rule(ruleCount, newCard.header, newCard.body, duration, currentPlayer); //create new rule
            rules.push(rule);
            ruleCount++;
            activeRules++;
        };
    };
};

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
        addPlayer();
    }
}

function displayCards() {
    $('#welcomeModal').modal('hide');
    for (x = 0; x < cards.length; x++) {
        var newCard = cards[card[x]];
        if (newCard.header === "") { //if card is blank, ignore this card and move on to the next
        } else { //display card
            if (newCard.nac === "nac") {//if card is not a card, make new container for the category
                gameArea.innerHTML += '<div class="row border category" id="' + newCard.category + '"></div>';
                cat = document.getElementById(newCard.category);
                cat.innerHTML += '<div class="card nac shadow ' + newCard.category + '"><h2 class="">' + newCard.header + '</h2><br /><br /><h6 class="">' + newCard.body + '</h6></div>';
            } else {//print card in category
                newCard.contrib === undefined && (newCard.contrib = "AGDG") //if contrib is undefined, AGDG
                cat.innerHTML += '<div class="card shadow ' + newCard.category + '"> ' +
                    '<div class="card-header border-0 w-100 bg-transparent"><h4>' + newCard.header + '</h4></div> ' +
                    '<div class="card-body align-items-center d-flex justify-content-center"><p class="card-text ">' + newCard.body + '</p></div>' +
                    '<div class="card-footer border-0 w-100 bg-transparent text-muted"><small class="">' + newCard.contrib + '</small></div></div>';
            }
        }
    }
}

$('#addPlayerModal').on('shown.bs.modal', function () {
    $('#player').focus()
})

document.getElementById("addPlayerModalForm").addEventListener('submit', function(e){e.preventDefault()});
document.getElementById("welcomeContinue").addEventListener('click', welcomeContinue);
document.getElementById("addPlayer").addEventListener('click', function(event){event.preventDefault(); validate()});
document.getElementById("beginGame").addEventListener('click', beginGame);
document.getElementById("nextCard").addEventListener('click', newTurn);
document.getElementById("displayCards").addEventListener('click', displayCards);