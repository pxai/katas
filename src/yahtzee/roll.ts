export default class Roll {
    private results: number[]

    constructor (results?: number[]) {
        this.results = !results ? Array(5).fill(0) : results.slice()
    }

    public getResults(): number[]  {
        return this.results;
    }

    public reRoll(indexes: number[]): void {
        for (const index of indexes) {
            this.results[index] = Math.floor(Math.random() * 6) + 1
        }
    }

    public threeOfAKind(): number {
        return this.hasMatchingDice(3) ? this.sum() : 0
    }

    public fourOfAKind(): number {
        return this.hasMatchingDice(4) ? this.sum() : 0
    }

    public fullHouse(): number {
        const counts = this.getCounts()
        return counts.includes(3) && counts.includes(2) ? 25 : 0
    }

    public smallStraight(): number {
        return this.hasStraight(4) ? 30 : 0
    }

    public largeStraight(): number {
        return this.hasStraight(5) ? 40 : 0
    }

    public yahtzee(): number {
        return this.hasMatchingDice(5) ? 50 : 0
    }

    public chance(): number {
        return this.sum()
    }

    private sum(): number {
        return this.results.reduce((total, die) => total + die, 0)
    }

    private getCounts(): number[] {
        const counts = Array(7).fill(0)
        for (const die of this.results) {
            counts[die]++
        }
        return counts
    }

    private hasMatchingDice(count: number): boolean {
        return this.getCounts().slice(1).some(matches => matches >= count)
    }

    private hasStraight(length: number): boolean {
        const values = new Set(this.results)
        for (let start = 1; start <= 7 - length; start++) {
            let consecutive = true
            for (let value = start; value < start + length; value++) {
                if (!values.has(value)) {
                    consecutive = false
                    break
                }
            }
            if (consecutive) { return true }
        }
        return false
    }
}