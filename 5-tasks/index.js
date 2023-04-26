const express = require('express');

const app = express();
app.use(express.json());

const tasks = [{ id: 1, description: 'task 1', done: false }];
let id = 1; //自增

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id

// POST /tasks

// PUT /tasks

// DELETE /tasks

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
