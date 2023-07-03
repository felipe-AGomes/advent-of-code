const input = `$ cd /
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
7214296 k
dir caralhoFilhoDaPuta`;

export type File = {
	name: string;
	size: number;
};

type Directory = {
	files?: File[];
	dirs?: Directory;
	size?: number;
};

type DirectoriesNoTree = {
	name: string;
	files: File[];
	dirs: string[];
	size: number;
};

type ArrayDirectories = {
	directories: DirectoriesNoTree[];
	location: string[];
};

const lines = input.split('\n');

const arrayDirectories: DirectoriesNoTree[] = lines
	.reduce(
		({ directories, location }: ArrayDirectories, line) => {
			const currentDir = location[location.length - 1];

			const doNothing = () => ({ directories, location });

			const addFile = (line: string) => {
				const [size, name] = line.split(' ');

				const foundDirectory = directories.find(
					(directory) => directory.name === currentDir,
				);

				if (
					!foundDirectory ||
					foundDirectory.files.find((dir) => dir.name === name)
				) {
					return { directories, location };
				}

				foundDirectory.files.push({ name, size: Number(size) });

				return { directories, location };
			};

			const closeDir = () => {
				const newLocation = location.slice(0, -1);

				return { directories, location: newLocation };
			};

			const addSubDir = () => {
				const dir = line.match(/dir (.+)/)[1];
				const foundDirectory = directories.find(
					(directory) => directory.name === currentDir,
				);

				if (!foundDirectory || foundDirectory.dirs.find((dir1) => dir1 === dir)) {
					return { directories, location };
				}

				foundDirectory.dirs.push(dir);
				return { directories, location };
			};

			const rootDir = () => {
				const newLocation = '/';

				const foundDirectory = directories.find(
					(directory) => directory.name === newLocation,
				);

				if (!foundDirectory) {
					directories.push({ name: newLocation, files: [], dirs: [], size: 0 });
				}

				return { directories, location: [newLocation] };
			};

			const changeCurrentDir = (line: string) => {
				const newLocation = line.match(/\$ cd (.+)/)[1];

				const foundDirectory = directories.find(
					(directory) => directory.name === newLocation,
				);

				if (!foundDirectory) {
					directories.push({ name: newLocation, files: [], dirs: [], size: 0 });
				}

				return { directories, location: [...location, newLocation] };
			};

			const commandMap = [
				{ expression: /\d+/, function: addFile },
				{ expression: /dir .+/, function: addSubDir },
				{ expression: /\$ cd \.\./, function: closeDir },
				{ expression: /\$ cd \//, function: rootDir },
				{ expression: /\$ cd ./, function: changeCurrentDir },
			];

			const command =
				commandMap.find(({ expression }) => expression.test(line))?.function ??
				doNothing;

			return command(line);
		},
		{
			directories: [],
			location: [],
		},
	)
	.directories.map((directory) => {
		directory.size = directory.files.reduce((acc, file) => acc + file.size, 0);
		return directory;
	});

const sumDirectories = (directories: string[], size: number) => {
	if (directories.length === 0) {
		return size;
	}

	const result = directories.reduce((acc, dir) => {
		const currentDir: DirectoriesNoTree = arrayDirectories.find(
			(directory) => directory.name === dir,
		);

		if (!currentDir) {
			return acc;
		}

		return acc + sumDirectories(currentDir.dirs, currentDir.size);
	}, size);
	return result;
};

const treeDirectories = (directories: string[]) => {
	if (directories.length === 0) {
		return {};
	}
	const result = directories.reduce((newTree, dir) => {
		const currentDir: DirectoriesNoTree = arrayDirectories.find(
			(directory) => directory.name === dir,
		);

		if (!currentDir) {
			return { ...newTree, [dir]: { files: [], dirs: [], size: 0 } };
		}

		const result = {
			[currentDir.name]: {
				files: [...currentDir.files],
				dirs: treeDirectories(currentDir.dirs),
				size: sumDirectories(currentDir.dirs, currentDir.size),
			},
		};
		return { ...newTree, ...result };
	}, {});
	return result;
};

const rootDir = { ...arrayDirectories[0] };
const tree: Directory = {};
tree[rootDir.name] = {
	files: [...rootDir.files],
	dirs: treeDirectories(rootDir.dirs),
	size: sumDirectories(rootDir.dirs, rootDir.size),
};

console.log(tree['/']);
