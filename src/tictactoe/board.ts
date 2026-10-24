export default interface Board {

    readonly fields: any[];

    play (player: string, x: number, y: number): boolean;

    isEmpty (x: number, y: number): boolean;

    isOver(): boolean;

    allTaken(): boolean;

}