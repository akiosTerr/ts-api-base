import { multiplyToMax } from '../utils/numFn';

const value = [10, 100, 10000, 100000000];

test('should return num array', () => {
	expect(multiplyToMax(10)).toStrictEqual(value);
});
