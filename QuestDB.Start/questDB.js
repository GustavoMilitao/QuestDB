'use strict';

// import das frameworks
exports.express = require('express');
exports.app = exports.express();
exports.port = process.env.PORT || 3000;
exports.cookieParser = require('cookie-parser');
exports.bodyParser = require('body-parser');
exports.app.use(exports.cookieParser());
exports.app.use(exports.bodyParser.urlencoded({ extended: true }));
exports.app.use(exports.bodyParser.json());
exports.path = require('path');
exports.app.engine('html', require('ejs').renderFile);
exports.openUrl = require("openurl");

// import dos arquivos da aplicação

//entidades
exports.user = require('../QuestDB.Entities/user');
exports.question = require('../QuestDB.Entities/question');

// rotas API
exports.routesUser = require('../QuestDB.API/routes/userRoutes');
exports.routesQuestion = require('../QuestDB.API/routes/questionRoutes');

// rotas Aplicação
exports.routesLogin = require('../QuestDB.Interface/routes/loginRoutes');
exports.routesHome = require('../QuestDB.Interface/routes/homeRoutes');

// Inicialização das rotas
exports.routesQuestion(exports.app);
exports.routesUser(exports.app);
exports.routesLogin(exports.app);
exports.routesHome(exports.app);

// import dos styles, scripts e fontes através do middleware
exports.app.use('/styles', exports.express.static('QuestDB.Interface/styles'));
exports.app.use('/scripts', exports.express.static('QuestDB.Interface/scripts'));
exports.app.use('/fonts', exports.express.static('QuestDB.Interface/fonts'));