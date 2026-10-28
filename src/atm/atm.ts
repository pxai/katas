export default class ATM {
    private deposit: object;

    constructor () {
        this.deposit = {
            "500": 100, "200": 100, "100": 100, 
            "50": 100, "20": 100, "10": 100, "5": 100
        }
    }

    public withdraw (amount: number) : number[] | Error {
        if (amount <= 0) throw new Error("Invalid amount.")
        if (amount < 5 || amount % 5 !== 0) throw new Error("Invalid amount: multiple of 5")
        return this.notes(amount);
    }

    public notes (amount: number): number[] | Error {
        let finished = false;
        let result = [0, 0, 0, 0, 0, 0, 0]
        const deposits = Object.keys(this.deposit).reverse().map(d => +d)

        for (let i = 0; i < deposits.length; i++) {
            if (deposits[i] <= amount) {
                const change = Math.round(amount / deposits[i]) * deposits[i];
                result[i] = change;
                amount -= change;
            }
        }

        return result
    }
}