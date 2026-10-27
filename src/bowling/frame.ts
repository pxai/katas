export default class Frame {
    private pins: number;

    constructor(public rolls: number[] = [null, null]) {
        this.pins = 0;
    }

    public roll (pins: number) {
        const index = this.rolls.findIndex(roll => roll === null);
        if (index === -1) {
            throw new Error('Frame is complete')
        }
        this.rolls[index] = pins;
    }

    public isComplete () : boolean {
        if (this.rolls.length === 3) {
            return this.isStrike() || this.isSpare()
                ? this.rolls[2] !== null
                : this.rolls[1] !== null
        }
        return this.isStrike() || this.rolls.every(roll => roll !== null)
    }

    public getScore (): number {
        return this.rolls.reduce((acc, roll) => acc + roll, 0)
    }

    public isSpare(): boolean {
        return this.rolls[0] !== null && this.rolls[0] !== 10
            && this.rolls[1] !== null && this.getScore() === 10
    }

    public isStrike(): boolean {
        return this.rolls[0] === 10
    }
}