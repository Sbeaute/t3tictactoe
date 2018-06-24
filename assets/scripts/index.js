'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})


$(document).ready(function() {
// Default player's turn to x
  var turn = "X"
// Array stores value that we will check later for a winner
var turns = ["#", "#", "#", "#", "#", "#", "#", "#" ,"#"];
// defualt players turn
var computersTurn="O";
//keeps track if it is player's turn
var gameOn = false;
//keeps track of players turn so no loop
var count =0;
// changes player1 turn to x and player2 to O
$('#turnX').click(function(){
  turn ="O";
  computersTurn="X";
  $("#turnX").removeClass("btn-primary");
$("turnO").addClass("btn-primary");
reset ();
});
// changes player2 turn to o and player1 to x
$("#turnO").click(function(){
  turn ="X";
  player1Turn="O";
  $("#turnO").removeClass("btn-primary");
$("turnX").addClass("btn-primary");
reset ();
});
// writing function for players turn
function computerTurn() {
  //used to break while loop
  var taken =false;
  while(taken===false && count !==5){
    //generate players random turn
    var computersMove= (math.random()*10).tofixed();
    var move= $("#"+computersMove).text();
    if (move==="#"){
      $("#"+computersMove).text(computersTurn);
      taken=true;
      turns[computersMove]= computersTurn;
    }
  }
}

function playerTurn(turn,id) {
  var spotTaken= $("#"+id).text();
  if(spotTaken==="#"){
    count ++;
    $("#"+id).text(turn);
    turns[id]=turn;
    winCondition(turns,turn);
    if(gameOn === false){
      computersTurn();
      winCondition(turns,computersTurn);
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
alert ("Player" + currenTurn + " wins! (3rd row down 2,5, and 8 spots)");
}
else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray [5] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currentTurn + " wins! (Mid row across 3,4, and 5 spots)");
}
else if (turnArray[2] === currentTurn && turnArray[4]===currenTurn && turnArray [6] === currentTurn) {
gameOn = true;
reset();
alert ("Player" + currenTurn + " wins! (3rd row across 2,4, and 6 spots)");
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
  var slot =$(this).attr('id');
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
