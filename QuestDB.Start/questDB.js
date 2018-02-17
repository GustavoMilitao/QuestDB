module.exports = questDB;

function questDB(){
    // import das frameworks
    this.express = require('express');
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.mongoose = require('mongoose');
    this.cookieParser = require('cookie-parser');
    this.bodyParser = require('body-parser');
    this.uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
    this.mongoose.Promise = global.Promise,
    this.mongoose.connect(this.uri); 
    this.app.use(this.cookieParser());
    this.app.use(this.bodyParser.urlencoded({ extended: true }));
    this.app.use(this.bodyParser.json());
    this.path = require('path');
    this.app.engine('html', require('ejs').renderFile);
    this.openUrl = require("openurl");
    
    // import dos arquivos da aplicação

    //entidades
    this.user = require('../QuestDB.Entities/user');
    this.question = require('../QuestDB.Entities/question');

    // rotas API
    this.routesUser = require('../QuestDB.API/routes/userRoutes');      
    this.routesQuestion = require('../QuestDB.API/routes/questionRoutes');      

    // rotas Aplicação
    this.routesLogin = require('../QuestDB.Interface/routes/loginRoutes');    
    this.routesHome = require('../QuestDB.Interface/routes/homeRoutes');   
    
    // Inicialização das rotas
    this.routesQuestion(this.app);
    this.routesUser(this.app); 
    this.routesLogin(this.app);
    this.routesHome(this.app);

    // import dos styles, scripts e fontes através do middleware
    this.app.use('/styles',this.express.static('QuestDB.Interface/styles'));
    this.app.use('/scripts',this.express.static('QuestDB.Interface/scripts'));
    this.app.use('/fonts',this.express.static('QuestDB.Interface/fonts'));
}