// function asynSum(a, b, callback) {
//   setTimeout(() => {
//     // console.log(a + b);
//     callback(a + b);
//   }, 1000);
// }

// callback hell
// asynSum(1, 2, (result1) => {
//   // xxxxx
//   asynSum(result1, 3, (result2) => {
//     asynSum(result2, 4, (result3) => {
//       console.log(result3);
//     });
//   });
// });

// promise
// promise 的三种状态
// pending, fulfilled, rejected
// promise 不可逆
// pending -> fulfilled
// pending -> rejected
// fulfilled -> rejected x
// rejected -> fulfilled x
// fulfilled/rejected -> pending (创建一个新的promise)

function asynSumPromise(a, b) {
  return new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      // console.log(a + b);
      // resolve(a + b);
      reject('error');
    }, 1000);
  });
}

asynSumPromise(1, 1)
  .catch((error) => {
    return 99;
  })
  .then(
    (result) => {
      console.log(result);
      // return asynSumPromise(2,2);
      return 100;
      // return Promise.resolve(100);
    }
    // (error) => {}
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// promise chain
console.log(2);
