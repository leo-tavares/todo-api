const app = require("express")();

const todoController = require("./controllers/todo.controller");

app.get("/todo", todoController.getTodo);

app.post("/todo", todoController.setTodo);


app.listen(3333, () => console.log("Server up!"));
