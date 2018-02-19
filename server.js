var questDB = require('./questDB');

// questDB.openUrl.open("http://localhost:"+questDB.port.toString()+"/");

questDB.app.listen(questDB.port);
