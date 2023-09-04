const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.status(200).json(data.todos);
});

app.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.todos.push(req.body);
  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.json(err);
    } else {
      res.status(200).json(data.todos);
    }
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json", "utf8"));
  const index = data.todos.findIndex((todo) => todo.id === parseInt(id));
  if (index === -1) {
    res.status(400).send("Invalid argument"); // Change status code to 400
    return;
  }
  data.todos[index] = { ...data.todos[index], ...req.body };
  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(400).send("Invalid argument");
    } else {
      res.status(200).json(data.todos);
    }
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const updatedData = data.todos.filter((t) => t.id !== parseInt(id));
  if (data.todos.length === updatedData.length) {
    res.status(400).send("Invalid argument"); 
  }
  data.todos = [...updatedData];
  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.status(400).send("Invalid argument");
    } else {
      res.status(200).json(data.todos);
    }
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});

module.exports = app;
