let userscore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const botscorepara = document.querySelector("#bot-score");

// Bot Choices
const botChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
}

// User choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choices was clicked", userChoice);
        playGame(userChoice);
    });
});

// Winner display
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else {
        botscore++;
        botscorepara.innerText = botscore;
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

// Function for draw probability
const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is draw. Play again!";
    msg.style.background = "rgb(9, 9, 48)";
};

//main game functions while playing
const playGame = (userChoice) => {
    console.log("user-choice is = ", userChoice);
    const compChoice = botChoice();
    console.log("Comp-choice is = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
