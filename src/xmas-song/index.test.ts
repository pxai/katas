import xmasSong from './index';

describe('xmasSong', () => {
    it('should exists', () => {
        expect(xmasSong).toBeDefined();
    });

    it('shoud return a string', () => {
        expect(typeof xmasSong(1)).toBe('string');
    });

    it('shoud return empty string for 0 days', () => {
        expect(xmasSong(0)).toBe('');
    });

    it('shoud return the correct song for 1 day', () => {
        expect(xmasSong(1)).toBe('On the First day of Christmas,\nMy true love gave to me:\nA partridge in a pear tree.');
    });

    it('shoud return the correct song for 2 days', () => {
        expect(xmasSong(2)).toBe('On the Second day of Christmas,\nMy true love gave to me:\nTwo turtle doves\nAnd a partridge in a pear tree.');
    });

    it('shoud return the correct song for 3 days', () => {
        expect(xmasSong(3)).toBe('On the Third day of Christmas,\nMy true love gave to me:\nThree French hens\nTwo turtle doves\nAnd a partridge in a pear tree.');
    });

    it('shoud return the correct song for 12 days', () => {
        expect(xmasSong(12)).toBe('On the Twelfth day of Christmas,\nMy true love gave to me:\nTwelve drummers drumming,\nEleven pipers piping,\nTen lords a-leaping,\nNine ladies dancing,\nEight maids a-milking\nSeven swans a-swimming\nSix geese a-laying\nFive golden rings\nFour calling birds\nThree French hens\nTwo turtle doves\nAnd a partridge in a pear tree.');
    });
});