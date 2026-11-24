export default class StringCalculator {
    public add (numbers: string): number {
        if (!numbers) return 0;
        
        let separator = ",";

        if (numbers.startsWith("//")) {
            separator = numbers[2]
            numbers = numbers.substring(3, numbers.length )
        }

        const finalNumbers = numbers.split(separator).filter(n=> +n <= 1000)

        if (finalNumbers.some(n => +n < 0)) {
            throw new Error("error: negatives not allowed: " + finalNumbers.filter(n => +n < 0).join(' '))
        }

        return finalNumbers.reduce((acc, a) => acc + (+a),0)
    }
}