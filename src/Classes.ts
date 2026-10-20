export class Counter {
    counter: number;

    constructor(start: number = 0) {
        this.counter = start;
    }

    increment(): number {
        this.counter += 1;
        return this.counter;
    }

    decrement(): number {
        this.counter -= 1;
        return this.counter;
    }
}
