startingLife = 0;
p1Life = 0;
p2Life = 0;
players = ['Spike', 'Jimmy'];
x = 0;

function showCounterModal(){
    $('#startingLifeModal').modal('hide');
    $('#nameModal').modal('hide');
    $('#counterModal').modal('show');
    document.getElementById('p1Name').innerHTML = `${players[0]}`;
    document.getElementById('p2Name').innerHTML = `${players[1]}`;
}

function life20() {
    startingLife = 20;
    setLife()
    showCounterModal();
}

function life30() {
    startingLife = 30;
    setLife()
    showCounterModal();
}

function life40() {
    startingLife = 40;
    setLife()
    showCounterModal();
}

function setLife() {
    p1Life = startingLife;
    p2Life = startingLife;
    document.getElementById('p1Life').innerHTML = `${p1Life}`;
    document.getElementById('p2Life').innerHTML = `${p2Life}`;
}

function p1Name() {
    x = 0;
    nameModal();
}

function p2Name() {
    x = 1;
    nameModal();
}

function nameModal() {
    $('#counterModal').modal('hide');
    $('#nameModal').modal('show');
    $('input:text').val('');
    $('input:text').attr('placeholder',`${players[x]}`)
}

function nameModalButton() {
    nameField = document.getElementById('nameField').value;
    if (nameField === "" || nameField === null) {
        showCounterModal()
    } else {
        players[x] = document.getElementById('nameField').value;
        showCounterModal()
    }
}

function p1Up() {
    p1Life++;
    document.getElementById('p1Life').innerHTML = `${p1Life}`;
}
function p1Down() {
    p1Life--;
    document.getElementById('p1Life').innerHTML = `${p1Life}`;
}
function p2Up() {
    p2Life++;
    document.getElementById('p2Life').innerHTML = `${p2Life}`;
}
function p2Down() {
    p2Life--;
    document.getElementById('p2Life').innerHTML = `${p2Life}`;
}

$('#nameModal').on('shown.bs.modal', function () {
    $('#nameField').focus()
})

//Event Listeners
document.getElementById("life20").addEventListener('click', life20);
document.getElementById("life30").addEventListener('click', life30);
document.getElementById("life40").addEventListener('click', life40);
document.getElementById("p1Up").addEventListener('click', p1Up);
document.getElementById("p1Down").addEventListener('click', p1Down);
document.getElementById("p2Up").addEventListener('click', p2Up);
document.getElementById("p2Down").addEventListener('click', p2Down);
document.getElementById("p1Name").addEventListener('click', p1Name);
document.getElementById("p2Name").addEventListener('click', p2Name);
document.getElementById("nameModalButton").addEventListener('click', nameModalButton);