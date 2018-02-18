exports.home = function (req, res) {
    var cookie = req.cookies['user'];
    if(!cookie){
        res.render('QuestDB.Interface/views/login/index.html');
    } else {
        User.findById(cookie, function(err, response){
            if (err || !response.length) {
                res.render('QuestDB.Interface/views/login/index.html');
            } else {
                res.render('QuestDB.Interface/views/home/index.html');
            }
        });
    }
};