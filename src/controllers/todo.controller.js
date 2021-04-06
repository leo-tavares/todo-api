const Todo = require("../models/todo.model");

const todos = [
  new Todo({ data: "01-01-2021", description: "test1", status: "pending" }),
  new Todo({ data: "02-01-2021", description: "test2", status: "done" }),
];

class TodoController {
  static getTodo(_, res) {
    res.send(todos);
  }

  static setTodo(req, res) {
    todos.push(new Todo({ ...req.body }));
    res.send(req.body);
  }
}

module.exports = TodoController;
