const teste = ['a', 'b', 'c'];

const returnA = (value) => {
	return `valor passado ${value} função returnA`;
};

const returnB = (value) => {
	return `valor passado ${value} função returnB`;
};

const returnC = (value) => {
	return `valor passado ${value} função returnC`;
};

teste.forEach((tes) => {

	// const commandMap = (tes) => {
	// 	if (tes === 'a') {
	// 		return returnA
	// 	}
	// 	if (tes === 'b') {
	// 		return returnB
	// 	}
	// 	if (tes === 'c') {
	// 		return returnC
	// 	}
	// }
	
	// const commandMap = [
	// 	{ test: 'a', function: returnA },
	// 	{ test: 'b', function: returnB },
	// 	{ test: 'c', function: returnC },
	// ];

	// const commandMap = {
	// 	a: returnA,
	// 	b: returnB,
	// 	c: returnC,
	// };

	const command = commandMap(tes);

	console.log(command(tes));
});
