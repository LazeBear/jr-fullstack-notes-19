const express = require('express');

const app = express();
app.use(express.json());
// whitelist [ 'http://localhost:3000', 'http://localhost:8080' ]
app.use((req, res, next) => {
  // if (whitelist.includes(req.headers.origin)) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin); // wildcard
  res.setHeader('Access-Control-Allow-Headers', [
    'Content-Type',
    'Authorization',
  ]);
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});
// cors

const tasks = [{ id: 1, description: 'task 1', done: false }];
let id = 1; //自增

// GET /tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
  res.json([]);
});

// POST /tasks
app.post('/tasks', (req, res) => {
  res.json([]);
});

// PUT /tasks

// DELETE /tasks

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
