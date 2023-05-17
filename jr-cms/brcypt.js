const bcrypt = require('bcrypt');

const password = '123456';

// const salt = bcrypt.genSaltSync(10);
// console.log(salt);
const salt = '$2b$10$elDinlr0Qkf9ZnETwOjQpu';

const hashedPassword = bcrypt.hashSync(password, salt);

console.log(hashedPassword);
// $2b$10$elDinlr0Qkf9ZnETwOjQpujtoduOpphv.H3CuFzZ7NT3IFB5x6L9O
// $2b$10$elDinlr0Qkf9ZnETwOjQpujtoduOpphv.H3CuFzZ7NT3IFB5x6L9O
// $2b$10$elDinlr0Qkf9ZnETwOjQpu

bcrypt.compareSync(password, hashedPassword);
