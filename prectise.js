//? Write a function that takes an object with two properties as argument
//? It should return the value of the property with key country
// function takes(name) {
//   return name;
// }
// let obj = { name: "singh", country: "india" };
// console.log(takes(obj));

//? // Write a function that takes an array (a) as argument
//?  Return the number of elements in a

// function check(arraya) {
//   return arraya.length;
// }
// let data = [1, 2, 5, 7, 6];
// console.log("length are is : " + check(data));

// let str = " this is welll   ";

// let newStr = str.trim();
// console.log(str.length);

//!program
// document.querySelector(".rect").addEventListener("mousemove", function (e) {
//   //    console.log(e)

//     let s = e.screenX;
//     if (s > 99 && s < 186) {
//       console.log("right");
//     } else {
//       console.log("left");
//     }

//   let y = e.screenY;
//   if (y > 136 && y < 178) {
//     console.log("down");
//   } else {
//     console.log("up");
//   }
// })
//! exerises
// let name = "preet";
// let rndm = Math.floor(Math.random() * 5);
// let n = name.charAt(rndm);
// console.log(n);

// function name(item) {
//   let ul = document.getElementById("hello");
//   let createLi = document.createElement("li");

// }
// name("jell")

let all = document.querySelectorAll('.img-section');
all.forEach(function(e)
{
    console.log(e)
})
