var containerGame = document.getElementById('containerGame');

function generateBoard(){
//genearate board for game
//clear existing board

containerGame.innerHTML=''

var jumlahBaris = document.getElementById('input-baris').value
var jumlahKolom = document.getElementById('input-kolom').value

for (i=0; i<jumlahBaris;i++){
     var divBaris = document.createElement('div')
     divBaris.id = 'baris-'+i
     divBaris.className = 'containerBaris'

    for (j=0; j<jumlahKolom; j++) {
        var divKolom = document.createElement('div')
        divKolom.id = 'box'+i+j
        divKolom.className='box'

        divBaris.appendChild(divKolom)
    }
    containerGame.appendChild(divBaris)
 }
console.log(containerGame)   
}
function rollDice() {

}

