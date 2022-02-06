"use strict";
let myName = "Kdong";
myName = "DongJae";
let fullName = `Kang Dongjae`;
let age = 30;
let sentence = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
// template string 을 사용하지 않을 경우
let sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
