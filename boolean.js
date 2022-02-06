"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
let isOk = true;
let isNotOk = new Boolean(true);
// 프리미티 타입인 isNotOk는 오류가 나온다. 그래서 이런류는 사용하지 않는다.
