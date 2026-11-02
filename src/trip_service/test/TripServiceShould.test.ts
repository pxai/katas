import 'jest'
import UserNotLoggedInException from '../exception/UserNotLoggedInException'
import Trip from '../trip/Trip'
import TripService from '../trip/TripService'
import User from '../user/User'
import UserBuilder from './UserBuilder'

const GUEST: User | null = null
const ANOTHER_USER: User = new User()
const BRAZIL: Trip = new Trip()
const LONDON: Trip = new Trip()

describe('TripService should', () => {
    const registeredUser: User = new User()

    let loggedUser: User | null
    let tripService: TripService

    beforeEach(() => {
        loggedUser = registeredUser
        tripService = new TripService(
            { getLoggedUser: () => loggedUser },
            { findTripsByUser: (user: User) => user.getTrips() },
        )
    })

    it('throw an exception when the user is not logged in', () => {
        loggedUser = GUEST
        const stranger: User = UserBuilder.aUser().build()

        expect(() => tripService.getTripsByUser(stranger))
            .toThrow(UserNotLoggedInException)
    })

    it('not return any trips when the users are not friends', () => {
        const stranger: User = UserBuilder.aUser()
            .friendsWith(ANOTHER_USER)
            .withTrips(BRAZIL)
            .build()

        expect(tripService.getTripsByUser(stranger)).toEqual([])
    })

    it('return the trips of a friend', () => {
        const friend: User = UserBuilder.aUser()
            .friendsWith(ANOTHER_USER, registeredUser)
            .withTrips(BRAZIL, LONDON)
            .build()

        expect(tripService.getTripsByUser(friend)).toEqual([BRAZIL, LONDON])
    })

    it('not return any trips when a friend has not travelled', () => {
        const friend: User = UserBuilder.aUser()
            .friendsWith(registeredUser)
            .build()

        expect(tripService.getTripsByUser(friend)).toEqual([])
    })
})
