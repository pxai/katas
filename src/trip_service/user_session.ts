import User from './user'

export default interface UserSession {
    getLoggedUser(): User | null
}
