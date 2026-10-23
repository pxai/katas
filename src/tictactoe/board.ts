export default class Board {
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

    public isOver(): boolean {
        const allTheSame = (row: string[]) => row.every(r => ["X", "O"].includes(r));
        const getColumn = (column: number, matrix: string[][]) => matrix.map(row => row[column])
        for (let i = 0; i < 3; i++) {
            if (allTheSame(this._fields[i])
             || allTheSame(getColumn(i, this._fields)))  { return true; }
        }
        return false
    }

}