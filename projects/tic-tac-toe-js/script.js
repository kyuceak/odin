
const GameBoard = (function Gameboard(){
    let gameboardArr = ["","","","","","","","",""];


    const winPatterns = [
        [0,1,2], // row 1
        [3,4,5], // row 2
        [6,7,8], // row 3
        [0,3,6], // col 1
        [1,4,7], // col 2
        [2,5,8], // col 3
        [0,4,8], // diagonal 1
        [2,4,6] // diagonal 2
    ]

    const getBoard = () => {
        return gameboardArr;
    }

    const checkWinner = () => {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            

            if(gameboardArr[a] != ""){
            if (
                gameboardArr[a] === gameboardArr[b] &&
                gameboardArr[b] === gameboardArr[c]
            ) {
                console.log("We Have a Winner:", gameboardArr[a]);
                return currentPlayer.name; 
            }}
        }
        console.log("No winner yet."); 
    };


    const updateCell = (marker,index) => {
      

        if (!gameboardArr[index]) { // Only update empty cells
            gameboardArr[index] = marker;
            return true; // Successful move
        }
        return false; // Invalid move


    }





    return {checkWinner,updateCell,getBoard};
})()


const display = ( function display () {

    const cell1 = document.getElementById("cell1");
    const cell2 = document.getElementById("cell2");
    const cell3 = document.getElementById("cell3");
    const cell4 = document.getElementById("cell4");
    const cell5 = document.getElementById("cell5");
    const cell6 = document.getElementById("cell6");
    const cell7 = document.getElementById("cell7");
    const cell8 = document.getElementById("cell8");
    const cell9 = document.getElementById("cell9");

    let cellarr = [];

  
    for (let i = 1; i <= 9; i++) {
        cellarr.push(document.getElementById(`cell${i}`));
}
    
    

    let arr = GameBoard.getBoard();

    const render =  () => {

        arr.forEach( (cell,i) => {
            cellarr[i].textContent = cell;

        });

    }


   


  
    return {render, cellarr}
})()


const player1 = createPlayer("Kutay", "X");
const player2 = createPlayer("AI", "O");

let currentPlayer = player1; 
let count = 9;

display.cellarr.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        
        const isValidMove = GameBoard.updateCell(currentPlayer.marker, index);

        if (isValidMove) {
          
           
            display.render();
          
           
            const winner = GameBoard.checkWinner();
            if (winner) {
                setTimeout(() => alert(`${winner} wins!`), 0); // Delay 
                return; 
            }

            count--;
            if(count == 0){
                setTimeout(() => alert("Game over! Draw!"), 0); // Delay 
                return
            }

            currentPlayer = currentPlayer === player1 ? player2 : player1;
        } else {
            alert("Cell already taken!");
        }
    });
});



function createPlayer(name,marker){




    return {
        name,
        marker,
        play(index){
            GameBoard.checkWinner(); 
            GameBoard.updateCell(marker,index)
        }

    };
}


display.render();