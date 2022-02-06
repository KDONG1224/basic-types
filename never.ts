function error(message: string): never {
  throw new Error(message);
}

function fali() {
  return error("failed");
}

function infinitLoop(): never {
  while (true) {}
}

let a: string = "Kdong";

if (typeof a !== "string") {
  a; // let a: never
}

declare const b: string | number;

if (typeof b !== "string") {
  b; // const b: number
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// 마치 타입이 변수처럼 쓰이는 제네릭형태이다.
// 만약에 T 가 스트링이리면 { [index: string]: any } 아니면 never

type ObjectIndexable = Indexable<{}>;
const b: Indexable<{}> = "";
