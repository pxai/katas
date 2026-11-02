import User from './User'

export default interface Session {
    getLoggedUser(): User | null
}
