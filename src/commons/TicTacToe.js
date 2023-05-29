const FREE = 0
const CROSS = 1
const CIRCLE = 2

class TicTacToe {
    size
    schema
    currentPlayer
    freeCells
    isGameOver
    winnerPath
    constructor(size){
        this.size = size;
        this.schema = Array(size).fill(0).map(() => Array(size).fill(FREE))
        this.currentPlayer = CROSS
        this.freeCells = size ** 2
        this.winner = FREE
        this.isGameOver = false
        this.winnerPath = []
    }


    isEmpty(i, j) {
        return this.isValid(i, j) && this.schema[i][j] === FREE
    }

    isValid(i, j) {
        return typeof this.schema?.[i]?.[j] === 'number'
    }

    nextPlayer() {
        this.currentPlayer = this.currentPlayer === CROSS ? CIRCLE : CROSS
    }

    getRow(i){
        return Array.from(Array(this.size).keys()).map(k => [i, k])
    }

    getColumn(j){
        return Array.from(Array(this.size).keys()).map(k => [k, j])
    }

    getDiagonalOne(){
        return Array.from(Array(this.size).keys()).map(k => [k, k])
    }

    getDiagonalTwo(){
        return Array.from(Array(this.size).keys()).map(k => [this.size - 1 - k, k])
    }

    checkRow(i) {
        return this.getRow(i).every(p => this.schema[p[0]][[p[1]]] === this.currentPlayer)
    }

    checkColumn(j) {
        return this.getColumn(j).every(p => this.schema[p[0]][[p[1]]] === this.currentPlayer)
    }

    checkDiagonalOne() {
        return this.getDiagonalOne().every(p => this.schema[p[0]][[p[1]]] === this.currentPlayer)
    }

    checkDiagonalTwo() {
        return this.getDiagonalTwo().every(p => this.schema[p[0]][[p[1]]] === this.currentPlayer)
    }

    checkWinner(i, j) {
        if(this.checkRow(i)) {
            this.winnerPath = this.getRow(i)
        } else if(this.checkColumn(j)){
            this.winnerPath = this.getColumn(j)
        } else if(this.checkDiagonalOne()){
            this.winnerPath = this.getDiagonalOne()
        }else if(this.checkDiagonalTwo()){
            this.winnerPath = this.getDiagonalTwo()
        }else {
            return FREE
        }
        return this.currentPlayer;
    }

    checkIsGameOver(){
        return !this.freeCells && this.winner === FREE
    }


    addSymbol(i, j){
        if(this.isEmpty(i, j) && !this.winner){
            this.schema[i][j] = this.currentPlayer
            this.freeCells--
            this.winner = this.checkWinner(i, j)
            this.isGameOver = this.checkIsGameOver()
            this.nextPlayer()
        }
    }

}

export default TicTacToe