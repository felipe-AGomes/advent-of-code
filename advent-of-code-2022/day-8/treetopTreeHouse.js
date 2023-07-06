module.exports = input = `
30373
25512
65332
33549
35390`;

const rows = input.split('\n');
const emptyArray = [...Array(rows[0].length)].map(() => null);
const columns = emptyArray.map((_, index) => {
	return rows.reduce((column, row) => {
		return column + row[index];
	}, '');
});

const edgeVisibleTree = rows.length * 2 + columns.length * 2 - 4;

let countVisibleTree = 0;
let mostTreeVisible = { currentTree: null, visibles: null };
for (
	let columnRootIndex = 1;
	columnRootIndex < rows.length - 1;
	columnRootIndex++
) {
	const currentRow = [...rows[columnRootIndex]].map(Number);
	for (
		let rowRootIndex = 1;
		rowRootIndex < currentRow.length - 1;
		rowRootIndex++
	) {
		const currentTreeHeight = currentRow[rowRootIndex];
		const currentColumn = [...columns[rowRootIndex]].map(Number);

		const sides = {
			top: { visible: true, visionCount: { visible: 0, visionBlocked: false } },
			right: { visible: true, visionCount: { visible: 0, visionBlocked: false } },
			bottom: { visible: true, visionCount: { visible: 0, visionBlocked: false } },
			left: { visible: true, visionCount: { visible: 0, visionBlocked: false } },
		};

		for (let columnIndex = 0; columnIndex < currentColumn.length; columnIndex++) {
			const columnTree = currentColumn[columnIndex];

			if (columnIndex === columnRootIndex) {
				let newCount = columnIndex - 1;
				while (newCount >= 0) {
					const columnTree = currentColumn[newCount];
					if (!sides.top.visionCount.visionBlocked) {
						sides.top.visionCount.visionBlocked = columnTree >= currentTreeHeight;
						sides.top.visionCount.visible += 1;
					}
					newCount -= 1;
				}
			}

			if (columnIndex < columnRootIndex && sides.top.visible) {
				sides.top.visible = columnTree < currentTreeHeight;
			}
			if (columnIndex > columnRootIndex && sides.bottom.visible) {
				const { visionBlocked } = sides.bottom.visionCount;
				sides.bottom.visible = columnTree < currentTreeHeight;
				if (!visionBlocked) {
					sides.bottom.visionCount.visionBlocked = columnTree >= currentTreeHeight;
					sides.bottom.visionCount.visible += 1;
				}
			}
		}

		for (let rowIndex = 0; rowIndex < currentRow.length; rowIndex++) {
			const rowTree = currentRow[rowIndex];

			if (rowIndex === rowRootIndex) {
				let newCount = rowIndex - 1;
				while (newCount >= 0) {
					const rowTree = currentRow[newCount];
					if (!sides.left.visionCount.visionBlocked) {
						sides.left.visionCount.visionBlocked = rowTree >= currentTreeHeight;
						sides.left.visionCount.visible += 1;
					}
					newCount -= 1;
				}
			}

			if (rowIndex < rowRootIndex && sides.left.visible) {
				sides.left.visible = rowTree < currentTreeHeight;
			}

			if (rowIndex > rowRootIndex && sides.right.visible) {
				const { visionBlocked } = sides.right.visionCount;
				sides.right.visible = rowTree < currentTreeHeight;
				if (!visionBlocked) {
					sides.right.visionCount.visionBlocked = rowTree >= currentTreeHeight;
					sides.right.visionCount.visible += 1;
				}
			}
		}

		countVisibleTree +=
			sides.top.visible ||
			sides.right.visible ||
			sides.bottom.visible ||
			sides.left.visible
				? 1
				: 0;

		const sumVisibility = Object.values(sides).reduce(
			(accumulator, direction) => accumulator * direction.visionCount.visible,
			1,
		);

		mostTreeVisible =
			!mostTreeVisible.currentTree || mostTreeVisible.visibles < sumVisibility
				? { currentTree: currentTreeHeight, visibles: sumVisibility }
				: mostTreeVisible;
	}
}
const totalVisibleTrees = countVisibleTree + edgeVisibleTree;
console.log(totalVisibleTrees, mostTreeVisible);
