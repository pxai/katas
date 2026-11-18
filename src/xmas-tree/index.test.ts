import xmasTree from './index';

describe('xmasTree', () => {
    it('should exists', () => {

        expect(xmasTree).toBeDefined();
    });

    it('retusn a string', () => {
        expect(typeof xmasTree()).toBe('string');
    });

    it('return an empty string for 0 height', () => {
        expect(xmasTree(0)).toBe('');
    });

    it('should return a minimal tree for height 1', () => {
        expect(xmasTree(1)).toBe(' *\n |');
    });

    it('should return a minimal tree for height 2', () => {
        expect(xmasTree(2)).toBe('  *\n ***\n  |');
    });

    it('should return a minimal tree for height 3', () => {
        expect(xmasTree(3)).toBe('   *\n  ***\n *****\n   |');
    });
        
    it('should return a minimal tree for height 4', () => {
        expect(xmasTree(4)).toBe('    *\n   ***\n  *****\n *******\n    |');
    });

    it.each([
        [0, ''],
        [1, ' *\n |'],
        [2, '  *\n ***\n  |'],
        [3, '   *\n  ***\n *****\n   |'],
        [4, '    *\n   ***\n  *****\n *******\n    |']
    ])('should return the correct tree for height %i', (height: number, expected: string) => {
        expect(xmasTree(height)).toBe(expected);
    });
});