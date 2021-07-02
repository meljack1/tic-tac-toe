const gameBoard = (() => {
    const boardArray = ["", "", "", 
                        "", "", "",
                        "", "", "",];

    // Update board with correct symbol
    const addToBoard = (field) => {
        const i = field.id;
        field.textContent = boardArray[i];
    }

    return {boardArray, addToBoard};
})();

const Player = (s) => {
    const sign = s;
    const makeMove = (index) => {
        const field = document.getElementById(index);
        gameBoard.boardArray[index] = sign;
        gameBoard.addToBoard(field);
    };
    return {makeMove};
};

const playerX = Player("X");
const playerO = Player("O");