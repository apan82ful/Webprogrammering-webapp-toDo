var connection = require('../connection');
var fs = require('fs');

function Todo() {
    this.todoLogin = function (body, res) {
        fs.readFile('login.json', function (err, data) {
            if(err){
                return console.error(err);
            }
            console.log(data.toString());

            var loginData = JSON.parse(data);

            if(loginData.login == body.login && loginData.pwd == body.pwd){
                res.send({status: 0, message: 'Login successful'});
            }else{
                res.send({status: 1, message: 'Wrong username or password'});
            }

            //res.send(data.toString());
        })
    };


  this.todoJSON = function (res) {
    fs.readFile('anteckningar.json', function (err, data) {
        if(err){
          return console.error(err);
        }
        console.log(data.toString());
        res.send(data.toString());
    })
  };

  // Hämta alla
  this.todoGet = function(res) {
    connection.acquire(function(err, con) {
      con.query('SELECT * FROM todoList' , function(err, result) {
          con.release();
          res.send(result);
      });
    });
  };

  // Lägga till
  this.todoCreate = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('INSERT INTO todoList SET ?', todo, function(err, result) {
        con.release();
        if (err) {
          console.log(err);
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          console.log('TODO created successfully');
          res.send({status: 0, id:result.insertId, message: 'TODO created successfully'});
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