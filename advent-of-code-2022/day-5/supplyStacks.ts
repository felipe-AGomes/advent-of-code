/* --- Day 5: Supply Stacks ---
The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3
Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3
Finally, one crate is moved from stack 1 to stack 2:

        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3
The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

After the rearrangement procedure completes, what crate ends up on top of each stack? */

// type StacksOfCratesInput = string;
// type RowOfStack = string;
// type ArrayRowOfStack = string[];

// const stacksOfCratesInput = `    [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 2 from 2 to 1`;

// const separeteColumns = (rowOfStack: RowOfStack) => {
// 	const newStack = rowOfStack.replace(/    /g, ' ');
// 	return newStack.split(' ').map((crate) => crate.replace(/\[(.)\]/g, '$1'));
// };

// const removeString = (string: string) => {
// 	return string.replace(/[a-zA-Z ]*/g, '').split('');
// };

// const showTopOfStacks = (stacks: StacksOfCratesInput) => {
// 	const [allStaks, command] = stacks.split('\n\n');
// 	const arrayRowOfStakcs = allStaks.split('\n').map(separeteColumns);
// 	const arrayCommand = command.split('\n').map(removeString);
// 	arrayRowOfStakcs.pop();

// 	let result = [];

// 	arrayCommand.forEach((command) => {
// 		let quantidade = +command[0];
// 		const de = +command[1] - 1;
// 		const para = +command[2] - 1;

// 		const a = arrayRowOfStakcs.map((rowStack) => {
// 			let newRowStack = [];
// 			if (rowStack[de] !== '' && quantidade > 0) {
// 				arrayRowOfStakcs.forEach((rowStack) => {
// 					if (rowStack[para] === '') {
// 						rowStack[para] = rowStack[de];
// 						rowStack[de] = '';
// 						--quantidade;
// 					}
// 					newRowStack = [...rowStack];
// 				});
// 			}
// 			return rowStack;
// 		});

// 	});

// const topStacks = new Array(arrayRowOfStakcs.length);

// arrayRowOfStakcs.forEach((rowOfStack) => {
// 	rowOfStack.forEach((crate, index) => {
// 		topStacks[index] =
// 			crate !== '' && !topStacks[index] ? crate : topStacks[index];
// 	});
// });

// return { topStacks: topStacks.join('') };
// };

type CommandPrps = {
	qnt: number;
	from: number;
	to: number;
};

const stacksOfCratesInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const splitRow = (string: string) => {
	return string.replace(/    /g, '*').replace(/ /g, '').split('');
};

const separateInput = (stacksOfCratesInput: string) => {
	const [stacksOfCratesAndColumns, commands] = stacksOfCratesInput.split('\n\n');
	const arrayStacksOfCratesAndColumns = stacksOfCratesAndColumns
		.replace(/\[(.)\]/g, '$1')
		.split('\n');

	const columns = arrayStacksOfCratesAndColumns[
		arrayStacksOfCratesAndColumns.length - 1
	].replace(/ /g, '');

	const stacksOfCrates = arrayStacksOfCratesAndColumns
		.filter((_, index) => index !== arrayStacksOfCratesAndColumns.length - 1)
		.map(splitRow);

	const newCommands = commands.split('\n').map((command): CommandPrps => {
		const result = command
			.replace(/[a-z]*/g, '')
			.replace(/ /g, '')
			.split('');
		return { qnt: +result[0], from: +result[1] - 1, to: +result[2] - 1 };
	});

	let allStacks = Array<string[]>(columns.length)
		.fill([])
		.map<string[]>(() => []);

	stacksOfCrates.forEach((stack) => {
		stack.forEach((crate, index) => {
			allStacks[index].push(crate);
		});
	});

	const newStacks = allStacks.map((stack) =>
		stack.filter((crate) => crate !== '*'),
	);
	return { allStacks: newStacks, columns, commands: newCommands };
};

const moveCrates = (commands: CommandPrps[], allStacks: string[][]) => {
	commands.forEach(({ qnt, from, to }) => {
		while (qnt > 0) {
			allStacks[to].unshift(allStacks[from].shift());
			qnt -= 1;
		}
	});
	return { allStacks };
};

const { commands, allStacks } = separateInput(stacksOfCratesInput);

console.log(moveCrates(commands, allStacks));
