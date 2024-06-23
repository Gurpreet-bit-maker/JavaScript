//? CHECK

// let htm = document.createElement('div');
// let obj =
// {
//   name: 'singh',
//   sellery: 25000,
// };

// htm.userData = obj;

// console.log(htm.userData.name);
// console.log(htm.userData.sellery);

//! this code is fine but here i learnt one more think if i want to use array and object outside from function than we need return keyword.
//? CHECK
// function add(n, c) {
//   let obj = {
//     name: n,
//     class: c,
//   };

//   return obj;
// }
// let b = add("rajkumar", 15);
// console.log(b.name, b.class);
//? CHECK
// function add(numbers) {
//   let t = 0;
//   for (const key of numbers) {
//     t += key;
//   }
//   return t;
// }

// let arr = [2, 6, 4, 7, 4];
// let result = add(arr);
// console.log(arr + " sum is " + result);
let a = 25;
let b = 24;
function sum(x, y) {
  return x + y;
}

let s = sum(a,b);
console.log(s);
