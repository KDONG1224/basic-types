let x: [string, number];

x = ["Kdong", 30]; // 길이, 순서도 다 맞아야 한다.

// x = [10, 'Omna'];  // 에러가 뜬다.

x[2] = "world";
// Type '"world"' is not assignable to type 'undefined'.
// Tuple type '[string, number]' of length '2' has no element at index '2'.

const person: [string, number] = ["Kdong", 30];

const [first, second] = person;

// const [first, second, third] = person;
// Tuple type '[string, number]' of length '2' has no element at index '2'.
