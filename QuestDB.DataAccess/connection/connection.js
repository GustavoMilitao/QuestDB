'use strict';

exports.mongoose = require('mongoose');
var uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/questDB?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
exports.mongoose.Promise = global.Promise,
exports.mongoose.connect(uri);