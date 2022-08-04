## JS의 arguments

#### 자바스크립트의 함수는 파라미터를 함수 내부의 객체 arguments에 저장한다..
배열의 특징을 가지고 있지만 배열의 메서드가 없기 때문에 유사배열이라고도 부른다.

1) 정의
* arguments는 함수의 지역변수로, 함수의 파라미터를 배열 형태로 가지는 변수이다.
또한, arguments는 유사배열이라고도 불린다. length, 인덱스 접근 등 배열의 특징을
가지고 있지만, map, forEach 등 배열의 함수를 사용할 수 없기 때문이다.

[예시)](../../js-code/example/01_arg.js)
sumAll 함수는 파라미터를 지정해주지 않았지만 arguments를 사용해서 파라미터들의 합을 계산할 수 있다.

* 유사배열의 의미: 
    배열처럼 length, index 등의 속성은 있지만, map, forEach등 배열의 메서드는 사용할 수 없는 것.

    아래의 Array.isArray로 검사를 해보면 결과는 false이다.

```JS
function temp() {
    console.log('isArray', Array.isArray(arguments))
}

temp(1, 2, 3) // isArray false
```