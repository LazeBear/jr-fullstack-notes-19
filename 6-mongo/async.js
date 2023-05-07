// 语法糖 syntax sugar
// async await 基于 promise

async function foo() {
  try {
    const result = await Promise.reject('bar');
    console.log(result);
    return Promise.resolve('bar');
  } catch (e) {
    console.log(e);
  }
}
(async () => {
  await foo();
})();
