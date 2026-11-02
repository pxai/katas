import 'jest'
import User from '../user/User'
import UserBuilder from './UserBuilder'

const ANOTHER_USER: User = new User()

describe('User should', () => {
    it('be a friend of the users added as friends', () => {
        const friend: User = new User()
        const user: User = UserBuilder.aUser().friendsWith(friend).build()

        expect(user.isFriendWith(friend)).toBe(true)
    })

    it('not be a friend of a user that was never added as a friend', () => {
        const user: User = UserBuilder.aUser().friendsWith(ANOTHER_USER).build()

        expect(user.isFriendWith(new User())).toBe(false)
    })
})
