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
  let computersTurn = 'O'
  // keep track of player1 and player 2 turn so no loops
  let count = 0
  // keeps track if it is the computers turn
  let gameOn = false
  // changes players turn to X and computer to O
  $('#turnX').click(function () {
    turn = 'O'
    computersTurn = 'X'
    $('#turnX').removeClass('btn-primary')
    $('#turnO').addClass('btn-primary')
    $('.tic').text('#')
    reset()
  })
  $('#turnO').click(function () {
    turn = 'X'
    computersTurn = 'O'
    $('#turnO').removeClass('btn-primary')
    $('#turnX').addClass('btn-primary')
    $('.tic').text('#')
    reset()
  })
  $('#player2').click(function () {
    alert('hello')
  });
  $('.tic').click(function () {
    const slot = $(this).attr('id')
    playerTurn(turn, slot)
  })

  function reset () {
    turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
    count = 0
    $('.tic').text('#')
    gameOn = false
  }
  // insert function computer under This
  function computerTurn () {
    // break loop
    let taken = false
    while (taken === false && count !== 5) {
      // generte random turn
      const computersMove = (Math.random() * 10).toFixed()
      const move = $('#' + computersMove).text()
      if (move === '#') {
        $('#' + computersMove).text(computersTurn)
        taken = true
        turns[computersMove] = computersTurn

    }
  }

  function playerTurn (turn, id) {
    const spotTaken = $('#' + id).text()
    if (spotTaken === '#') {
      count++
      turns[id] = turn
      $('#', id).text(turn)
      winCondition(turns, turn)
      if (gameOn === false) {
        computerTurn()
        winCondition(turns, computersTurn)
      }
    }
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
