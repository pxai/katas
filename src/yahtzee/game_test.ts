import Game from './game'
import Roll from './roll'

describe('Yahtzee game', () => {
    it('allows one initial roll and up to two selective rerolls', () => {
        const random = jest.spyOn(Math, 'random')
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0)
            .mockReturnValueOnce(0.99)
            .mockReturnValueOnce(0.5)
            .mockReturnValueOnce(0.5)
        const game = new Game()

        try {
            const roll = game.roll()
            expect(roll.getResults()).toEqual([1, 1, 1, 1, 1])

            game.reRoll([1])
            expect(roll.getResults()).toEqual([1, 6, 1, 1, 1])

            game.reRoll([0, 2])
            expect(roll.getResults()).toEqual([4, 6, 4, 1, 1])
            expect(() => game.reRoll([3])).toThrow('Maximum of three rolls per round')
        } finally {
            random.mockRestore()
        }
    })

    it('lasts exactly 13 rounds', () => {
        const game = new Game()

        expect(game.roundsPlayed).toBe(0)
        expect(game.isComplete()).toBe(false)

        for (let round = 0; round < 13; round++) {
            game.play(new Roll([1, 2, 3, 4, 5]))
        }

        expect(game.roundsPlayed).toBe(13)
        expect(game.isComplete()).toBe(true)
    })

    it('does not allow a fourteenth round', () => {
        const game = new Game()
        for (let round = 0; round < 13; round++) {
            game.play(new Roll([1, 2, 3, 4, 5]))
        }

        expect(() => game.play(new Roll([1, 2, 3, 4, 5]))).toThrow('Game is complete')
        expect(game.roundsPlayed).toBe(13)
    })
})