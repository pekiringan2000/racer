var containerGame = document.getElementById('containerGame');

var player = [{
    nameOfPlayer: "A",
    position:0
},{
    nameOfPlayer: "B",
    position:0
}]

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

function gerak() {

}

//roll dice

 function roll() {
    var randomNumber = Math.floor(Math.random() *6) + 1;
    return randomNumber;
  }

  //Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
var rolldicebutton = document.getElementById('rolldicebutton');
  
function generatedice() {
    var result = roll();
    printNumber(result);
    player[0].position = player[0].position+result;
    console.log("===>",player);
    move();
    moved();
  }
  
function move() {
    document.getElementById('box0'+player[0].position).style.backgroundColor = "red";
}      