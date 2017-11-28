var todo = require('./models/todo');


module.exports = {
  configure: function(app) {

    app.get('/todo/', function(req, res) {
      todo.todoGet(res);
    });

    app.post('/todo/', function(req, res) {
      todo.todoCreate(req.body, res);
    });

    app.put('/todo/:id', function(req, res) {
      todo.todoUpdate(req.body, req.params.id, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.todoDelete(req.params.id, res);
    });
  }
};
