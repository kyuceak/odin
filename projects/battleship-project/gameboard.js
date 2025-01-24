export class Gameboard {
  constructor(size = 10) {
    this.size = 10;
    this.board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));

    this.ships = [];
  }

  validateCords(ship, x, y, isHorizontal) {
    if (isHorizontal) {
      if (x + ship.length > this.size) return false;

      for (let i = 0; i < ship.length; i++) {
        if (this.board[y][x + i] !== null) return false;
      }
    } else {
      if (y + ship.length > this.size) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[y + i][x] !== null) return false;
      }
    }

    return true;
  }

  placeShip(ship, x, y, isHorizontal, isComputer) {
    if (!this.validateCords(ship, x, y, isHorizontal)) {
      return "error";
    }

    for (let i = 0; i < ship.length; i++) {
     
      if (isHorizontal) {
        if (!isComputer) {
          this.board[y][x + i] = { ship, position: i, player: "playerShip" };
        } else {
          this.board[y][x + i] = { ship, position: i, player: "computer" };
        }
      } else {
        this.board[y + i][x] = { ship, position: i };
        if (!isComputer) {
          this.board[y + i][x] = { ship, position: i, player: "playerShip" };
        } else {
          this.board[y + i][x] = { ship, position: i, player: "computer" };
        }
      }
    }
    this.ships.push(ship);
    return "success";
  }

  receiveAttack(x, y, isComputer) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      throw new Error("attack out of bounds");
    }
    // debugger;
    if (this.board[y][x] == null) {
      this.board[y][x] = "miss";
      return "miss";
    } else if (this.board[y][x] == "miss" || this.board[y][x] == "hit") {
      if (isComputer) {
        return "again";
      }
      alert("you already attacked there");
    } else {
   
      const { ship, position } = this.board[y][x];
      console.log(ship, position, isComputer);

      ship.hit(position);

      console.log(x, y, isComputer);

      this.board[y][x] = "hit";
      return ship.isSunk ? "sunk" : "hit";
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  resetBoard() {
    this.ships.length = 0;
    this.board.forEach((arr) => arr.fill(null));
  }
}
