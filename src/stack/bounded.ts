import Stack from './stack';

export default class BoundedStack<T> extends Stack<T> {

    push(item: T): void {
        if (this.size() >= 5) {
            throw new Error('Stack is full');
        }
        super.push(item);
    }
}