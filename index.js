

var containerGame = document.getElementById('containerGame');
var cadanganPlayer = ['assets/A.png', 'assets/B.png', 'assets/C.png', 'assets/D.png'];
var players = []

var panjangLintasan;
var maxPlayer;
var currentPlayer; 

function generateRace () {
    console.log('loloolololo')
    panjangLintasan = document.getElementById('input-kolom').value;
    currentPlayer = 0;
    maxLintasan = panjangLintasan;
    maxPlayer = document.getElementById('input-baris').value;

    for (i=0; i < maxPlayer; i++) {
        player = {
            name: cadanganPlayer[i],
            position: 0
        }
        players.push(player)
    }
    printRace()
}

function rollDice () {
    var randomNumber = Math.floor(Math.random() *6) + 1;
    if (currentPlayer === Number(maxPlayer)) {
        currentPlayer = 0
    }
    players[currentPlayer].position += randomNumber;
    if (currentPlayer<maxPlayer) {
        currentPlayer++
    } 
    printRace()
}

function printRace () {
    containerGame.innerHTML='';
    
    for (i=0; i<maxPlayer; i++){
        var divBaris = document.createElement('div')
            divBaris.id = 'baris-'+i
            divBaris.className = 'containerBaris'

        for (j=0;j<panjangLintasan;j++) {
            var divKolom = document.createElement('div');
                    divKolom.id = 'box'+i+j;
                    divKolom.className='box';
// untuk membuat posisi player                    
            if (j === players[i].position) {
                divKolom.style.backgroundImage = players[i].name;
            }

            divBaris.appendChild(divKolom)
        }
        containerGame.appendChild(divBaris)
    }
}