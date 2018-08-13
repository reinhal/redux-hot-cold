import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {

    describe('generateAuralUpdate', () => {
        let state = {
            guesses: [ 5, 26, 88],
            feedback: "You're cold.",
            auralStatus: ''
        };
        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: You're cold. You've made 3 guesses. In order of most- to least-recent, they are: 88, 26, 5"
        );
    });

    it('should set the intial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    describe('restartGame', () => {
        it('should start a new game', () => {
            let state = {
                guesses: [ 15, 55, 80],
                feedback: "You got it!",
                correctAnswer: 80
            };
            const correctAnswer = 54
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });
    });

    describe('makeGuess', () => {
        it('should make a guess', () => {
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 100
            };

            state = reducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual('You\'re Cold...');

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual('You\'re Warm.');

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual('You\'re Hot!');

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');
        });
    });
});