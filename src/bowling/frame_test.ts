import Frame from './frame';

describe('Frame', () => {
    it('should have 2 opportunities', () => {
        const frame = new Frame();
        expect(frame.rolls.length).toEqual(2)
    });

    it('should have score of 0 at the beginning', () => {
        const frame = new Frame();
        expect(frame.getScore()).toEqual(0)
    });

    it('should have score of total of pins knocked down', () => {
        const frame = new Frame();
        frame.roll(1)
        expect(frame.getScore()).toEqual(1)
    });

    it('should have the total score from all rolls', () => {
        const frame = new Frame();
        frame.roll(1);
        frame.roll(4);

        expect(frame.getScore()).toEqual(5);
    })

    it('tells if the frame is not complete', () => {
        const frame = new Frame();
        frame.roll(1);

        expect(frame.isComplete()).toBe(false);
    })

    it('tells if the frame is complete', () => {
        const frame = new Frame();
        frame.roll(1);
        frame.roll(2);
        expect(frame.isComplete()).toBe(true);
    })

    it('is not a spare', () => {
        const frame = new Frame();
        
        frame.roll(1);
        expect(frame.isSpare()).toBe(false);
        
        frame.roll(2);
        expect(frame.isSpare()).toBe(false);
    })

    it('is a spare', () => {
        const frame = new Frame();
        
        frame.roll(5);
        expect(frame.isSpare()).toBe(false);
        
        frame.roll(5);
        expect(frame.isSpare()).toBe(true);
    })

    it('is not a strike', () => {
        const frame = new Frame();
        
        frame.roll(1);
        expect(frame.isStrike()).toBe(false);
        
        frame.roll(2);
        expect(frame.isStrike()).toBe(false);
    })

    it('is not a strike', () => {
        const frame = new Frame();

        frame.roll(10);
        expect(frame.isStrike()).toBe(true);
    })
});