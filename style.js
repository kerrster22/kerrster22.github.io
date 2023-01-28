// this was things i learnt from fireship i used the things he teached and played around with them.
"use strict";
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let username = prompt("what is your name ?");
alert("hi its nice to meet you " + username);
let points = 0;
let question;
while (true) {
  question = prompt("how old do you think i am :)");
  if (question == 21) {
    alert("Good job i am 21 years old :)");
    points++;
    break;
  } else if (question < 21) {
    confirm("Im older than that :)  Try again");
  } else if (question > 21) {
    confirm("Wow you really think im that old :(  try again");
  } else {
    confirm("do you not know how to use numbers ?");
  }
}

let question1 = confirm("Do you like waves ?");

if (question1 == true) {
  alert("Nice");
  points++;
} else {
  alert(":(");
}

let question2 = confirm("Are you older than 30 ?");

if (question2) {
  alert("Congratulations your old");
  points++;
} else {
  alert("not old yet...");
  points++;
}

let question3 = confirm("Do you like animations ?");

if (question3) {
  alert("Thats the correct answer :)");
  points++;
} else {
  alert(":(");
}

let question4 = confirm("Do you like piano ?");
if (question4) {
  alert("Goog job thats the right answer :)");
  points++;
} else {
  alert("thats the wrong answer :(");
}

let question5 = confirm("Do you like films ?");
if (question5) {
  alert("nice i also like films");
  let favFilm = prompt("whats your favorite film ?");
  alert(favFilm + " thats a good film.");
  points++;
} else {
  alert("Why do you have a wrong opinion ?");
}

function guessPassword() {
  let answer;
  let attempts = 6;
  while (answer != 1234 && attempts != 0) {
    answer = prompt("Guess the password 0-9");

    if (answer != 1234 && attempts > 0) {
      alert(
        " Hint = nCr(12,6) +e^(ln(7x(1.5x10-3))) x 2√4 - log(10^26)" +
          " guesses left =" +
          attempts
      );
      attempts--;
    } else if (answer == 1234 && attempts > 0) {
      alert("Welldone you cracked the code ENTER AT YOUR OWN RISK!");
      points++;
      break;
    }
  }
}
guessPassword();

let film = prompt("What is my favorite film").toLowerCase();
let filmsILike = [
  "mishima: a life in four chapters",
  "parasite",
  "portrait of a lady on fire",
  "decision to leave",
  "a silent voice",
  "seven samurai",
  "the thing",
  "everything everywhere all at once",
  "an elephant sitting still",
];

if (filmsILike.includes(film)) {
  alert("Hey you have great taste in films :) ");
  points++;
} else {
  alert("your film taste might be good but mine is better");
}
alert(points + " this if your final score");
