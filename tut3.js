let btn = document.getElementById("btn");
let p = document.getElementById("demo");
btn.addEventListener("click", function () {
  let passWord = parseInt(document.getElementById("password").value);
  let userName = document.getElementById("userName");
  if (isNaN(passWord)) {
    p.style.color = "red";
    p.innerText = "Enter Numeric";
    p.style.textDecoration = "underline";
  } else if (passWord.toString().length < 4) {
    p.innerText = "Week password " + "greter than 8";
  } else {
    p.innerText = passWord;
    p.style.color = "green";
  }
});

password.addEventListener("mouseout", function () {
  let password = document.getElementById("password").value;

  if (password === "") {
  } else {
    p.style.color = "white";
    p.innerText = "Try Again : ";
  }
});

// employee data

// let person = {
//   name: "Gurpreet",
//   age: 25,
//   class: 10,
// };
// let person2 = {
//   name: "Anil",
//   age: 29,
//   class: 10,
// };
// let person3 = {
//   name: "Shubhankar",
//   age: 25,
//   class: 10,
// };

// let age = document.getElementById("Age");
// let cla = document.getElementById("Sub");

// button.addEventListener("click", function () {

//   if (tr === person.name ) {
//     for (const key in person) {
//       console.log(person[key]);
//     }
//     nam.innerText = `Name : ${person.name}`;
//     age.innerText = `Age : ${person.age}`;
//     cla.innerText = `Class : ${person.class}`;
//   } else {
//     console.log("try again");
//   }

// let button = document.querySelector(".btn");

let nam1 = document.getElementById("n1");
let nam2 = document.getElementById("n2");
let nam3 = document.getElementById("n3");
let nam4 = document.getElementById("n4");

let container = document.querySelector(".con");

let tr = document.getElementById("try");


tr.addEventListener("input", function (e) {
  switch (tr.value) {
    case "d":
        let count = 1;
        if (tr.value) {
            let select = document.createElement("select");
            let f1 = document.createElement("option");
            let f2 = document.createElement("option");
            let f3 = document.createElement("option");
            let f4 = document.createElement("option");
      
            container.appendChild(select);
            select.appendChild(f1);
            select.appendChild(f2);
            select.appendChild(f3);
            select.appendChild(f4);
      
            let arr = ["delhi", "delvi", "dhadhar", "dhundh"];
            f1.textContent = arr[0];
            f2.textContent = arr[1];
            f3.textContent = arr[2];
            f4.textContent = arr[3];
            let allelement = [select,f1,f2,f3,f4];
            count = 2;
        }else if (count === 2) {
           allelement.forEach(element => {
            if (element.parentNode) {
                element.parentNode.remove(element);
            }
           });
           count = 1;
        }
      

      break;

    default:
      break;
  }

  nam.innerText = tr.value;
});
