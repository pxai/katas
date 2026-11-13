export default class Stack<T> {
    constructor (private items: T[] = []) {}

    isEmpty (): boolean {
        return this.items.length === 0;
    }

    size (): number {
        return this.items.length;
    }

    push (item: T): void {
        this.items.push(item);
    }
    pop (): T | undefined {
        return this.items.pop();
    }

    peek (): T | undefined {
        return this.items[this.items.length - 1];
    }
}