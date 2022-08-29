/**
 * constructor: 함수선언문, 함수 표현식, 클래스(클래스도 함수)
 * non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수
 */
function foo() {} // 선언문
const bar = function () {}; // 표현식

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
  x: function () {},
};

const baz2 = {
  z: function x() {},
};

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
  k() {},
};

new bar(); // bar {}
new baz.x(); // x {}
new baz2.z(); // x {}

new obj.k(); // Uncaught TypeError: obj.k is not a constructor
