const quiz = [
  { q: "Which language styles web pages?", c: ["HTML", "CSS", "C"], a: 1 },
  { q: "Which symbol ends a statement in C?", c: [";", ":", "."], a: 0 },
  { q: "What does HTML stand for?", c: ["HyperText Markup Language", "High Text Machine Language", "Home Tool Markup Language"], a: 0 }
];

let i = 0, score = 0;
const qEl = document.getElementById("question");
const cEl = document.getElementById("choices");
const rEl = document.getElementById("result");

function show() {
  if (i >= quiz.length) {
    qEl.textContent = "Quiz done!";
    cEl.innerHTML = "";
   let message;
if (score >= 3) {
  message = "Good job!";
} else if (score == 2) {
  message = "Nice, almost there!";
} else {
  message = "kaya ka iniiwan eh!";
}
rEl.textContent = "Score: " + score + "/" + quiz.length + " - " + message;
    return;
  }
  qEl.textContent = quiz[i].q;
  cEl.innerHTML = "";
  quiz[i].c.forEach((text, n) => {
    const b = document.createElement("button");
    b.textContent = text;
    b.onclick = () => {
      if (n === quiz[i].a) score++;
      i++;
      show();
    };
    cEl.appendChild(b);
  });
}
show();