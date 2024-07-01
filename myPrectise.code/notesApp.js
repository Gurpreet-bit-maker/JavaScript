//! THIS IS LENDHY APROACH
// let div2 = document.createElement("div");
// let textArea = document.createElement("textarea");
// div2.appendChild(textArea);
// div2.setAttribute("id", "textDiv");
// preappend
// let d = document.createElement('input');
// body.prepend(d);
//!THIS IS SHORT AND FIND APROACH
let div = document.getElementById("cont");
let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", function () {
  let div = document.createElement("div");
  let text = document.createElement("textarea");
  let img = document.createElement("img");
  img.src =
    "/project_img/png-clipart-computer-icons-delete-button-miscellaneous-text-thumbnail.png";
  img.classList.add("img-c");
  div.setAttribute("class", "div");
  container.appendChild(div);
  div.appendChild(text);
  text.insertAdjacentElement("afterend", img); // solved bug
  saveData();
});

// delete button;
container.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}
function getdata() {
  let rala = localStorage.getItem("data");
  if (rala) {
    container.innerHTML = rala;
  }
}
getdata();
