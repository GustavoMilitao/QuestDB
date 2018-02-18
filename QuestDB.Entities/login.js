'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
  idUser: {
    type: String,
    default: ""
  },
  maxAge: {
    type: Date,
    default: ""
  }
});

module.exports = mongoose.model('Users', User);