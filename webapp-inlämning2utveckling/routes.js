var todo = require('./models/todo');


module.exports = {
  configure: function(app) {

    app.post('/login/', function (req, res) {
        todo.todoLogin(req.body, res);
    });


    app.get('/data/', function (req, res) {
        todo.todoJSON(res);
    });
    // Hämta alla
    app.get('/todo/', function(req, res) {
      todo.todoGet(res);
    });

    // Lägga till
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
