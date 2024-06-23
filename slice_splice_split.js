// todo first
//! SLICE ME STARTING PERAMITER DIKHAGA BUT ENDING NHI AUR ISSE
//* जब आप किसी स्ट्रिंग के एक भाग को निकालना या कॉपी करना चाहते हैं, बिना मूल स्ट्रिंग को परिवर्तित किए
// let name = "work like hell";
// let importent = name.slice(0,6);
// console.log(importent);

//! string method me slice hi kam ka hai

//! replace(), replaceall() method
// let name = "power of world";
// let chn = name.replace("of", "is");
// console.log(chn);

//!concat(varibleName);

// //! trim()
// let name   = "yeh     ";
// let chng = name.trim();
// console.log(name.length) //? 8
// console.log(chng.length); //? 3
// //! charAt(2)
// let name = 'mohan';
// console.log(name.charAt(2));//? h  (return a specfic charecter)

//! find the indexOf()
// let str = "Departed Train";
// let index = str.indexOf("d Train");
// console.log(index); //? 7

//! prectise
// function check() {
//   let input = document.getElementById("input").value;
//   input = input.toUpperCase();

//   for (let i = 0; i < input.length; i++) {
//     if (input.charAt(i) === "A") {
//       console.log("not senstive : " + charAt(i));
//     }
//   }
// }

// let name = "hello mere bhai ";
// name.split(" ").forEach(element => {

//     console.log(element.split("").reverse().join(""));
// });
//! program
// let str = "sunil gavaskar singh hai";
// let aray = ["sunil", "gavasker"];

// console.log(str.split("").reverse().join(""));
// console.log(typeof aray.join(" "));

// function check(e) {
//   if (Array.isArray(e)) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// check([2, 5, 4]);
// check({ name: "sinil" });
//!program
// function check(e) {
//     if (!e) {
//       console.log("its  empty");
//     } else {
//       console.log("its not empty");
//     }
//   }
// check("")
//! program
// function check(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log("num1 is bigger");
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is biger ");
//   } else {
//     console.log("num3 is biger");
//   }
// }

// check(25,63,95);
//! program
let p = document.getElementById("demo");
let p2 = document.getElementById("demo1");
// let rexuce = /[\dA-Z]/;
// function check() {
//   let input = document.getElementById("input").value;
//   if (!input) {
//     p.innerText = "enter input first";
//   } else if (input.length > 8 && input.length < 14 ) {

//       if (rexuce.test(input)) {
//         p.innerText = "SUCCESSFULLY " + input;
//         document.getElementById("input").value = "";
//       }
//        else {
//         p.innerText = "enter few special keywords [A-Z &123]";
//       }

// } else {
//     p.innerText = "password length weak or strong ";
// }
// }
//! program (good))
// let num = 4;
// if (num === Number(num)) {
//   console.log("yes its is integers");
// } else {
//   console.log("no its not a integers");
// }
//! program
// let a = Number.isInteger(5);
// console.log(a);
//! program
// function check() {
//   let input = parseInt(document.getElementById("input").value);
//   if (Number.isInteger(input)) {
//     console.log("yes its interger :");
//     (p.innerText = "verry good : "), (p.style.color = "black");
//     p2.style.display = "block";
//     document.getElementById("input").value = "";
//     t(input);
//   } else {
//     console.log("its not integer");
//     document.getElementById("input").value = "";
//     p.innerText = "sorry its not integers";
//     p.style.color = "red";
//     p2.style.display = "none";
//   }
// }
// function t(num1) {
//   let a;
//   if (Number.isInteger(num1)) {
//     a = num1;
//     let b = a.toString().split("").reverse().join("");

//     (p.innerText = b + " its reversed : "), (p.style.color = "green");
//     (p2.innerText = a + " you Entered : "), (p.style.color = "red");
//     console.log(b);
//   }
// }

//!program 56;
// let pera1 = document.getElementById("demo1");
// let pera2 = document.getElementById("demo2");

// function check() {
//   let input = parseInt(document.getElementById("inp").value);

//   if (Number.isInteger(input)) {
//     let a = input.toString().split(" ");
//     pera1.innerText = a;
//     pera2.innerText = a;
//   } else {
//     (pera1.innerText = "wrong"), (pera1.style.color = "red");
//   }
// }

// function check() {
//   console.log("jelllpo sir");
// }
// setTimeout(check, 2000);

function check() {
  let ms = 7000 + new Date().getTime();
  console.log("waeit for 7 seconds")
  while (new Date() < ms) {}
}

setTimeout(function () {
  console.log(" i am asincurness");
}, 2000);

check();
