const choices = ["rock", "Paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function PlayGame(PlayerChoices){

  const computerChoices = choices[Math.floor((Math.random() * 3 ))] ;
  let result = "" ;

       if(PlayerChoices === computerChoices){
             result = "IT'S A TIE!"
         }
    else{

        switch(PlayerChoices)  {
            case "rock":
              result =  (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

             case "Paper":
                result = (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSE!";
                 break;

              case "scissors":
                result =  (computerChoices === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
   

           }
        }
        playerDisplay.textContent = `PLAYER: ${PlayerChoices}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoices}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greentext", "redtext")

            switch(result){
                case "YOU WIN!":
                    resultDisplay.classList.add("greentext");
                    playerScore++;
                   
                    playerScoreDisplay.textContent = playerScore;
                   
                    break;
                case "YOU LOSE!":
                    resultDisplay.classList.add("redtext");
                    computerScore++;

                    computerScoreDisplay.textContent = computerScore;
                    break;
            }
    }
