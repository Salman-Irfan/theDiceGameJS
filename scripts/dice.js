
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource1 = "assets/images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

let randomImageSource2 = "assets/images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

let image2 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource2);



//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! ";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
