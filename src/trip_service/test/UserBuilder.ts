import Trip from '../trip/Trip'
import User from '../user/User'

export default class UserBuilder {
    public static aUser(): UserBuilder {
        return new UserBuilder()
    }

    private friends: User[] = []
    private trips: Trip[] = []

    public friendsWith(...friends: User[]): UserBuilder {
        this.friends = friends
        return this
    }

    public withTrips(...trips: Trip[]): UserBuilder {
        this.trips = trips
        return this
    }

    public build(): User {
        const user: User = new User()
        this.friends.forEach((friend) => user.addFriend(friend))
        this.trips.forEach((trip) => user.addTrip(trip))
        return user
    }
}
