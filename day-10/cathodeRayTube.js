module.exports = input = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

const commands = input.split('\n');

const calculateSignalStrength = (commands) => {
	return commands.reduce(
		(signals, command) => {
			let { cycle, stopCycle, signal } = signals;
			const [_, valString] = command.split(' ');
			const val = Number(valString);

			if (cycle + 2 > stopCycle && valString) {
				signals[stopCycle] = signal * stopCycle;
				stopCycle += 40;
			} else if (cycle === stopCycle) {
				signals[stopCycle] = signal * stopCycle;
				stopCycle += 40;
			}
			cycle += val ? 2 : 1;
			signal += val ? val : 0;
			return { ...signals, cycle, stopCycle, signal };
		},
		{ cycle: 1, signal: 1, stopCycle: 20 },
	);
};

const signalStrength = calculateSignalStrength(commands);

const sumOfSignals = Object.values(signalStrength)
	.slice(0, -3)
	.reduce((sum, signal) => sum + signal, 0);

console.log(sumOfSignals);
