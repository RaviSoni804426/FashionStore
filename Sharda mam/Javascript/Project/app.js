const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turno = true; // true for 'O', false for 'X'
let boardState = Array(9).fill("");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleClick(box, index));
});

function handleClick(box, index) {
    if (boardState[index] === "") {
        boardState[index] = turno ? "O" : "X";
        box.innerText = boardState[index];
        box.disabled = true;
        turno = !turno;
        checkWinner();
    }
}

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            endGame(`${boardState[a]} wins!`);
            return;
        }
    }

    if (!boardState.includes("")) {
        endGame("It's a draw!");
    }
}

function endGame(result) {
    msg.innerText = result;
    msgContainer.classList.remove("hide");
    boxes.forEach(box => (box.disabled = true));
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

function resetGame() {
    boardState.fill("");
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turno = true;
}
