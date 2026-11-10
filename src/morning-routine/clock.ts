export interface Clock {
    now(): Date;
}

export class MyClock implements Clock {
    public now(): Date {
        return new Date();
    }
}