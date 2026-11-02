import User from '../user/User'
import Trip from './Trip'

export default interface TripRepository {
    findTripsByUser(user: User): Trip[]
}
