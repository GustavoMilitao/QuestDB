var path = require('path');
var express = require('express');

module.exports = function (app) {


  app.all('/*', function (req, res) {
    res.sendFile(path.resolve('QuestDB.Interface/views/main/Index.html'));
  });
}