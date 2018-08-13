import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('generateAuralUpdate', () => {
    it('should return the aural update', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('should restart game', () => {
        const correctAnswer = 'RESTART_GAME';
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.type).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('should make a guess', () => {
        const guess = 'MAKE_GUESS';
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.type).toEqual(guess);
    });
});