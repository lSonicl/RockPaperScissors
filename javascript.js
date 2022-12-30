getComputerChoice();
getPlayerChoice();

function getComputerChoice()
{
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
    let choice = Math.floor(Math.random() * 3);
    console.log(CHOICES[choice]);
}

function getPlayerChoice()
{
    let playerChoice = prompt("Enter Rock, paper, or scissors");
    playerChoice = playerChoice.toUpperCase();
    console.log(playerChoice);

    while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS")
    {
        playerChoice = prompt("Invalid entry. Please enter Rock, paper, or scissors");
        playerChoice = playerChoice.toUpperCase();
    }
}
