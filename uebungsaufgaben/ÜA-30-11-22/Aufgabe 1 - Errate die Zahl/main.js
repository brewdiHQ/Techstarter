let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //Keine Eingabe
  if (!guess) {
    document.querySelector(".message").textContent =
      "Bitte wähle eine Zahl zwischen 1-100!!";
    //Volltreffer
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Volltreffer!!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "35682d";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //Erratene Nummer zu hoch
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Deine Mummer ist ZU HOCH";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Keine Versuche mehr übrig. Du hast leider verloren!!";
      document.querySelector(".score").textContent = 0;
    } //Erratene Nummer zu niedrig
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Deine Nummer ist ZU NIEDRIG";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Leider verloren";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//Neustart Button
document.querySelector(".again").addEventListener("click", function () {
  const handler = (score = 20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent =
    "Zu HOCH oder zu NIEDRIG? Wir werden sehen";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
