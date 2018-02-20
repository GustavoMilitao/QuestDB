'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Login = new Schema({
  idUser: {
    type: String,
    default: ""
  },
  maxAge: {
    type: Date,
    default: ""
  }
});

module.exports = mongoose.model('Login', Login);