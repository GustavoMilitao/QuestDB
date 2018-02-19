var path = require('path');
var express = require('express');

module.exports = function (app) {

  // app.use("/QuestDB.Interface/scripts", express.static(__dirname + "../../QuestDB.Interface/scripts"));

  // app.use("/QuestDB.Interface/img", express.static(__dirname + "../../QuestDB.Interface/img"));

  // app.use("/QuestDB.Interface/styles", express.static(__dirname + "../../QuestDB.Interface/styles"));

  // app.use("/QuestDB.Interface/partials", express.static(__dirname + "../../QuestDB.Interface/partials"));

  app.all('/*', function (req, res) {
    res.sendFile(path.resolve('QuestDB.Interface/views/main/Index.html'));
  });
}