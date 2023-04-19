// EcmaScript
// ES
// Ecma

// ES5 -> 2009
// ES6 -> 2015
// ES7 -> 2016
// ES8 -> 2017

// 块级作用域
// for, while, if, function
// {}
// for (let i = 0; i < 10; i++) {}

const obj = {}; // object literal

// reference, value
// value -> primitive type
// number, string, boolean, null, undefined, symbol, bigint
const a = 1;
// reference -> object type (object, array,)
const b = { a: 1 }; // -> 0x001
b.a = 2; // dot notation

b = { a: 1 }; // -> 0x002

// Array.push()

// strict mode

// function declaration
// function foo(){}

// function expression
// const foo = function(){}

// function bar() {
//   console.log(foo);
// }

// const foo = 1;
// bar();

// single threaded

// execution context
// 执行上下文 - 环境包含code 和 code相关的依赖项 （this，scope chain）
// global execution context
// function execution context
// creation phase, execution phase

// lexical scope

// clousure 闭包

// scope chain

// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   fetch().then(function (res) {
//     arr[i] = res[i];
//     // console.log('Index: ' + i + ', element: ' + arr[i]);
//   });
//   // setTimeout(function () {
//   //   console.log('Index: ' + i + ', element: ' + arr[i]);
//   // }, 1000);
// }

// 模版字符串
// back tick

// 延展运算符

// function foo (a, b, c) {
//   // ...
// }
// const obj = { a: {b:1}, b: 2, d: 4, f:5 };

// const foo = function(obj) {
//   const { d,f, ...rest } = obj;
//   bar({d, f, c, ...rest});
// }
// foo(obj)
// [
//   {a,b,c}
//   [
//     {a,b,c}
//     [
//       {a,b,c}
//       [
//       ]
//     ]
//   ]
// ]
// function CustomButton(props) {
//   const {a,b, ...rest} = props;
//   <Button {...rest} />
// }

// 高阶函数

// high order component

// this

const add1 = (x, y) => {
  return x + y;
};
// equals
const add2 = (x, y) => x + y;

const add3 = (x, y) => {
  return x > y ? x : y; // 三元运算符  ternary operator
};

const add5 = (x, y) => (x > y ? x : y);

const add4 = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};

const add6 = (x, y) => {
  return {
    x, // x: x,
    y,
    sum: x + y,
  };
};

const add7 = (x, y) => ({
  x, // x: x,
  y,
  sum: x + y,
});

const commonLogic = () => {};

function foo() {
  commonLogic();
}

// Dependency Injection
function bar(callback) {
  callback();
}

// bar(commonLogic);
// bar(()=>{})

// call stack
// 调用栈

// const number = 1;
// function foo() {
//   console.log(number);
// }
// function bar(fn) {
//   const number = 2;
//   fn();
// }
// bar(foo); // 1

// GEC
// FEC

// [          ]
// [  ]
// [  ]
// [      ]

// lexical scope 词法作用域

function foo() {
  const number = 1;
  return () => {
    console.log(number);
  };
}
const number = 100;

foo()(); // 1

const foo1 = foo();
foo1();

// private variables

// IIFE
// Immediately Invoked Function Expression
// 立即执行函数表达式

// Module
// Node.js Module

// export, export default
// import

// static variable

// const calendar = {
//   currentDay: 6,
//   nextDay() {
//     this.currentDay++;
//     console.log(this.currentDay);
//   },
// };

// const calendar = {
//   currentDay: 6,
//   nextDay: function() {
//     this.currentDay++;
//     console.log(this.currentDay);
//   },
// };

const calendar = {
  currentDay: 6,
  nextDay() {
    console.log(this); // this -> calendar (because calendar.nextDay())
    const callback = function () {
      this.currentDay++;
      console.log(this.currentDay);
    };
    const bindedCallback = callback.bind(this);
    setTimeout(bindedCallback);
  },
};
calendar.nextDay();

// callback function is executed by window

// function cb() {
//   console.log(`Hello, ${this.who}!`);
// }

// const object = {
//   who: 'mason',
//   cb,
// };

// function foo(cb) {
//   cb();
// }

// foo(object.cb); // ??

// Object.keys()
// Object.values()

// template function
// instance -> object

// prototype, prototype chain

// function foo(...args) {
//   if (args)
// }

// class Pet {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// const cat = new Pet('Fluffy');

// console.log(cat.getName()); // Fluffy

// const { getName } = cat;
// console.log(getName()); // Fluffy

// Asynchronous 异步
// Syncronous 同步

// blocking, non-blocking
// 阻塞，非阻塞

// event driven 事件驱动

// js is single threaded
// 单线程
// process -> 进程

// event loop

// function foo() {
//   console.log('foo'); [1004ms]
// }
// function runFor1Sec() {
//   // a for loop or while loop or a heavy computing logic which requires 1 sec to finish
// }
// [1ms]
// setTimeout(foo, 1000); ([1001ms] exectute foo)
// [2ms]
// runFor1Sec();
// foo is ready at 1001ms
// [1002ms]
// console.log('hello');
// [1003ms]

// Browser -> Web APIs
//

// callback queue -> macrotask queue
// promise queue -> microtask queue
// []

// call stack
//

// stateless
// stateful
