let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    console.log("My name is " + this.name); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
me.thisInArrow();
me.thisInRegular();
// 화살표 함수는 this 로 바인드 할 수 없다.
