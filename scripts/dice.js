let player1Number = 0;
let player2Number = 0;
let playerTurn = 1;

let dice1 = document.querySelectorAll("img")[0];
let dice2 = document.querySelectorAll("img")[1];

let turnIndicator = document.querySelector("#turn-indicator");

dice1.addEventListener("click", () => {
    if (playerTurn === 1) {
        player1Number = Math.floor(Math.random() * 6) + 1;
        let randomDiceImage1 = "dice" + player1Number + ".png";
        let randomImageSource1 = "assets/images/" + randomDiceImage1;
        dice1.setAttribute("src", randomImageSource1);
        playerTurn = 2;
        turnIndicator.innerHTML = "Player 2's turn";
    }
});

dice2.addEventListener("click", () => {
    if (playerTurn === 2) {
        player2Number = Math.floor(Math.random() * 6) + 1;
        let randomDiceImage2 = "dice" + player2Number + ".png";
        let randomImageSource2 = "assets/images/" + randomDiceImage2;
        dice2.setAttribute("src", randomImageSource2);

        if (player1Number > player2Number) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        } else if (player2Number > player1Number) {
            document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }

        playerTurn = 1;
        turnIndicator.innerHTML = "Player 1's turn";
    }
});
