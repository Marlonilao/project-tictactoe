const tictactoe = (function (){
    let gameBoard = {row1:[" "," "," "],
                     row2:[" "," "," "],
                     row3:[" "," "," "]};
                    
    function displayBoard() {
        console.log(`${gameBoard.row1}\n${gameBoard.row2}\n${gameBoard.row3}`)
    }

    const players = {
        x: function(area) {
            const rowIndex = Math.floor((area - 1) / 3);
            const colIndex = (area - 1) % 3;
            const rowKey = `row${rowIndex + 1}`;
            if (gameBoard[rowKey][colIndex] !== " ") {
                console.log("Error: that area is already marked");
            } else {
            gameBoard[rowKey][colIndex] = 'X';
            }
            // displayBoard();
            // checkBoardforWinner();
        },
        o: function(area) {
            const rowIndex = Math.floor((area - 1) / 3);
            const colIndex = (area - 1) % 3;
            const rowKey = `row${rowIndex + 1}`;
            if (gameBoard[rowKey][colIndex] !== " ") {
                console.log("Error: that area is already marked");
            } else {
            gameBoard[rowKey][colIndex] = 'O';
            }
            // displayBoard();
            // checkBoardforWinner();
        }
    }

    function checkBoardforWinner(){ 
        if (gameBoard.row1[0] == "X" && gameBoard.row1[1] == "X" && gameBoard.row1[2] == "X"){
            console.log('player X wins')
        } else if (gameBoard.row2[0] == "X" && gameBoard.row2[1] == "X" && gameBoard.row2[2] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row3[0] == "X" && gameBoard.row3[1] == "X" && gameBoard.row3[2] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[0] == "O" && gameBoard.row1[1] == "O" && gameBoard.row1[2] == "O"){
            console.log('player O wins');
        } else if (gameBoard.row2[0] == "O" && gameBoard.row2[1] == "O" && gameBoard.row2[2] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row3[0] == "O" && gameBoard.row3[1] == "O" && gameBoard.row3[2] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row1[0] == "X" && gameBoard.row2[0] == "X" && gameBoard.row3[0] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[1] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[1] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[2] == "X" && gameBoard.row2[2] == "X" && gameBoard.row3[2] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[0] == "O" && gameBoard.row2[0] == "O" && gameBoard.row3[0] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row1[1] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[1] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row1[2] == "O" && gameBoard.row2[2] == "O" && gameBoard.row3[2] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row1[0] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[2] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[2] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[0] == "X") {
            console.log('Player X wins');
        } else if (gameBoard.row1[0] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[2] == "O") {
            console.log('Player O wins');
        } else if (gameBoard.row1[2] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[0] == "O") {
            console.log('Player O wins');
        } else if (!gameBoard.row1.includes(" ") && !gameBoard.row2.includes(" ") && !gameBoard.row3.includes(" ")) {
            console.log("Its a tie!")
        }
    }

    function gameFlow() {
        const playerXname = "Player X";
        const playerOname = "Player O";

        const players = [
            {name: playerXname,
             mark: "X"
            },
            {name: playerOname,
             mark: "O"
            }
        ]

        let activePlayer = players[0];

        const switchPlayerTurn = () => {
            activePlayer = activePlayer == players[0] ? players[1] : players[0];
        }

        return {switchPlayerTurn}
    }
    
    return {gameBoard, players, checkBoardforWinner, displayBoard}

})();