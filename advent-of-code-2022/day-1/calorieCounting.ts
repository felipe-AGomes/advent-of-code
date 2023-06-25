type ElfWithMostCaloriesProps = {
	elf: number;
	calories: null | number;
};

type CaloriesInput = string;

const calories = `1000
2000
3000

4000
7000
10000
10000

5000
6000

7000
8000
9000

10000`;

const findElfWithMostCalories = (calories: CaloriesInput) => {
	const arrayCalories = calories.split('\n');
	let elf = 1;
	let elfWithMostCalories: ElfWithMostCaloriesProps = { elf: 1, calories: null };
	let someOfCalories = 0;

	for (let i = 0; i < arrayCalories.length; i++) {
		if (arrayCalories[i] === '') {
			if (
				elfWithMostCalories.calories === null ||
				elfWithMostCalories.calories < someOfCalories
			) {
				elfWithMostCalories.elf = elf;
				elfWithMostCalories.calories = someOfCalories;
			}
			elf++;
			someOfCalories = 0;
		} else {
			someOfCalories += +arrayCalories[i];
		}
	}
	return { ...elfWithMostCalories };
};

const elfWithMostCalories = findElfWithMostCalories(calories);
console.log(
	`The Elf with most calories is ${elfWithMostCalories.elf}° elf, he has ${elfWithMostCalories.calories} calories`,
);
