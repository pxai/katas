import Player from "./player";
import Board from "./board";

export default class Game {

    constructor (readonly board: Board, readonly player1: Player, readonly player2: Player) { }

    public get players () {
        return [this.player1, this.player2]
    }

    public get fields(): any[] {
        return this.board.fields
    }


    public play (player: Player, x: number, y: number): boolean {
        if (!this.board.isEmpty(x, y)) return false
        this.board.play(player.name, x, y)
        return true
    }

    public isOver (): boolean {
        return this.board.isOver();
    }
}