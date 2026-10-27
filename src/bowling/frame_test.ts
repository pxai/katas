import Frame from './frame';

describe('Frame', () => {
    it('should have 2 opportunities', () => {
        const frame = new Frame();
        expect(frame.opportunities).toEqual(2)
    });
});