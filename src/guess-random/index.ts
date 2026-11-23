export class GuessingNumberGame {
    private secretNumber: number;
    private attempts: number;

    constructor(public generator: RandomNumberGenerator) {
        this.secretNumber = generator.generateRandomNumber();
        this.attempts = 0;
    }
    public guessNumber(guessedNumber: number): string {
        this.attempts++;
        if (this.attempts > 3) return "You lost";
        if (guessedNumber === this.secretNumber) return "You win!" 
   
        return (this.attempts === 3) ? "You lost" : "Fail"
    }
}

export interface RandomNumberGenerator {
     generateRandomNumber(): number;
}