import { GuessingNumberGame, RandomNumberGenerator } from './index';

describe('GuessingNumberGame', () => {
    const setup = () => {
        // we will create a mock class that implements the RandomNumberGenerator interface
        // and generates a random number passed to the constructor. This will allow us to test the GuessingNumberGame class without relying on a real random number generator.

        class MockRandomNumberGenerator implements RandomNumberGenerator {
            private randomNumber: number

            constructor(randomNumber: number) {
                this.randomNumber = randomNumber;
            }
            generateRandomNumber(): number {
                return this.randomNumber
            }
        }


        return { MockRandomNumberGenerator };
    };

    it('should be defined', () => {
        expect(GuessingNumberGame).toBeDefined();
    });

    it('a player should be able to play and fail', () => {
       const { MockRandomNumberGenerator } = setup();
       const mockRandomNumberGenerator = new MockRandomNumberGenerator(9);
       const guessingNumberGame = new GuessingNumberGame(mockRandomNumberGenerator)

       expect(guessingNumberGame.guessNumber(5)).toBe("Fail")
    });

    it('a player should be able to play and win', () => {
       const { MockRandomNumberGenerator } = setup();
       const mockRandomNumberGenerator = new MockRandomNumberGenerator(9);
       const guessingNumberGame = new GuessingNumberGame(mockRandomNumberGenerator)

       expect(guessingNumberGame.guessNumber(9)).toBe("You win!")
    });

    it('a player should be able to play rounds', () => {
       const { MockRandomNumberGenerator } = setup();
       const mockRandomNumberGenerator = new MockRandomNumberGenerator(9);
       const guessingNumberGame = new GuessingNumberGame(mockRandomNumberGenerator)

       expect(guessingNumberGame.guessNumber(5)).toBe("Fail")
       expect(guessingNumberGame.guessNumber(7)).toBe("Fail")
       expect(guessingNumberGame.guessNumber(2)).toBe("You lost")
    });

    it('a player should be able to play same number', () => {
       const { MockRandomNumberGenerator } = setup();
       const mockRandomNumberGenerator = new MockRandomNumberGenerator(9);
       const guessingNumberGame = new GuessingNumberGame(mockRandomNumberGenerator)

       expect(guessingNumberGame.guessNumber(7)).toBe("Fail")
       expect(guessingNumberGame.guessNumber(7)).toBe("Fail")
       expect(guessingNumberGame.guessNumber(7)).toBe("You lost")
    });
});