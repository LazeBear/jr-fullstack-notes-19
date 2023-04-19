// const moduleA = { exports: {} };
// (function (module) {
// console.log(__dirname, __filename, require, exports);
let counter = 0;
function increment() {
  counter++;
}

function getCounter() {
  console.log(counter);
}

module.exports = {
  increment,
  getCounter,
};

// exports = {} // don't do this

// exports.increment = increment;
// exports.getCounter = getCounter;
// })(moduleA);

// moduleA.exports.increment();
// moduleA.exports.getCounter();

// commonjs
// require , module.exports, exports
// es module
// import, export
// package.json -> "type": "module"

// package 包
