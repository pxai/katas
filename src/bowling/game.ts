import Frame from './frame';
import BowlingGame from './bowling_game';

export default class Game implements BowlingGame {
    public frames: Frame[];
    constructor () {
        this.frames = Array(10).fill(null)
    }

    public roll (pins: number): void {
        if (!this.frames[0]) {
            this.loadNewFrame(0, pins)
            return;
        }

        const last = this.findLastIndex(this.frames);

        if (this.frames[last].isComplete()) {
            if (last === 9) {
                throw new Error('Game is complete')
            }
            this.loadNewFrame(last + 1, pins)
        } else {
            this.frames[last].roll(pins)
        }
    }

    private loadNewFrame(index: number, pins: number) {
            const frame = new Frame(index === 9 ? [null, null, null] : [null, null]);
            frame.roll(pins)
            this.frames[index] = frame;
    }

    private findLastIndex (arr: Frame[]): number {
        let lastNonNullIndex = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== null) {
                return i;
            }
        }

        return -1;
    }


    public score (): number {
        const frames = this.frames.filter(frame => frame !== null)
        const rolls = frames.reduce(
            (allRolls, frame) => allRolls.concat(frame.rolls.filter(roll => roll !== null)),
            [] as number[]
        )

        let score = 0
        let rollIndex = 0

        for (const [index, frame] of frames.entries()) {
            score += frame.getScore()

            if (index < 9 && frame.isStrike()) {
                score += (rolls[rollIndex + 1] || 0) + (rolls[rollIndex + 2] || 0)
            } else if (index < 9 && frame.isSpare()) {
                score += rolls[rollIndex + 2] || 0
            }

            rollIndex += frame.rolls.filter(roll => roll !== null).length
        }

        return score
    }
}