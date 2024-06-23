let btn = document.getElementById("addBtn");
let demo = document.getElementById("demo");

btn.addEventListener("click", function (e) {
  let textadd = document.getElementById("addText");
  let note = localStorage.getItem("mynotes");

  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.push(textadd.value);
  localStorage.setItem("mynotes", JSON.stringify(notesObj));
  textadd.value = "";
});
