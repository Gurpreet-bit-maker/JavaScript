// function Cnumber(name)
// {
//   let reverse = name.toString().split("").reverse().map(el => parseInt(el));
//   console.log(reverse);
// }
// Cnumber(25)

// let numbers = 25136;
// let result = numbers
//   .toString()
//   .split("")
//   .reverse()
//   .map((check) => parseInt(check));
// result.forEach((element) => {
//   console.log(element);
// });
let num = 50;

let sum = 0;
// for (let i = 1; i < num; i++) {
//   if (i == 3) {
//     r = i * 1;
//     num1 = r;
//     console.log(r);
//   } else if (i == 5) {
//     r = i * 1;
//     num2 = r;

//     console.log(r);
//   } else if (i == 6) {
//     r = i * 1;
//     num3 = r;

//     console.log(r);
//   } else if (i == 9) {
//     r = i * 1;
//     num4 = r;
//     console.log(r);
//   }
// }
// sum += num1 + num2 + num3 + num4;
// console.log(sum);
let button = document.getElementById("btn");
let pera = document.getElementById("demo");
let box1 = document.getElementById("box1");

button.addEventListener("click", function (e) {
  //!well done

  let input = document.getElementById("textA");
  let t = Number(input.value);
//   if () {
//     console.log('you presed 2');
//   }else{
//     console.log("carry on");
//   }

  //   pera.innerText = input.value;
  //   localStorage.setItem("mydata", input.value);
  //   let lelo = localStorage.getItem("mydata");

  //   let createpera = document.createElement("p");
  //   box1.appendChild(createpera);
  //   let text = document.createTextNode(input.value);
  //   createpera.appendChild(text);

  input.value = "";
  
});

//! LOGIC
// let input = document.getElementById("textA");
// let t = Number(input.value);
//   console.log(typeof t);


let a  = [3,5,4,8];
let chnge = a.slice(1,3);
console.log(chnge);