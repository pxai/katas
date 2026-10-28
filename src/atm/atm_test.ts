import ATM from './atm';

describe('ATM', () => {
    let atm : ATM;

    beforeEach(() => {
        atm = new ATM();
    })

    it('exists', () => {
        expect(atm).toBeInstanceOf(ATM);
    });

    it('return error with invalid request', () => {
        expect(() => atm.withdraw(0)).toThrowError('Invalid amount.')
        expect(() => atm.withdraw(-10)).toThrowError('Invalid amount.')
    })

    it('should return error if the amount is not at least 5', () => {
        expect(() => atm.withdraw(4)).toThrowError("Invalid amount: multiple of 5")
    });

    it('should return error if the amount not 5 multiple', () => {
        expect(() => atm.withdraw(11)).toThrowError("Invalid amount: multiple of 5")
    });

    it('should return an array with the notes', () => {
        expect(atm.withdraw(5)).toStrictEqual([0, 0, 0, 0, 0, 0, 5])
    });

    it('should return an array with the notes', () => {
        expect(atm.withdraw(25)).toStrictEqual([0, 0, 0, 0, 20, 0, 5])
    });
})