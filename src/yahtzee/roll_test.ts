import Roll from './roll';

describe('roll', () => {
    let roll: Roll;

    beforeEach(() => {
        roll = new Roll();
    });

    it('exists', () => {
        expect(roll).toBeInstanceOf(Roll) 
    })

    it('has 5 elements', () => {
        expect(roll.getResults().length).toEqual(5)
    })


    it('has 5 zero elements at the beginning', () => {
        expect(roll.getResults()).toStrictEqual([0, 0, 0,0,0])
    })

    it('rerolls selected dice on a fresh roll', () => {
        roll.reRoll([0, 1, 2, 3, 4])

        expect(roll.getResults().every(result => result >= 1 && result <= 6)).toBe(true)
    })

    it('does not score unrolled dice as a matching combination', () => {
        expect(roll.threeOfAKind()).toBe(0)
        expect(roll.fourOfAKind()).toBe(0)
        expect(roll.yahtzee()).toBe(0)
    })

    it('scores three of a kind as the sum of all dice', () => {
        expect(new Roll([3, 3, 3, 2, 5]).threeOfAKind()).toBe(16)
        expect(new Roll([3, 3, 2, 2, 5]).threeOfAKind()).toBe(0)
    })

    it('scores four of a kind as the sum of all dice', () => {
        expect(new Roll([4, 4, 4, 4, 2]).fourOfAKind()).toBe(18)
        expect(new Roll([4, 4, 4, 2, 2]).fourOfAKind()).toBe(0)
    })

    it('scores a full house as 25 points', () => {
        expect(new Roll([2, 2, 2, 5, 5]).fullHouse()).toBe(25)
        expect(new Roll([2, 2, 2, 2, 5]).fullHouse()).toBe(0)
    })

    it('scores a small straight as 30 points', () => {
        expect(new Roll([1, 2, 3, 4, 6]).smallStraight()).toBe(30)
        expect(new Roll([1, 2, 4, 5, 6]).smallStraight()).toBe(0)
    })

    it('scores a large straight as 40 points', () => {
        expect(new Roll([1, 2, 3, 4, 5]).largeStraight()).toBe(40)
        expect(new Roll([2, 3, 4, 5, 6]).largeStraight()).toBe(40)
        expect(new Roll([1, 2, 3, 4, 4]).largeStraight()).toBe(0)
    })

    it('scores Yahtzee as 50 points', () => {
        expect(new Roll([6, 6, 6, 6, 6]).yahtzee()).toBe(50)
        expect(new Roll([6, 6, 6, 6, 5]).yahtzee()).toBe(0)
    })

    it('scores chance as the sum of all dice', () => {
        expect(new Roll([1, 2, 3, 4, 5]).chance()).toBe(15)
    })

})