'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionType = new Schema({
  typeId : {
    type: String,
    default: ""
  },
  typeDescription : {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('QuestionTypes', QuestionType);