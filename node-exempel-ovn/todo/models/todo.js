var connection = require('../connection');

function Todo() {
  this.todoGet = function(res) {
    connection.acquire(function(err, con) {
      con.query('SELECT * FROM todoList' , function(err, result) {
          con.release();
          res.send(result);
      });
    });
  };

  this.todoCreate = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('INSERT INTO todoList SET ?', todo, function(err, result) {
        con.release();
        if (err) {
          console.log(err);
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          console.log('TODO created successfully');
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };

  this.todoUpdate = function(todo, id, res) {
    connection.acquire(function(err, con) {
      con.query('UPDATE todoList SET ? WHERE todoId = ?', [todo, id], function(err, result) {
        con.release();
        if (err) {
          console.log(err);
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          console.log('TODO updated successfully');
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };



  this.todoDelete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('DELETE FROM todoList WHERE todoId = ?', [id], function(err, result) {
        con.release();
        if (err) {
          console.log(err);
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          console.log('Deleted successfully');
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Todo();