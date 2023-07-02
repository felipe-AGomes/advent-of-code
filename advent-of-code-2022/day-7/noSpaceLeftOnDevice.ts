type File = {
	size: number;
	name: string;
};

type Diretories = {
	[key: string]: {
		size: number;
		files: File[];
		dir: Diretories[];
	};
};

export const input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const commands = input.split('\n');

const checkCurrentDir = (command: string, currentDir: string, previousDir: string[]) => {
	const checkNewDir = command.includes('$ cd')
			? command.split('cd ')[1]
			: currentDir;

		if (checkNewDir === '..') {
			previousDir.pop()
			currentDir = previousDir[previousDir.length - 1];
		} else if (checkNewDir !== currentDir && currentDir) {
			previousDir.push(checkNewDir);
			currentDir = checkNewDir;
		} else {
			currentDir = checkNewDir;
		}

		if (previousDir.length === 0) {
			previousDir.push(currentDir);
		}
	return currentDir
};

const resolveCommands = (commands: string[]) => {
	let diretories: Diretories = {};
	let previousDir: string[] = [];
	let currentDir = '';
	commands.forEach((command) => {
		currentDir = checkCurrentDir(command, currentDir, previousDir)

		const fileOrDir = command.match(/(\d)/)
			? 'files'
			: command.startsWith('dir') && 'dir';

		if (currentDir && !diretories[currentDir]) {
			diretories[currentDir] = {
				size: 0,
				files: [],
				dir: [],
			};
		}
		if (!command.startsWith('$') && fileOrDir === 'files') {
			const [size, name] = command.split(' ');
			diretories[currentDir].files.push({ name, size: Number(size) });
		}

		if (!command.startsWith('$') && fileOrDir === 'dir') {
			const [size, name] = command.split(' ');
				diretories[currentDir].dir.push({ 'a': {size: 123, files: [], dir: []}});
		}
	});
	console.log(diretories);
};

resolveCommands(commands);

const objExample = {
	'/': {
		size: 123,
		files: ['a.txt', 'b.txt'],
		dir: [
			{
				a: {
					size: 122,
					files: ['c.txt, d.txt'],
					dir: [{}],
				},
			},
			{
				b: {
					size: 125,
					files: ['c.txt, d.txt'],
					dir: [{}],
				},
			},
		],
	},
};
