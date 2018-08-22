'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  // your JS code goes here
  events.addHandlers()
})

$(document).ready(function () {
  // Default player1 turn to X
  let turn = 'X'
  // the array that will check later for winner
  let turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
  // player2 turn
  const turn2 = 'O'
  // keep track of player1 and player 2 turn so no loops
  let count = 0
  // keeps track if it is the computers turn
  let gameOn = false
  // changes players turn to X and computer to O
  // $('#turnX').click(function () {
  // turn = 'O'
  // currentTurn = 'X'
  // $('#turnX').removeClass('btn-primary')
  // $('#turnO').addClass('btn-primary')
  // $('.tic').text('#')
  // count++
  // reset()
  // })

  // $('#turnO').click(function () {
  // turn = 'X'
  // currentTurn = 'O'
  // $( '#turnO').removeClass('btn-primary')
  // $('#turnX').addClass('btn-primary')
  // $('.tic').text('#')
  // count++
  // reset()
  // })

  $('#player2').click(function () {
    alert('hello')
  })
  $('.tic').click(function (event) {
    const slot = $(this).attr('id')
    playerTurn(slot)
    events.onupdategame(event)
  })

  function reset () {
    turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
    count = 0
    $('.tic').text('#')
    gameOn = false
    $('#container input').val(' ')
  }

  function playerTurn (id) {
    const spotTaken = $('#' + id).text()
    if (spotTaken === '#') {
      count++
      turns[id] = turn
      // this is where the turn goes out to the bo
      $('#' + id).text(turn)
      // switch from player 1 x to player 2
      // alternate turns from x and o
      if (turn === 'X') {
        // this changes the value of X to O
        turn = 'O'
      } else {
        // changes the O into xX
        turn = 'X'
      }
      winCondition(turns, turn)
      if (gameOn === false) {
        // alternateTurn()
        // winCondition(turns, computersTurn)
      }
    }
  }
  function currentTurn (turn, id) {
    const spotTaken = $('#' + id).text()
    if (spotTaken === '#') {
      count++
      turns[id] = turn
      $('#' + id).text(turn)
      winCondition(turns, turn)
      if (gameOn === false) {
        playerTurn()
        winCondition(turns, computersTurn)
        alternateTurn(currentTurns + id )
      }
    }
  }
  // need to know the box it is looking for when click
  // it going to be able to use the box putting x and o
function alternateTurn () {
    console.log('testing')
  }

  function winCondition (turnArray, currentTurn) {
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (Top row across 0,1, and 2 spots)')
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (Top row across 2,4, and 6 spots)')
    } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (1st row down 0,3, and 6 spots)')
    } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (1st row diagonally across 0,4, and 8 spots)')
    } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (2nd row down 1,4, and 7 spots)')
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (3rd row down 2,5, and 8 spots)')
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (3rd row across 2,4, and 6 spots)')
    } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (Middle row across 3,4, and 5 spots)')
    } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true
      reset()
      alert('Player ' + currentTurn + ' wins! (Bottom row across 6,7, and 8 spots)')
    } else {
      gameOn = false
    }
  }
})
