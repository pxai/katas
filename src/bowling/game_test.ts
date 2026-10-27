import Game from './game';

describe('Game', () => {
    it('should exist', () => {
        expect(Game).toBeDefined()
    })

    it('should have 12 frames', () => {
        const game = new Game();
        expect(game.frames.length).toEqual(10)
    })
})