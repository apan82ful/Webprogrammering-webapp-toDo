CREATE TABLE todoList(
	todoId INT NOT NULL AUTO_INCREMENT,
	todoTitle VARCHAR(100),
	todoContent VARCHAR(255),

	PRIMARY KEY (todoId)
);

INSERT INTO todoList(todoTitle, todoContent) VALUES
  ('handla', 'mjölk'),
  ('äta', 'mat'),
  ('sova', 'nu');

SELECT * FROM todoList;

DELETE FROM todoList WHERE todoId > '4';
