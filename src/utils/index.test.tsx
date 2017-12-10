import { formatTimeRemaining } from './index';

describe('formatTimeRemaining test', () => {
    test('should return 0m 0s when time remainging is 0ms', () => {
        expect(formatTimeRemaining(0)).toEqual('0m 0s');
    });
    test('should return 0m 1s when time remainging is 1000ms', () => {
        expect(formatTimeRemaining(1000)).toEqual('0m 1s');
    });
    test('should return 1m 0s when time remainging is 60000ms', () => {
        expect(formatTimeRemaining(60000)).toEqual('1m 0s');
    });
    test('should return 120m 0s when time remainging is 7200000ms', () => {
        expect(formatTimeRemaining(7200000)).toEqual('120m 0s');
    });
    test('should return 2m 8s when time remainging is 128000ms', () => {
        expect(formatTimeRemaining(128000)).toEqual('2m 8s');
    });
});