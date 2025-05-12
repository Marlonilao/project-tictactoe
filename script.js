const tictactoe = (function() {
    let gameBoard = {row1:[" "," "," "],
                     row2:[" "," "," "],
                     row3:[" "," "," "]};

       
    function displayBoard() {
        console.log(`${gameBoard.row1}\n${gameBoard.row2}\n${gameBoard.row3}`)
    }

    function clearBoard() {
        for (let i=0; i<3; i++) {
            gameBoard[`row${i+1}`][0] = " "
            gameBoard[`row${i+1}`][1] = " "
            gameBoard[`row${i+1}`][2] = " "
        }
    }

    function clearDOMBoard() {
        for (i=0; i<9; i++) {
            displayDOMLogic.tictactoeBox[i].textContent = " ";
        }
    }

    function checkBoardforWinner(){ 
        if (gameBoard.row1[0] == "X" && gameBoard.row1[1] == "X" && gameBoard.row1[2] == "X"){
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row2[0] == "X" && gameBoard.row2[1] == "X" && gameBoard.row2[2] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row3[0] == "X" && gameBoard.row3[1] == "X" && gameBoard.row3[2] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[0] == "O" && gameBoard.row1[1] == "O" && gameBoard.row1[2] == "O"){
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row2[0] == "O" && gameBoard.row2[1] == "O" && gameBoard.row2[2] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row3[0] == "O" && gameBoard.row3[1] == "O" && gameBoard.row3[2] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[0] == "X" && gameBoard.row2[0] == "X" && gameBoard.row3[0] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[1] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[1] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[2] == "X" && gameBoard.row2[2] == "X" && gameBoard.row3[2] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[0] == "O" && gameBoard.row2[0] == "O" && gameBoard.row3[0] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[1] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[1] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[2] == "O" && gameBoard.row2[2] == "O" && gameBoard.row3[2] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[0] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[2] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[2] == "X" && gameBoard.row2[1] == "X" && gameBoard.row3[0] == "X") {
            displayDOMLogic.getFooterMessage().textContent = 'Player X wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[0] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[2] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (gameBoard.row1[2] == "O" && gameBoard.row2[1] == "O" && gameBoard.row3[0] == "O") {
            displayDOMLogic.getFooterMessage().textContent = 'Player O wins';
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else if (!gameBoard.row1.includes(" ") && !gameBoard.row2.includes(" ") && !gameBoard.row3.includes(" ")) {
            displayDOMLogic.getFooterMessage().textContent = ("Its a tie!")
            gameControl.setGameStatus(false);
            gameControl.disableGame();
        } else {
            return;
        }
    }
    
    function getBoard(row) {
        return gameBoard[row];
    }

    return {getBoard, displayBoard, checkBoardforWinner, clearBoard, clearDOMBoard}

})();

const players = (function() {

    const playerX = 'Player X';
    const playerO = 'Player O';

    const playersArray = [ playerX, playerO ];

    let activePlayer = playersArray[0];

    const getActivePlayer = () => activePlayer;

    const switchPlayerTurn = () => {
        activePlayer = activePlayer == playersArray[0] ? playersArray[1] : playersArray [0];
        displayDOMLogic.getFooterMessage().textContent = `${activePlayer}'s turn`;
    }

    function x(area) {
        const rowIndex = Math.floor((area - 1) / 3);
        const colIndex = (area - 1) % 3;
        const rowKey = `row${rowIndex + 1}`;

        try {
            if (tictactoe.getBoard(rowKey)[colIndex] !== " ") {
                throw "Error: that area is already marked, still Player X's turn"
            }
            tictactoe.getBoard(rowKey)[colIndex] = 'X';
            displayDOMLogic.tictactoeBox[area-1].textContent = 'X';
            if (gameControl.getGameStatus()) {
                        switchPlayerTurn();
                    }
        }
        catch (err) {
            displayDOMLogic.getFooterMessage().textContent = err;
        }
    }

    function o(area) {
        const rowIndex = Math.floor((area - 1) / 3);
        const colIndex = (area - 1) % 3;
        const rowKey = `row${rowIndex + 1}`;

        try {
            if (tictactoe.getBoard(rowKey)[colIndex] !== " ") {
                throw "Error: that area is already marked, still Player O's turn"
            }
            tictactoe.getBoard(rowKey)[colIndex] = 'O';
            displayDOMLogic.tictactoeBox[area-1].textContent = 'O';
            if (gameControl.getGameStatus()) {
                        switchPlayerTurn();
                    }
        }
        catch (err) {
            displayDOMLogic.getFooterMessage().textContent = err;
        }
    }

    function clickHandler(e) {
        const box = e.currentTarget;
        if (activePlayer == playersArray[0]) {
            x(+box.id);
            tictactoe.checkBoardforWinner();
        } else {
            o(+box.id);
            tictactoe.checkBoardforWinner();
        }
    }

    function getPlayerMove() {
        displayDOMLogic.tictactoeBox.forEach(box => {
            box.addEventListener('click' , clickHandler)
        })
    }

    return {x, o, getPlayerMove, getActivePlayer, clickHandler}
})();


const gameControl = (function(){

    
    let gameStatus = false;

    function setGameStatus(status) {
        gameStatus = status;
    }

    function getGameStatus() {
        return gameStatus;
    }

    function gameStart(){
        gameStatus = true;
        players.getPlayerMove();
    }

    function disableGame() {
        if (gameStatus == false) {
            displayDOMLogic.tictactoeBox.forEach(box => {
                box.removeEventListener('click' , players.clickHandler)
            })
        }
        
    }

    return {gameStart, setGameStatus, getGameStatus, disableGame}

})();

const displayDOMLogic = (function() {
    // const header = document.querySelector('.header');
    // const headerMessage = document.querySelector('.header > p');
    const tictactoeContainer = document.querySelector('.main');
    const tictactoeBox = document.querySelectorAll('.main > div');
    // const footer = document.querySelector('.footer');
    const footerMessage = document.querySelector('.footer > p');
    const gameStartButton = document.querySelector('.header > p > #start');
    const restartButton = document.querySelector('.header >  p > #restart');

    const tictactoeArray = Array.from(tictactoeBox)

    function getFooterMessage() {
        return footerMessage;
    }

    gameStartButton.addEventListener('click', e => {
        gameControl.gameStart();
        footerMessage.textContent = `${players.getActivePlayer()} move first`;
    })
    
    restartButton.addEventListener('click' , e => {
        tictactoe.clearBoard();
        tictactoe.clearDOMBoard();
        gameControl.gameStart();
        footerMessage.textContent = `${players.getActivePlayer()} move first`;
    })


    return {tictactoeBox, footerMessage, tictactoeArray, tictactoeContainer, getFooterMessage, gameStartButton, tictactoeContainer}
})();