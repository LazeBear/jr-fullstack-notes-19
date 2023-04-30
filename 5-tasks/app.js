const express = require('express');

const app = express();

app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, content-type, Accept'
  );
  res.setHeader('Access-Control-Allow-Origin', '*'); //wildcard
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

app.use(express.json());

const tasks = [
  {
    id: 1,
    description: 'task 1',
    done: false,
  },
];

let id = 1; //self increase

// GET /tasks?description=task&page=1

app.get('/tasks', (req, res) => {
  // route handler
  // if (Object.keys(req.query).length === 0) {
  //   res.status(200).json(tasks);

  //   return;
  // }

  const { description } = req.query;

  if (description) {
    const tasksfiltered = tasks.filter((task) =>
      task.description.includes(description)
    );
    // filteredTasks
    res.json(tasksfiltered);
    return;

    // tasksfiltered.length > 0
    //   ? res.status(200).json(tasksfiltered)
    //   : res.status(404).json('task not found');
  }
  // else {
  //   res.status(404).json('unknown search query');
  // }

  res.json(tasks);
  return;
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);

  // early exit, fail fast
  if (!(Number.isInteger(numericId) && numericId > 0)) {
    res.status(404).json({ error: 'invalid id!' });
    return;
  }

  const taskFound = tasks.find((task) => task.id === numericId);

  if (!taskFound) {
    res.status(404).json('task not found');
    return;
  }

  res.status(200).json(taskFound);

  return; // lint
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;

  const { description, done } = req.body;

  if (!id || Number(id) <= 0) {
    res.status(404).json('invalid id!');

    return;
  }

  // data validation
  // Check existence
  // check type
  if (!description && done !== true && done !== false) {
    res.status(400).json('Please modify your put body');

    return;
  }

  let taskFound = tasks.find((task) => task.id === Number(id));

  if (!taskFound) {
    res.status(404).json('task not found');

    return;
  } //   if (description) { //     taskFound.description = description; //     if (done === true || done === false) { //       taskFound.done = done; //     } //   } else { //     taskFound.done = done; //   }

  taskFound.description = description ?? taskFound.description;

  if (done === true || done === false) {
    taskFound.done = done;
  }

  res.status(200).json(taskFound);

  return;
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (!description) {
    res.status(400).json('invalid body');

    return;
  } //   const index = tasks.findIndex( //     (task) => task.description === req.body.description //   ); //   if (index >= 0) { //     res.status(409).json("task already existing"); //     return; //   }

  // id++;
  // ++id;
  const taskNew = { id: ++id, description, done: false };

  tasks.push(taskNew);

  res.status(201).json(taskNew);

  return;
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  if (!id || Number(id) <= 0) {
    res.status(404).json('invalid id!');

    return;
  }

  const index = tasks.findIndex((task) => task.id === Number(id));
  // filter

  if (index < 0) {
    res.status(404).json('task not found');

    return;
  }

  tasks.splice(index, 1);
  res.sendStatus(204); // No content
  // res.status(200).json('task deleted sucessfully');
});

app.listen(3000, (err) => {
  if (err) console.log(err);

  console.log('server listening on port 3000');
});
