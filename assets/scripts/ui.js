'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').css('display', 'none')
  $('#message').hide(4000)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  // $('#message').text('Signed in successfully')
  // $('#message').css('background-color', 'green')
  $('.modal-body').html('You have sign in ready player 1')
  $('#myModalLabel').html('Sign In')
  $('#myModal').modal('show')
  $('#sign-in').css('display', '')
  $('#sign-in').css('display', 'none')
  console.log('signInSuccess ran. Data is :', data)
  $('#start').css('display', 'block')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  $('#sign-Out').css('display', 'none')
  $('.modal-body').html('You have sign out')
  $('#message').hide(4000)
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const creategameSuccess = function (data) {
  console.log('creategameSuccess ran. Data is :', data)
  store.game = data.game
  store.game.id = data.game.id
  $('#gameboard').css('display', 'block')
  $('#myModalLabel').html('creategameSuccess')
  $('#myModal').modal('show')
  $('.modal-body').html('You have create a game')
}
const getgamesSuccess = function (data) {
  console.log('getgamessuccess ran. Data is :', data)
  store.game = data.game
  store.game.id = data.game.id
}
// const deletegameSuccess = function (data) {
//   console.log('deletegameSuccess ran. Data is :', data)
//   store.game = data.game
//   store.game.id = data.game.id
// }
const updategamesSuccess = function (data) {
  console.log('updategamesSuccess ran. Data is :', data)
  store.game = data.games
  store.game.id = data.game.id
  $('#myModalLabel').html('updategameSuccess')
  $('#myModal').modal('show')
  $('.modal-body').html('You have update a game')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  creategameSuccess,
  getgamesSuccess,
  // deletegameSuccess,
  updategamesSuccess
}
