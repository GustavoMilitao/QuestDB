var path = require('path');
var express = require('express');

module.exports = function (app) {

  app.all('/*', function (req, res) {
    res.send({ success : false, message : 'rota inválida'});
  });
}