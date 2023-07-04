export const input = `30373
25512
65332
33549
35390`;

const rows = input.split('\n');
const emptyArray = [null, null, null, null, null];
const columns = emptyArray.map((_, index) => {
	return rows.reduce((column, row) => {
		return column + row[index];
	}, '');
});
console.log({ columns, rows });
