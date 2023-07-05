export const input = `30373
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

const edgeSum = rows.length * 2 + columns.length * 2 - 4;

let teste = 0;
for (let i = 1; i < rows.length - 1; i++) {
	const row = [...rows[i]];
	const sides = {
		row: true,
		column: true,
	};
	row.forEach((rowRootTree, rowRootIndex) => {
		if (!(rowRootIndex === 0 || rowRootIndex === row.length - 1)) {
			const column = [...columns[rowRootIndex]];
			console.log(column);
			column.forEach((columnTree, columnIndex) => {
				if (columnIndex !== rowRootIndex) {
					sides.column = columnTree < rowRootTree;
				}
			});
			row.forEach((rowTree, rowIndex) => {
				if (rowIndex !== rowRootIndex) {
					sides.row = rowTree < rowRootTree;
				}
			});
		}
	});
	teste += sides.row || sides.column ? 1 : 0;
}
console.log(teste + edgeSum);
