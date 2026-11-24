import StringCalculator from './string-calculator';

describe('String Calculator', () => {
    it('is defined', () => {
        expect(StringCalculator).toBeDefined();
    })

    it('returns 0 if string is empty', () => {
        const calculator = new StringCalculator();
        expect(calculator.add('')).toEqual(0);
    });


    it.each([
        ['4', 4],
        ['5', 5],
        ['6', 6],
    ]
    )('returns the same if string has a single number', (input: string, expected: number) => {
        const calculator = new StringCalculator();
        expect(calculator.add(input)).toEqual(expected);
    });

    it('returns value for arbitrary number size', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,3,4")).toEqual(8);
    });

    it('returns value for arbitrary number size and new lines', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,\n2,3")).toEqual(6);
    });

    it('returns value for arbitrary number size and custom separator', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("//;\n1;2;3")).toEqual(6);
    });

    it('should disallow negative numbers', () => {
        const calculator = new StringCalculator();
        expect(() => calculator.add("1,-2,-3")).toThrow('error: negatives not allowed: -2 -3');
    });

    it('should ignore nubmers bigger than 1000', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1001,2,3")).toEqual(5);
    });
}); 