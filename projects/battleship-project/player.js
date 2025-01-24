import {Gameboard} from "./gameboard.js";

export class Player {

    constructor(name, isComputer = false)
    {
        this.name = name;
        this.isComputer = isComputer;
        this.gameboard = new Gameboard();
    }

    attack(opponentBoard,x,y)
    {
        if(this.isComputer)
        {
            let result;

            do {
                x = Math.floor(Math.random() * opponentBoard.size);
                y = Math.floor(Math.random() * opponentBoard.size);

               
                result = opponentBoard.receiveAttack(x,y,this.isComputer);
                console.log(result);
            } while (result != "hit" && result != "miss" && result != "sunk");
            return result
        }
        else{
            return opponentBoard.receiveAttack(x,y);
        }
    }

}
