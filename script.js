const tictactoe = (function (){
    let gameBoard = {row1:[" "," "," "],
                     row2:[" "," "," "],
                     row3:[" "," "," "]};
                    
    function displayBoard() {
        console.log(`${gameBoard.row1}\n${gameBoard.row2}\n${gameBoard.row3}`)
    }

    const playerX = {
        mark: function(area) {
            const rowIndex = Math.floor((area - 1) / 3);
            const colIndex = (area - 1) % 3;
            const rowKey = `row${rowIndex + 1}`;
            if (gameBoard[rowKey][colIndex] !== " ") {
                console.log("Error: that area is already marked");
            } else {
            gameBoard[rowKey][colIndex] = 'X';
            }
            displayBoard();
        }
    };

    const playerO = {
        mark: function(area) {
            const rowIndex = Math.floor((area - 1) / 3);
            const colIndex = (area - 1) % 3;
            const rowKey = `row${rowIndex + 1}`;
            if (gameBoard[rowKey][colIndex] !== " ") {
                console.log("Error: that area is already marked");
            } else {
            gameBoard[rowKey][colIndex] = 'O';
            }
            displayBoard();
        }
    };
        
    return {gameBoard, playerX, playerO}

})();