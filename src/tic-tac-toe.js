class TicTacToe {
    constructor() {
        this.player = "x",
        this.winner = null,
        this.marksStorage = [[null, null, null], [null, null, null], [null, null, null]]
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.marksStorage[rowIndex][columnIndex] === null) {
            this.marksStorage[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.player === "x" ? this.player = "o" : this.player = "x";
        }
    }

    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.marksStorage[i][0] === this.marksStorage[i][1] 
                && this.marksStorage[i][0] === this.marksStorage[i][2]) {
                this.winner = this.marksStorage[i][0];
            }
            if (this.marksStorage[0][i] === this.marksStorage[1][i] 
                && this.marksStorage[0][i] === this.marksStorage[2][i]) {
                this.winner = this.marksStorage[0][i];
            }
        }

        if (this.marksStorage[0][0] === this.marksStorage[1][1] 
            && this.marksStorage[0][0] === this.marksStorage[2][2]) {
            this.winner = this.marksStorage[0][0];
        }
        if (this.marksStorage[0][2] === this.marksStorage[1][1] 
            && this.marksStorage[0][2] === this.marksStorage[2][0]) {
            this.winner = this.marksStorage[0][2];
        }

        return this.winner;
    }

    noMoreTurns() {
        let result;
        for (let i = 0; i < this.marksStorage.length; i++) {
                result = this.marksStorage[i].every(el => {
                    return el !== null;
                });
                if (!result) {
                    break;
                }
        }
        return result;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner() ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marksStorage[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
