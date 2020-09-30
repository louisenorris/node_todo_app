var bodyParser = require('body-parser');

var data = [{item: 'study'}, {item: 'eat crunch corner'}, {item: 'pose with pencil'}, {item: 'study more'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
        console.log(data);
        // debugger
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item
        });
        res.json(data)
    });
};