function returnVoid(message: string): void {
  console.log(message);

  return undefined;
  // function returnVoid(message: string): void
  // undefined 만 유일하게 void에 할당될 수 있다.
}

const r = returnVoid("리턴이 없다.");
// const r: void
// void 라고 표시된 함수의 리턴을 가지고 어떠한것도 하지 않겠다고 명시적으로 표현하는 것이다.
