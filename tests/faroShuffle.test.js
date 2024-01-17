// tests/shuffles.test.js


describe('Faro Shuffle', () => {
    const { faroShuffle, FARO_OUT, FARO_IN } = require('../src/functions/shuffles');

    describe('Faro Shuffle', () => {
        it('should perform Out-Faro shuffle of a small even deck length correctly', () => {
            const inputDeck = [1, 2, 3, 4, 5, 6];
            const expectedOutput = [1, 4, 2, 5, 3, 6];
            expect(faroShuffle(inputDeck, FARO_OUT)).toEqual(expectedOutput);
        });

        it('should perform Out-Faro shuffle correctly with uneven deck length', () => {
            const inputDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            const expectedOutput = [1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6, 12, 13];
            expect(faroShuffle(inputDeck, FARO_OUT)).toEqual(expectedOutput);
        });

        it('should perform In-Faro shuffle correctly', () => {
            const inputDeck = [1, 2, 3, 4, 5, 6];
            const expectedOutput = [4, 1, 5, 2, 6, 3];
            expect(faroShuffle(inputDeck, FARO_IN)).toEqual(expectedOutput);
        });

        it('should perform In-Faro shuffle with uneven deck length correctly', () => {
            const inputDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            const expectedOutput = [7, 1, 8, 2, 9, 3, 10, 4, 11, 5, 12, 6, 13];
            expect(faroShuffle(inputDeck, FARO_IN)).toEqual(expectedOutput);
        });

        // Add more test cases as needed
    });
});
