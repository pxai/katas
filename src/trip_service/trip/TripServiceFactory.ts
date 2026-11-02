import UserSession from '../user/UserSession'
import TripDAO from './TripDAO'
import TripService from './TripService'

export default function aTripService(): TripService {
    return new TripService(UserSession, TripDAO)
}
