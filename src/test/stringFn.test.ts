import { countChars } from '../utils/stringFn';

test('should return the string lenght', () => {
	expect(countChars('1234ab')).toBe(6);
});

test('should return zero', () => {
	expect(countChars('')).toBe(0);
});
