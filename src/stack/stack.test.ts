import Stack from './stack';

export function runStackTests(createInstance: () => Stack<number>) {
 describe('Stack', () => {
    let stack: Stack<number>;
    beforeEach(() => {
        stack = createInstance();
    });

    it('should exist the class Stack', () => {
        expect(Stack).toBeDefined();
    });

    it('should be empty when created', () => {
        expect(stack.size()).toBe(0);
    });

    it('should be empty when created', () => {
        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
    });

    it('should have a size of 1 when an element is pushed', () => {
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
    });

    it('should increase size when elements are pushed', () => {
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
    });

    it('should decrease size when elements are popped', () => {
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it('should be able to peek the last element pushed', () => {
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBeUndefined();
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });
  });

}

describe('Stack', () => {
    runStackTests(() => new Stack<number>());
});