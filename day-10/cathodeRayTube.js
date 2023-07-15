module.exports = input = `noop
noop
addx 5
addx 1
addx 10
addx -4
noop
addx -1
noop
addx 5
addx -5
addx 9
addx 2
addx -15
addx 18
addx 8
addx -2
noop
addx -18
addx 21
addx 1
addx -37
addx 27
addx -24
addx 2
addx 5
addx -7
addx 26
addx -16
addx 2
addx 5
addx -15
noop
addx 20
addx 2
addx 4
addx -3
addx 2
noop
addx 3
addx 2
addx 5
addx -40
addx 2
addx 33
addx -30
addx 5
addx 5
addx 17
addx -19
addx 2
addx 5
addx 20
addx -16
addx 3
addx -2
addx 7
noop
addx -2
addx 5
addx 2
addx 3
addx -2
addx -38
addx 5
addx 2
addx 1
addx 15
addx -8
noop
addx -2
addx 4
addx 2
addx 4
addx -2
noop
addx 6
addx 2
addx -1
addx 4
noop
addx 1
addx 4
noop
noop
noop
addx -37
addx 5
addx 2
addx 22
addx -17
addx -2
noop
addx 3
addx 2
noop
addx 3
addx 2
noop
noop
noop
addx 5
addx 5
addx 2
addx 3
noop
addx 2
addx -23
addx 2
addx -14
noop
addx 29
addx -26
noop
addx 8
noop
noop
noop
addx -9
addx 11
addx 5
addx 2
noop
addx 1
noop
noop
addx 5
noop
noop
addx 2
noop
addx 3
addx 2
addx -2
noop
noop
noop`;

const commands = input.split('\n');

let cycle = 1;
let signal = 1;
let stopCycle = 20;

let signalStrength = {};

for (let commandIndex = 0; commandIndex < commands.length; commandIndex++) {
	const command = commands[commandIndex];
	const [_, valString] = command.split(' ');
	const val = Number(valString);

	if (cycle + 2 > stopCycle && valString) {
		signalStrength[stopCycle] = signal * stopCycle;
		stopCycle += 40;
	} else if (cycle === stopCycle) {
		signalStrength[stopCycle] = signal * stopCycle;
		stopCycle += 40;
	}
	cycle += val ? 2 : 1;
	signal += val ? val : 0;
}

const sumOfSignals = Object.values(signalStrength).reduce(
	(sum, signal) => sum + signal,
	0,
);

console.log(signalStrength);
console.log(sumOfSignals);
