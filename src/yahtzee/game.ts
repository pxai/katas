import Roll from './roll'

export default class Game {
    private static readonly TOTAL_ROUNDS = 13
    private rounds: Roll[] = []
    private currentRoll: Roll | null = null
    private rollsThisRound = 0

    public get roundsPlayed(): number {
        return this.rounds.length
    }

    public isComplete(): boolean {
        return this.roundsPlayed === Game.TOTAL_ROUNDS
    }

    public roll(): Roll {
        if (this.isComplete()) {
            throw new Error('Game is complete')
        }
        if (this.currentRoll) {
            throw new Error('Round is already in progress')
        }

        this.currentRoll = new Roll()
        this.currentRoll.reRoll([0, 1, 2, 3, 4])
        this.rollsThisRound = 1
        return this.currentRoll
    }

    public reRoll(indexes: number[]): Roll {
        if (!this.currentRoll) {
            throw new Error('Roll all dice first')
        }
        if (this.rollsThisRound === 3) {
            throw new Error('Maximum of three rolls per round')
        }

        this.currentRoll.reRoll(indexes)
        this.rollsThisRound++
        return this.currentRoll
    }

    public play(roll: Roll = this.currentRoll): void {
        if (this.isComplete()) {
            throw new Error('Game is complete')
        }
        if (!roll) {
            throw new Error('Roll all dice before playing a round')
        }

        this.rounds.push(roll)
        this.currentRoll = null
        this.rollsThisRound = 0
    }
}