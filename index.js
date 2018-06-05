

var containerGame = document.getElementById('containerGame');
var cadanganPlayer = ['assets/A.png', 'assets/B.png', 'assets/C.png', 'assets/D.png'];
var players = []

var panjangLintasan;
var maxPlayer;
var currentPlayer; 
var isWin=false ;

function generateRace () {
    //console.log('loloolololo')
    panjangLintasan = document.getElementById('input-kolom').value;
    currentPlayer = 0;

    maxPlayer = document.getElementById('input-baris').value;

   if (panjangLintasan>10){     
    for (i=0; i < maxPlayer; i++) {
        player = {
            name: cadanganPlayer[i],
            position: 0
        }
        players.push(player)
    }
    printRace()
    } else { console.log ('tidak dapat lanjut')}
}

function rollDice () {
    if (isWin) {
       return
    }
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
                divKolom.style.backgroundImage = "url(" +players[i].name + ")";
            //untuk menambah var ke string "+"
            }
            if (players[i].position >= Number(panjangLintasan)) {
                isWin === true
                divKolom.style.backgroundImage = "url(" +players[i].name + ")";
                winner()
            }

            divBaris.appendChild(divKolom)
        }
        containerGame.appendChild(divBaris)
    }
}

function winner() {
    if (isWin) {
        alert('WIN');
    }
}
