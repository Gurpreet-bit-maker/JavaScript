let queList = [
  {
    question: "Which one is largest animal ",
    //   'answer': [ "elehent", "dog", "cat"],
    //   'correctAns' : "elephent",
    answere: [ 
      { text: "elphent", correct: true },
      { text: "dog", correct: false },
      { text: "cat", correct: false },
    ],
  },
  {
    question: "Which one is smalest animal ",
    answere: [
      { text: "elphent", correct: false },
      { text: "dog", correct: false },
      { text: "cat", correct: true },
    ],
  },
];

let currentQueIndex = 0;
let opd = '';

const questionLine = document.getElementById("question"); //h2
const options = document.getElementById("options"); //empty div
const next = document.getElementById("next");
const prev = document.getElementById("prev");

questionLine.innerHTML = queList[currentQueIndex].question;
queList[currentQueIndex].answere.forEach((op,index) => {
    opd += `<button id= 'option${index}' class="option">${op.text}</button>`;
    // opd = opd + op.text
    options.innerHTML = opd;
    
});


