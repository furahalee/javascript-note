function sumAll() {
  let result = 0;

  //파라미터를 지정해주지 않아도, arguments 객체에 받을 수 있다.
  for (const item of arguments) {
    result += item;
  }
  console.log("arguments", arguments);
  return result;
}
console.log("sumAA", sumAll(1, 2, 3, 4, 5));
