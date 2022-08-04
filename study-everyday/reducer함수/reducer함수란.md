## reducer 함수란 무엇인가?

##### 리듀서는 application의 state(상태)와 action을 arguments(객체 형태임)로서 취하여 새로운 state로 리턴하는 순수함수(pure function)이다. <br>순수 함수는 같은 인자(arguments)가 전해진다면 계속 같은 결과값을 반환하며 side effects가 나타나지 않는다.
<br>

* 예시
```JS
const add = (x, y) => x + y;
add(2, 5);
``` 

* 위의 함수는 결과값 7을 반환한다. 매개변수(parameter)는 x, y 이다. 
add함수를 호출할 때 2와 5를 인자(arguments)로 입력한다.
둘을 더한 값을 반환하므로 add 함수는 순수 함수이다. 
<br>

* 순수 함수인 reducer 함수의 매개변수 state와 action에 대해 살펴보자.

```JS
const initialState = {};
const cartReducer = (state = initialState, action) => {
    //code
}
```

* State 
    * state는 당신이 만든 component들과 함께 동작하는 데이타이다. state는 component가 요구하는 
    데이터를 지니고(hold)있으며, component가 rendering 하는 것을 좌우한다. <br>
    --(역으로 redering 만으로 state를 바꿀 수 없다.) 
    state object가 바뀌면, component는 re-redering한다. 어플리케이션을 Redux로 관리하는 경우, <br>
    reducer함수는 state가 바뀌는 것을 감지한다. 

* Action 
    * action은 information의 payload를 담고있는 object이다. payload는 그저 Redux store가 업데이트 되기 위한 
    information의 source를 담고있다. 

    * Reducer는 action.type 값(value)에 기반하여 store를 업데이트 한다.
    다음 예제의 ADD_TO_CART로 action.type을 정의해 보자.

    * Redux official [documentation](https://redux.js.org/introduction/getting-started)에 의하면, <br>
    action은 그저 Redux application에서 변화를 일으킬(trigger) 뿐이다. action은 application의 store의 변화를 일으킬 <br>
    payload를 담고 있다. action들은 Javascript의 object인데, 실행되는 action의 type을 Redux에게 알려준다. <br>
    주로, 아래와 같은 함수의 형태로 정의한다. 
<br>

```JS
const action = {
  type: 'ADD_TO_CART',
  payload: {
    product: 'margarine',
    quantity: 4
  }
}
```

  * 위의 코드는 유저가 보내는 값을 담고있는 전형적인 payload를 나타낸다. 위의 코드에서 알 수 있듯, <br>
  action object는 액션의 type과 payload object를 담고 있다. 그것들은 이 특정 action이 실행되기 <br>
  위한 필수 요소이다. 
<br><br>

## reducer를 사용하여 state 업데이트 하기 
<br>
* 아래의 숫자 증감 counter를 살펴보자 

```JS
const increaseAction = {
  type: 'INCREASE',
}; 

const decreaseAction = {
  type: 'DECREASE'
}; 


const countReducer = (state = 0, action) => {
  switch(action.type){
  case INCREASE: 
    return state + 1;

  case DECREASE : 
    return state -1;

  default: 
 return state;

  }
};
```


* 위의 코드에서 increaseAction과 decreaseAction은 reducer에서 사용되는 action이다. 
  이 action들은 state가 어떤 값으로 업데이트 될지 결정한다. 
<br>
  다음으로 reducer인 countReducer가 있다.
  이는 액션과 초기 상태를 필요로 한다. action.type이 INCREASE일 경우, reducer는 1이 증가한 새로운
  state를 반환한다. 그리고, DECREASE일 경우, 1만큼 감소한 새로운 state를 반환한다. 
  어떠한 조건도 충족하지 않는다면 state를 그대로 반환한다.
<br><br>


## reducer를 사용하여 state업데이트 하기. 스프레드 연산자(The spread operator)
<br>

* state는 직접 바꿀 수 없다. state를 생성하거나 업데이트 하기 위해서 Javascript의 스프레드 연산자를 사용할 수 있다. 
  우리는 state를 직접 바꾸지 않고, 새로운 object를 리턴하는데 그 object가 전달된 원래의 state와 payload를
  담고 있다.
<br>

```JS
const contactAction = {
  type: 'GET_CONTACT',
  payload: ['0801234567', '0901234567']
};

const initialState = {
  contacts: [],
  contact: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS: 
      return {
        ...state,
        contacts: action.payload,
    };
  default: 
    return state;
  }
}
```
<br>

* 위의 코드에서, state를 직접적으로 바꾸지 않기 위해 스프레드 연산자를 사용했다. 
  GET_CONTACTS액션타입에서 새로운 객체를 반환하는데 그 안에 전달된 state와 유저의 payload가 담겨있다.
  
  스프레드 연산자를 통해, 새로운 데이타를 추가하더라도, 기존의 state는 같은 값으로 유지할 수 있다. 
  state 안의 contacts 필드만 payload를 통해 갱신하게 된다.
<br><br>

## Redux Reducers 예시
<br>

* 좀더 자세히 이해하기 위해 영화 정보 상세 보기 application을 만들어 보자.
[movie-detail-finder 예제코드](../../js-code/movie-detail-finder/) <br>
[api key 받기](http://www.omdbapi.com/)
<br>

터미널에서 새로운 react app을 생성한다.

```bash
$ npx create-react-app movie-detail-finder
```
<br>

필요한 패키지를 추가로 인스톨 하고 프로젝트를 시작한다.

```bash
$ yarn add axios reactstrap react-redux redux redux-thunk
```
```bash
$ yarn start
```
<br>






