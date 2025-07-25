const btnelement = document.getElementById("btn");
const firstNameElement = document.getElementById("fname");
const formElemnt = document.getElementById("form");
const messageDiv = document.getElementById("message");
const nextBtn = document.getElementById("next");

let fname = "";
let lines = [];
let index = 0;

btnelement.addEventListener("click", () => {
  fname = firstNameElement.value;

  // Hide the input + click here button
  formElemnt.style.display = "none";

  // Your message lines
  lines = [
    `${fname}...`,
    "first off... I'm honestly really bad at communicating, so I’ll try to keep this short....",
    "I really liked you, and I just needed to let that out otherwise, I’d probably regret it.",
    "this is probably wierd for me to do smthn like this but ehhhhh",
    "some time back, something happened that messed with me — made me develop trust issues and put me in a weird place",
    "even though ive only talked with u once and barely met u ama miss u wen u leave",
    "anyways i was free and had to improve on my js skills so i decided to do this 😂😂",
    "dont judge me am crazzyyyy that wayyy"
  ];

  // Show first line
  const p = document.createElement("p");
  p.textContent = lines[index];
  messageDiv.appendChild(p);

  // Show next button
  nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", () => {
  index++;

  if (index < lines.length) {
    const p = document.createElement("p");
    p.textContent = lines[index];
    messageDiv.appendChild(p);
  } else {
    nextBtn.style.display = "none";
    messageDiv.innerHTML += "<br><br><em>well thanks for reading, byeeeeee.</em>";
  }
});
