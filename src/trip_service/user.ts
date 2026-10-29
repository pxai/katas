import Trip from './trip'

export default class User {
    public friends: User[] = []
    public trips: Trip[] = []

    constructor(public name: string) {}
}
