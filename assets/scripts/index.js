'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

$(document).ready(function () {
// Default player 1 turn to x
let player1 = "X"
// Array stores value that check later for a winner
let turns = ["#", "#", "#", "#", "#", "#", "#", "#" ,"#"];
// defualt players 2 turn
let player2= "O"
//keeps track if it is player 2 turn
let gameOn = false;
//keeps track of players turn so no loop
let count =0;
// changes player1 turn to x and player2 to O
$('#turnX').click(function () {
    player2 ="O";
    player1 ="X";
  $("#turnX").removeClass("btn-primary");
$("turnO").addClass("btn-primary");
reset ();
});
// changes player2 turn to o and player1 to x
$("#turnO").click(function(){
  player1 ="X";
  player2 ="O";
  $("#turnO").removeClass("btn-primary");
$("turnX").addClass("btn-primary");
reset ();
});
//$(".tic").click(function()){
//var slot = $(this).attr('id');
//player turn (turn,slot);
}
// writing function for players turn
function player1Turn() {
  //used to break while loop
  let taken =false;
  while(taken===false && count !==5){
    //generate players random turn
    let computersMove= (math.random()*10).tofixed();
    let move= $("#"+computersMove).text();
    if (move==="#"){
      $("#"+computersMove).text(computersTurn);
      taken=true;
      turns[computersMove]= computersTurn;
    }
  }
}

function playerTurn(turn,id) {
  let spotTaken= $("#"+id).text();
  if(spotTaken==="#"){
    count ++;
    $("#"+id).text(turn);
    turns[id]=turn;
    winCondition(turns,turn);
    if(gameOn === false){
      computersTurn();
      winConditions(turns,computersTurn);
    }
  }
}

function winCondition(turnArray,currentTurn) {
  if (turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2]=== currentTurn){
  gameOn = true;
  reset();
  alert ("Player" + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
} else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray [6] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (Top row across 2,4, and 6 spots)");
}
else if (turnArray[0] === currentTurn && turnArray[3]===currentTurn && turnArray [6] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (Top row down 0,3, and 6 spots)");
}
else if (turnArray[0] === currentTurn && turnArray[4]===currentTurn && turnArray [8] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (1st row diagonally across 0,4, and 8 spots)");
}
else if (turnArray[1] === currentTurn && turnArray[4]===currentTurn && turnArray [7] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (2nd row down 1,4, and 7 spots)");
}
else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray [8] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (3rd row down 2,5, and 8 spots)");
}
else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray [5] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (Mid row across 3,4, and 5 spots)");
}
else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray [6] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (3rd row across 2,4, and 6 spots)");
}
else if (turnArray[6] === currentTurn && turnArray[7]===currentTurn && turnArray [8] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (bottom row across 6,7, and 8 spots)");
}
else {
      gameOn = false;
    }
}

$(".tic").click(function(){
  let slot =$(this).attr('id');
playerTurn (turn,slot);

});
// create a reset function for tic tac toe so the board can go back to normal.
function reset (){
  turns= ["#", "#", "#", "#", "#", "#", "#", "#" ,"#"];
  count = 0;
  $(".tic").text('#');
gameOn =false;
}
});
