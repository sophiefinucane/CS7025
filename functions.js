let playerScore = 0

function addPoint() {
    playerScore += 1
    console.log(playerScore)
}
function displayScore() {
    console.log(playerScore);
}
addPoint();
addPoint();
addPoint();
addPoint();
addPoint();


if (playerScore % 2 === 0) {
    console.log("Your score is even!");
} else {
    console.log("Your score is odd!");
}