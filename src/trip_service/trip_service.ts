import Trip from './trip'
import User from './user'
import UserSession from './user_session'

export default class TripService {
    constructor(private userSession: UserSession) {}

    public getTripsByUser(user: User): Trip[] {
        throw new Error('Not implemented')
    }
}
