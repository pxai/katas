import BoundedStack from './bounded';
import {runStackTests } from './stack.test';

describe('BoundedStack', () => {
    runStackTests(() => new BoundedStack<number>());

    it('should throw an error when pushing more than 5 elements', () => {
        const boundedStack = new BoundedStack<number>();
        for (let i = 0; i < 5; i++) {
            boundedStack.push(i);
        }
        expect(() => boundedStack.push(5)).toThrowError('Stack is full');
    });
});