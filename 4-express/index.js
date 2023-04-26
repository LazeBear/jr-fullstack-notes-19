const express = require('express');

const app = express();
// global middleware
app.use(express.json());
// app.use(express.urlencoded());

// GET localhost:3000/
// application  http method  (path , callback function => route handler)
app.get('/', (req, res) => {
  res.send([1, 2, 3, 4]);
});

// req -> request
// res -> response
app.post('/users', (req, res) => {
  // check if req.body exists

  // res.send('post /users');
  // res.json([1, 23, 4]);
  // res.sendStatus(201);
  res.status(201).json(req.body);
});

// :id -> 变量名为id -> req.params.id
app.put('/users/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/users/:id/posts/:postId', (req, res) => {
  res.send(req.params);
});

/**
 * 如何从request获取数据
 * 1. req.params (url中的变量)   -> GET, PUT, DELETE, PATCH
 *    /users/:id (id)
 * 2. req.query (query param)   -> GET
 *    /users?page=1&pageSize=10
 * 3. req.body (body)           -> POST, PUT, PATCH
 *                    (app.use(express.json())) -> middleware
 *
 * from headers (authorization)
 */
app.get('/users', (req, res) => {
  res.send(req.query);
});
// app.delete('/', (req, res) => {});
// app.put('/', (req, res) => {});
// app.patch('/', (req, res) => {});

app.listen(3000);

// cli command line interface
// 脚手架工具
// create-react-app

// alias

// npm init -y
// npm i {package}
// npm i -D {package}
// npm uninstall {package}
// npm run {script}

// package, module, library, framework

// 匹配所有以 /users 开头的请求，包含任意method
// GET /users
// POST /users
// GET /users/1/posts/123
// app.use('/users',middleware1);

// 只能匹配 GET /users
// app.get('/users', middleware)

// const tasks = [{
//   id: 1,
//   description: 'task 1',
//   done: false,
// },{
//   id: 2,
//   description: 'task 2',
//   done: false,
// }];
