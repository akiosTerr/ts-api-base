const base = {
	fn: (name: string, age: number) => {
		console.log(name);
		console.log(age);
	},
	zn: (yeper: number) => {
		return yeper + 'yapper';
	},
	xn: (x: number) => {
		return x + 10000;
	},
};

module.exports = base;
