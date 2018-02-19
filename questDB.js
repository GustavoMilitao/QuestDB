'use strict';

// import das frameworks
exports.express = require('express');
exports.app = exports.express();
exports.port = process.env.PORT || 3000;
exports.cookieParser = require('cookie-parser');
exports.bodyParser = require('body-parser');
exports.app.use(exports.cookieParser());
exports.app.use(exports.express.static('./'));
exports.app.use(exports.bodyParser.urlencoded({ extended: true }));
exports.app.use(exports.bodyParser.json());
// exports.path = require('path');
// exports.app.engine('html', require('ejs').renderFile);
exports.openUrl = require("openurl");

// import dos arquivos da aplicação

//entidades
exports.user = require('./QuestDB.Entities/user');
exports.question = require('./QuestDB.Entities/question');
exports.login = require('./QuestDB.Entities/login');

// rotas base
exports.routesBase = require('./QuestDB.API/routes/baseRoutes');

// rotas API
exports.routesUserAPI = require('./QuestDB.API/routes/userRoutes');
exports.routesQuestionAPI = require('./QuestDB.API/routes/questionRoutes');
exports.routesLoginAPI = require('./QuestDB.API/routes/loginRoutes');

// rotas Aplicação
// exports.routesLogin = require('../QuestDB.Interface/routes/loginRoutes');
// exports.routesHome = require('../QuestDB.Interface/routes/homeRoutes');

// Inicialização das rotas
exports.routesQuestionAPI(exports.app);
exports.routesUserAPI(exports.app);
exports.routesLoginAPI(exports.app);
exports.routesBase(exports.app);
// exports.routesLogin(exports.app);
// exports.routesHome(exports.app);

// import dos styles, scripts e fontes através do middleware
// exports.app.use('/styles', exports.express.static('QuestDB.Interface/styles'));
// exports.app.use('/scripts', exports.express.static('QuestDB.Interface/scripts'));
// exports.app.use('/fonts', exports.express.static('QuestDB.Interface/fonts'));