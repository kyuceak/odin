export const DOM = ( () => {

    const renderBoard = (gameboard, container) => {
        container.innerHTML = "";
        
       
        for(let y = 0; y < gameboard.size; y++)
        {
            const row = document.createElement("div");
            row.classList.add("row");


            for(let x = 0; x < gameboard.size; x++)
            {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.x = x;
                cell.dataset.y = y;

                if (gameboard.board[y][x] === "miss") {
                    cell.classList.add("miss"); 
                  } else if (gameboard.board[y][x] === "hit") {
                    cell.classList.add("hit"); 
                  }
                  else if(gameboard.board[y][x]?.player === "playerShip")
                  {
                    cell.classList.add("playerShip");
                  }
                  row.appendChild(cell);
            }

            container.appendChild(row); 
        }


    }


    return {renderBoard};
})();