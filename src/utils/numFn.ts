export const multiplyToMax = (value: number, max?: number): number[] => {
	let tempValue = value;
	let result = [];
	if (max === undefined) max = Math.pow(10, 10);
	while (tempValue < max) {
		result.push(tempValue);
		tempValue = tempValue * tempValue;
	}
	return result;
};
