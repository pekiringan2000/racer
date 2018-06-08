var containerGame = document.getElementById('containerGame');
var cadanganPlayer = [
                        ['A','A.png'],
                        ['B','B.png'],
                        ['C','C.png'],
                        ['D','D.png']];
var players = []

var panjangLintasan;
var maxPlayer;
var currentPlayer; 
var isWin=false ;

function generateRace () {
    //console.log('loloolololo')
    restart ();
    panjangLintasan = document.getElementById('input-kolom').value;
    currentPlayer = 0;

    maxPlayer = document.getElementById('input-baris').value;

   if (panjangLintasan>6){     
    for (i=0; i < maxPlayer; i++) {
        player = {
            name: cadanganPlayer[i][0],
            img:cadanganPlayer[i][1],
            position: 0
        }
        players.push(player)
    }
    printRace()
    } else { alert('Lintasan Min 7')}
}

function rollDice () {
    keterangan.innerHTML='';
    console.log("===> ",isWin)
    if (isWin) {
       winner()
       return
    }
    var randomNumber = Math.floor(Math.random() *6) + 1;
    if (currentPlayer === Number(maxPlayer)) {
        currentPlayer = 0
    }
    players[currentPlayer].position += randomNumber;
    document.getElementById('keterangan').innerHTML = "Giliran Pemain "+players[currentPlayer].name;
    document.getElementById('nilaidadu').innerHTML = "Nilai DADU "+randomNumber;

    if (players[currentPlayer].position >= Number(panjangLintasan-1)) {
        isWin = true;
        players[currentPlayer].position = panjangLintasan-1;
        keterangan.innerHTML ="Pemenangnya Adalah "+players[currentPlayer].name;
    }
    
    if (currentPlayer<maxPlayer) {
        currentPlayer++
    
    } 
   
    printRace();

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
                // cara 1 : pakai background.cuma gambar kecilin sendiri
                // divKolom.style.backgroundImage = "url(" +players[i].img + ")";
                //cara 2 : pakai source gambar kita atur
                var icon = document.createElement('img');
                icon.src = players[i].img;
                icon.width = 25;
                icon.height = 25;   
                
                
                divKolom.appendChild(icon)
            }
                      
            divBaris.appendChild(divKolom)
        }
        containerGame.appendChild(divBaris)
    }
   
}

function winner() {
    // console.log("MASUK FUNCTION WINNER")
    if (isWin) {
        alert('WIN');
    }
}

function restart() {
    players = []
    panjangLintasan;
    maxPlayer;
    currentPlayer; 
    isWin=false ;
}
