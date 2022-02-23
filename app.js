var randomNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector('.image1').setAttribute("src", "dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector('.image2').setAttribute("src", "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = " 🚩Player 1 Wins!"
}
if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"
}
if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw!"
}

