declare const maybe: unknown;

const aNumber: number = maybe;
// Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
  // 간단한 타입가드 형태
  // Type 'boolean' is not assignable to type 'string'.
}

if (typeof maybe === "string") {
  maybe; // 타입 오브 타입가드라고 부른다.
  // const maybe: string

  const aString: string = maybe;
  const aBoolean: boolean = maybe;
  // Type 'string' is not assignable to type 'boolean'.
}
