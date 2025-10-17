# Rock-Paper-Scissors

AA simple interactive **Rock, Paper, Scissors** game built using vanilla JavaScript. This game allows a human player to compete against the computer in 5 rounds using a text-based interface via `prompt()` and `console.log()`.

---

## 🎮 How It Works

- The game plays **5 rounds** of Rock, Paper, Scissors.
- The human player selects a move using a numeric prompt:
  - `1` = Rock
  - `2` = Paper
  - `3` = Scissors
- The computer randomly selects a move.
- The result of each round is displayed in the console.
- Scores are tracked for both the player and computer.
- After 5 rounds, a final result is displayed:
  - Win
  - Loss
  - Draw

---

## 🧠 Game Logic

- Rock beats Scissors  
- Paper beats Rock  
- Scissors beats Paper  
- Same choice = Draw  

Each round compares the human's choice and the computer's choice using a `switch` and `if/else` based logic.

---

## 🧾 Files

- `index.html`  
  The basic HTML structure to run the game (if needed for browser execution).

- `script.js`  
  Contains all the JavaScript code to run the game:
  - `getHumanChoice()` — prompts the user for input
  - `getComputerChoice()` — randomly selects a computer move
  - `playRound()` — handles the round outcome and scoring
  - `playGame()` — manages round flow and displays results

---

## 🛠 How to Run

1. Open the project folder.
2. Open `index.html` in a web browser (or run from a local server).
3. Open the browser **console** (`F12` or right-click > Inspect > Console).
4. Play the game by following the prompts!

---
## 🔗 Live Demo

[Click here to play the game](https://unggie.github.io/rock-paper-scissors/)

## 📄 License

This project is open-source and free to use for learning or development purposes.
---
## 🙌 Credits

Developed as a beginner JavaScript project to practice functions, conditionals, and user interaction in the browser.
