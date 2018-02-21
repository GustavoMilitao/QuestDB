'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Question = new Schema({
  idUser: {
    type: String,
    default: ""
  },
  questionType: {
    typeId : {
      type: String,
      default: ""
    },
    typeDescription : {
      type: String,
      default: ""
    }
  },
  title: {
    type: String,
    default: ""
  },
  statement: {
    type: String,
    default: ""
  },
  alternatives: {
    type: Array,
    default: []
  },
  correctAlternative: {
    letter : {
      type: String,
      default: ""
    },
    textAlternative : {
      type: String,
      default: ""
    }
  }
});

module.exports = mongoose.model('Questions', Question);