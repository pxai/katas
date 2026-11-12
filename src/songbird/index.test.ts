import songbird from './index';

describe('Songbird', () => {
    it('should exist the function Songbird', () => {
        expect(songbird).toBeDefined();
    });

    it('should return 0 with no branches', () => {
        expect(songbird(0, 4)).toBe(0);
    });

    it('should return 0 with no birds', () => {
        expect(songbird(4, 0)).toBe(0);
    });

    it('should return same amount of branches with 1 bird', () => {
        expect(songbird(3, 1)).toBe(3);
    });

    it('should return the combination for two birds', () => {
        expect(songbird(3, 2)).toBe(9);
    });

    it('should return the combination for two birds', () => {
        expect(songbird(3, 3)).toBe(27);
    });
});