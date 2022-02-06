function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

let d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1; // b -> number

  return b;
}

const c = leakingAny({ num: 0 }); // c -> number
c.indexOf("0");
// Property 'indexOf' does not exist on type 'number'.
