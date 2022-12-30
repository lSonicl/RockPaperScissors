let scores = [0,0,0];
game();

function game()
{
    for (let counter = 1; counter <= 5; counter++)
    {   
        let cpuChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        console.log(playRound(playerChoice, cpuChoice));
    }

    console.log(`Final score (You-Computer-Draw): ${scores[0]}-${scores[1]}-${scores[2]}`)
}

function getComputerChoice()
{
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
    let choice = Math.floor(Math.random() * 3);
    return CHOICES[choice];
}

function getPlayerChoice()
{
    let playerChoice = prompt("Enter Rock, paper, or scissors");
    playerChoice = playerChoice.toUpperCase();

    while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS")
    {
        playerChoice = prompt("Invalid entry. Please enter Rock, paper, or scissors");
        playerChoice = playerChoice.toUpperCase();
    }

    return playerChoice;
}

function playRound(playerChoice, cpuChoice)
{
    console.log(`You: ${playerChoice}, Computer: ${cpuChoice}`);
    if (playerChoice === cpuChoice)
    {
        scores[2] += 1;
        return `Round ends in a draw. Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
    }

    else
    {
        switch (playerChoice)
        {
            case "ROCK":
            {
                if (cpuChoice === "SCISSORS")
                {
                    scores[0] += 1;
                    return `You win this round! Rock breaks scissors! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }

                else 
                {
                    scores[1] += 1;
                    return `You lose this round! Paper covers rock! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }
                break;
            }
            case "PAPER":
            {
                if (cpuChoice === "ROCK")
                {
                    scores[0] += 1;
                    return `You win this round! Paper covers rock! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }
    
                else 
                {
                    scores[1] += 1;
                    return `You lose this round! Scissors cuts paper! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }
                break;
            }
            case "SCISSORS":
            {
                if (cpuChoice === "PAPER")
                {
                    scores[0] += 1;
                    return `You win this round! Scissors cut paper! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }
        
                else 
                {
                scores[1] += 1;
                return `You lose this round! Rock breaks scissors! Current score: ${scores[0]}-${scores[1]}-${scores[2]}.`
                }
                break;
            }
            default:
                return `Something is broken somewhere in the code!`;
        }
    }
}