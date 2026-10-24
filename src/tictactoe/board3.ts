import Board from "./board";

export default class Board3 implements Board {
    private _fields: string[][];

    constructor() {
        this._fields = Array(3).fill([]).map(a => ["", "", ""]);
    }

    public get fields(): any[] {
        return this._fields.reduce((fields, row) => fields.concat(row), [] as string[])
    }

    public play (player: string, x: number, y: number): boolean {
        if (!this.isEmpty(x, y)) return false
        this._fields[x][y] = player;
        return true
    }

    public isEmpty (x: number, y: number): boolean {
        return this._fields[x][y] === "";
    }

    public allTaken(): boolean {
      return this._fields.flat().every(a => a !== "")
    }

    public isOver(): boolean {
        if (this.allTaken()) return true
        const isWinningLine = (line: string[]) =>
            line[0] !== "" && line.every(field => field === line[0]);
        const getColumn = (column: number, matrix: string[][]) => matrix.map(row => row[column])
        for (let i = 0; i < 3; i++) {
            if (isWinningLine(this._fields[i])
             || isWinningLine(getColumn(i, this._fields)))  { return true; }
        }

        const leftToRightDiagonal = [0, 1, 2].map(i => this._fields[i][i]);
        const rightToLeftDiagonal = [0, 1, 2].map(i => this._fields[i][2 - i]);
        return isWinningLine(leftToRightDiagonal)
            || isWinningLine(rightToLeftDiagonal);
    }
}