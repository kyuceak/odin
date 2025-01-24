import { Player } from "./player.js";
import { DOM } from "./dom.js";
import { Ship } from "./ship.js";


const player1 = new Player("Player 1");
const player2 = new Player("Computer", true);




player1.gameboard.placeShip(new Ship(3), 0, 0, true,false);
player2.gameboard.placeShip(new Ship(3), 2, 2, false,true);


const player1BoardContainer = document.querySelector("#player1-board");
const player2BoardContainer = document.querySelector("#player2-board");
const startButton = document.querySelector("#start-btn");
const randomiseBtn = document.querySelector("#randomise-btn");


DOM.renderBoard(player1.gameboard, player1BoardContainer);
DOM.renderBoard(player2.gameboard, player2BoardContainer);


randomiseBtn.addEventListener("click", () => {
    
    let result;
    do {
        player1.gameboard.resetBoard();
        const player_cord_x = Math.floor(Math.random() * player1.gameboard.size);
        const player_cord_y = Math.floor(Math.random() * player1.gameboard.size);
        const isHorizontal = Math.floor(Math.random() * 2);
        result = player1.gameboard.placeShip(new Ship(3), player_cord_x, player_cord_y, isHorizontal,false);

    }while(result == "error");

    DOM.renderBoard(player1.gameboard, player1BoardContainer);
});


startButton.addEventListener("click", () => {





    startListeningBoard();
});


const startListeningBoard = () => {

    player2BoardContainer.addEventListener("click", (e) => {
        const x = parseInt(e.target.dataset.x, 10);
        const y = parseInt(e.target.dataset.y, 10);
      //   console.log(x,y);
        if (!isNaN(x) && !isNaN(y)) {
          const result = player1.attack(player2.gameboard, x, y);
          // console.log(`Player 1 attacks (${x}, ${y}): ${result}`);
          DOM.renderBoard(player2.gameboard, player2BoardContainer);
      
          
        
          if (player2.gameboard.allShipsSunk()) {
            alert("Player 1 wins!");
          } else {
            // Computer's turn
            const computerResult = player2.attack(player1.gameboard);
          //   console.log(`Computer attacks: ${computerResult}`);
            DOM.renderBoard(player1.gameboard, player1BoardContainer);
      
           
            if (player1.gameboard.allShipsSunk()) {
              alert("Computer wins!");
            }
          }
        }
      });
}

