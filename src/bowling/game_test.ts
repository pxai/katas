import Game from './game';

const tenthFrameRolls: Array<[number[], number]> = [
    [[5, 5, 4], 14],
    [[10, 4, 5], 19]
];

describe('Game', () => {
    it('should exist', () => {
        expect(Game).toBeDefined()
    })

    it('should have 12 frames', () => {
        const game = new Game();
        expect(game.frames.length).toEqual(10)
    })

    it('should get score from frames', () => {
        const game = new Game();
        expect(game.score()).toEqual(0)
    });    
    
    it('should calculate the score after one roll', () => {
        const game = new Game();
        game.roll(4)
        expect(game.score()).toEqual(4)
    });

    it('should calculate the score after two rolls', () => {
        const game = new Game();
        game.roll(4)
        game.roll(5)
        expect(game.score()).toEqual(9)
    })

    it('should add points for several frames', () => {
        const game = new Game();
        game.roll(5)
        game.roll(4)

        game.roll(4)
        game.roll(4)

        expect(game.score()).toEqual(17)
    })

    it('should add points for spare frames', () => {
        const game = new Game();
        game.roll(5)
        game.roll(5)

        game.roll(4)
        game.roll(4)

        expect(game.score()).toEqual(22)
    })


    it('should add points for strike frames', () => {
        const game = new Game();
        game.roll(10)

        game.roll(4)
        game.roll(4)

        expect(game.score()).toEqual(26)
    })

    it.each(tenthFrameRolls)('allows tenth-frame bonus rolls and no more than three balls', (rolls, expectedScore) => {
        const game = new Game();
        for (let roll = 0; roll < 18; roll++) game.roll(0)
        rolls.forEach(pins => game.roll(pins))

        expect(game.score()).toEqual(expectedScore)
        expect(() => game.roll(0)).toThrow('Game is complete')
    })
})