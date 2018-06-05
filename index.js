// var containerGame = document.getElementById('containerGame');

// var player = [{
//     nameOfPlayer: "A",
//     position:0
// },{
//     nameOfPlayer: "B",
//     position:0
// },{
//     nameOfPlayer: "C",
//     position:0
// }]

// var currentPlayer = player[0]; 

// function generateBoard(){
// //genearate board for game
// //clear existing board

// containerGame.innerHTML=''

// var jumlahBaris = document.getElementById('input-baris').value
// var jumlahKolom = document.getElementById('input-kolom').value

// for (i=0; i<jumlahBaris;i++){
//      var divBaris = document.createElement('div')
//      divBaris.id = 'baris-'+i
//      divBaris.className = 'containerBaris'

//     for (j=0; j<jumlahKolom; j++) {
//         var divKolom = document.createElement('div')
//         divKolom.id = 'box'+i+j
//         divKolom.className='box'

//         divBaris.appendChild(divKolom)
//     }
//     containerGame.appendChild(divBaris)
//  }
// console.log(containerGame)   
// }

// //roll dice

//  function roll() {
//     var randomNumber = Math.floor(Math.random() *6) + 1;
//     return randomNumber;
//   }

//   //Prints dice roll to the page

// function printNumber(number) {
//     var placeholder = document.getElementById('placeholder');
//     placeholder.innerHTML = number;
//   }
  
// var rolldicebutton = document.getElementById('rolldicebutton');



// function generatedice() {
//     var result = roll();
//     printNumber(result);
// //    player[0].position = player[0].position+result;
//     currentPlayer.position=currentPlayer.position+result;
//     console.log("===>",player);
//     move();
//   }

// function move() {
//     document.getElementById('box0'+currentPlayer.position).style.backgroundColor = "red";
// }      


var containerGame = document.getElementById('containerGame');
var players = [
    {
        name: 0,
        position: 0
    }]

var panjangLintasan;
var maxPlayer;
var currentPlayer 

function generateRace () {
    console.log('loloolololo')
    panjangLintasan = document.getElementById('input-kolom').value;
    currentPlayer = 0;
    maxLintasan = panjangLintasan;
    maxPlayer = document.getElementById('input-baris').value;

    for (i=0; i<maxPlayer-1; i++) {
        player = {
            name:i ,
            position:0
        }
        players.push(player)
    }
}


function rollDice () {
    var randomNumber = Math.floor(Math.random() *6) + 1;
    players[currentPlayer].position += randomNumber;

    if (currentPlayer<maxPlayer) {
        currentPlayer++
     }
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

            if (j === position) {
                players[currentPlayer].position.style.backgroundColor = "red";
            }

            divBaris.appendChild(divKolom)
        }
        containerGame.appendChild(divBaris)
    }
}