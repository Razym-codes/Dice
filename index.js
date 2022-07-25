x = document.querySelector("img").setAttribute("src", "images/dice1.png");
y = document.querySelector(".dice2").setAttribute("src", "images/dice1.png");

function rand() {


  let randomNumber1 = Math.ceil(Math.random() * 6);
  let randomNumber2 = Math.ceil(Math.random() * 6);




  let x = document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  let y = document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 == randomNumber2) {
    result = "🏳️Draw🏳️";
  } else {
    result = randomNumber1 > randomNumber2 ? "🚩 Player 1 is the winner" : "Player 2 is the winner 🚩";
  }
  document.querySelector(".result").innerText = result;

  
}
