function sum(a, b) {
  return a + b;
}

// test case - 测试用例
// check if the sum function works as expected
// expected value === actual value

// h1
describe('sum function', () => {
  it('should return correct sum of two numbers', () => {
    // setup (initialize variables, mock)

    // execute the function
    const result = sum(1, 2);
    // compare
    // expect (actual result) -> expected result
    expect(result).toBe(3);
    // toEqual (object comparing)
    // toHaveBeenCalled
    // toHaveBeenCalledWith
  });

  // test('',()=>{
  // })

  // h2
  // describe()
});
