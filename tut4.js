// document.getElementsByTagName("nav")[0].firstElementChild.style.color = 'red';
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = 'green';
//?
// function t(fisrt, second, third) {
//   document.getElementsByTagName("li")[0].innerText = fisrt;
//   document.getElementsByTagName("li")[1].innerText = second;
//   document.getElementsByTagName("li")[2].innerText = third;
// }

// t("hello", "singh", "raaza");
// document.getElementsByTagName('div')[0].firstElementChild.style.color = 'red';
// document.getElementsByTagName('div')[0].lastElementChild.style.color = 'green';

// let l1 = document.getElementsByTagName('li')[0].style.background = 'red';
// let l2 = document.getElementsByTagName('li')[1].style.background = 'green';
// let l3 = document.getElementsByTagName('li')[2].style.background = 'yellow';

// Find the closest ancestor with the id 'el' from the element with id 'parent'

// if(el.closest('child'))
//     {
//         document.getElementsByTagName('li')[0].style.background = 'red';
//     }else if (pr.closest('child')) {
//         document.getElementsByTagName('li')[2].style.background = 'yellow';
//     }
//     else
//     {
//         document.getElementsByTagName('li')[0].style.background = 'green';
//     }

// let clos = el.closest(child);

// let id1 = document.getElementById('id1');
// let id2 = document.getElementById('id2');

// let parentspan = document.getElementById('parentspan');
// let childSpan = document.getElementById('child');
// console.log(childSpan.closest('#parentspan'));

// //? LOCAL STORAGE;
// //! store data
// localStorage.setItem('name1', 'singh');
// localStorage.setItem('name2', 'rahul');
// //! clear all data
// // localStorage.clear();
// //! remove perticuller value
// localStorage.removeItem('name1')
// //! receive data
// let name = localStorage.getItem('name1');
// console.log(name)
//* IF WE NEED STORE ARRAY IN LOCAL-S
// let arr = ["adrak", "banana", "apple"];
// localStorage.setItem("vagitables", arr); //!note
// let recData = localStorage.getItem("vagitables");
// console.log(recData); //* its given string if we store array
// //! we should use here JSON.stringify(arr); for convert in array
// localStorage.setItem("vagitables", JSON.stringify(arr));
// //! we can get this string in orignally array item with JSON
// let changeData = JSON.parse(localStorage.getItem("vagitables"));
// console.log(changeData);

//? JSON
//*EXAMPLE OF JSON.PARSE()
// let a = '["hello","sir"]';
// let jsondata = JSON.parse(a);
// console.log(jsondata);
//* EXAMPLE TWO
// let a = 254;
// let jsondata = JSON.stringify('a');
// console.log(jsondata)
//* EXAMPLE THREE
// let jsonArray = '[{"name": "preet", "person": "sujit"}]';
// let jsonValue = JSON.parse(jsonArray);

// jsonValue.forEach((element) => {
//   console.log(element.name + " " + element.person);
// });
// console.log(typeof jsonValue);


let a = [];
let str = "hello";

a.push(str);
console.log(a);
