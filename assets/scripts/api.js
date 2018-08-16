'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// games
const creategame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getgames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    metod: 'GET',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deletegame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'DELETE',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updategames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  getgames,
  creategame,
  deletegame,
  updategames
}
