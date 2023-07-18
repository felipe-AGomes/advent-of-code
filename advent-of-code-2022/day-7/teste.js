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
	// const getCommandFunction = () => {
	// 	if (tes === 'a') {
	// 		return returnA;
	// 	}
	// 	if (tes === 'b') {
	// 		return returnB;
	// 	}
	// 	if (tes === 'c') {
	// 		return returnC;
	// 	}
	// };
	// const command = getCommandFunction();

	// const commandMap = [
	// 	{ test: 'a', function: returnA },
	// 	{ test: 'b', function: returnB },
	// 	{ test: 'c', function: returnC },
	// ];

	// const command = commandMap.find(({ test }) => test === tes).function;

	// const getCommandFunction = {
	// 	a: returnA,
	// 	b: returnB,
	// 	c: returnC,
	// };

	// const command = getCommandFunction[tes];

	// let getCommandFunction = () => {
	// 	let getCommandFunction = () => {};
	// 	switch (tes) {
	// 		case 'a':
	// 			getCommandFunction = returnA;
	// 			break;
	// 		case 'b':
	// 			getCommandFunction = returnB;
	// 			break;
	// 		case 'c':
	// 			getCommandFunction = returnC;
	// 			break;
	// 	}
	// 	return getCommandFunction;
	// };

	// const command = getCommandFunction();

	console.log(command(tes));
});
