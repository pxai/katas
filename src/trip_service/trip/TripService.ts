import UserNotLoggedInException from '../exception/UserNotLoggedInException'
import Session from '../user/Session'
import User from '../user/User'
import Trip from './Trip'
import TripRepository from './TripRepository'

export default class TripService {
    constructor(
        private readonly session: Session,
        private readonly tripRepository: TripRepository,
    ) {}

    public getTripsByUser(user: User): Trip[] {
        const loggedUser: User = this.loggedUser()

        return user.isFriendWith(loggedUser)
            ? this.tripRepository.findTripsByUser(user)
            : []
    }

    private loggedUser(): User {
        const loggedUser: User | null = this.session.getLoggedUser()

        if (loggedUser === null) {
            throw new UserNotLoggedInException()
        }

        return loggedUser
    }
}
