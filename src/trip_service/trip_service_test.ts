import TripService from './trip_service'
import User from './user'
import UserSession from './user_session'

describe('TripService', () => {
    let loggedInUser: User | null
    let tripService: TripService

    beforeEach(() => {
        loggedInUser = null
        const userSession: UserSession = {
            getLoggedUser: () => loggedInUser
        }
        tripService = new TripService(userSession)
    })

    it('requires a logged-in user', () => {
        expect(() => tripService.getTripsByUser(new User('owner')))
            .toThrow('User is not logged in')
    })

    it('returns no trips when the logged-in user is not a friend', () => {
        loggedInUser = new User('visitor')
        const owner = new User('owner')
        owner.trips = [{ destination: 'Paris' }]

        expect(tripService.getTripsByUser(owner)).toEqual([])
    })

    it('returns the user trips when the logged-in user is a friend', () => {
        loggedInUser = new User('friend')
        const owner = new User('owner')
        const trips = [{ destination: 'Paris' }, { destination: 'Rome' }]
        owner.trips = trips
        owner.friends.push(loggedInUser)

        expect(tripService.getTripsByUser(owner)).toBe(trips)
    })

    it('returns no trips when a friend has no trips', () => {
        loggedInUser = new User('friend')
        const owner = new User('owner')
        owner.friends.push(loggedInUser)

        expect(tripService.getTripsByUser(owner)).toEqual([])
    })
})
