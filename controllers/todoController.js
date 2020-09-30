module.exports = function(app){
    app.get('/todo', function(res, res){
        res.render('todo');
    });

    app.post('/todo', function(res, res){

    });

    app.delete('/todo', function(res, res){

    });
};