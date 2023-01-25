// this was things i learnt from fireship i used the things he teached and played around with them.

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

let question;
while (true) {
  question = prompt("how old do you think i am :)");
  if (question == 20) {
    alert("Good job i am 20 years old :)");
    break;
  } else if (question < 20) {
    confirm("Im older than that :)  Try again");
  } else if (question > 20) {
    confirm("Wow you really think im that old :(  try again");
  } else {
    confirm("do you not know how to use numbers ?");
  }
}

let question1 = confirm("Do you like waves ?");

if (question1 == true) {
  alert("Nice");
} else {
  alert(":(");
}

let question2 = confirm("Are you older than 30 ?");

if (question2) {
  alert("Congratulations your old");
} else {
  alert("not old yet...");
}

let question3 = confirm("Do you like animations ?");

if (question3) {
  alert("Thats the correct answer :)");
} else {
  alert(":(");
}

let question4 = confirm("Do you like piano ?");
if (question4) {
  alert("Goog job thats the right answer :)");
} else {
  alert("thats the wrong answer :(");
}

let question5 = confirm("Do you like films ?");
if (question5) {
  alert("nice i also like films");
  let favFilm = prompt("whats your favorite film ?");
  alert(favFilm + " thats a good film.");
} else {
  alert("Why do you have a wrong opinion ?");
}

function guessPassword() {
  let answer;

  while (answer != 1234) {
    answer = prompt("Guess the password 0-9");

    if (answer != 1234) {
      alert(" Hint = nCr(12,6) +e^(ln(7x(1.5x10-3))) x 2√4 - log(10^26)");
    } else {
      alert("Welldone you cracked the code ENTER AT YOUR OWN RISK!");
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
} else {
  alert("your film taste might be good but mine is better");
}
