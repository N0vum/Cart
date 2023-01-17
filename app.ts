enum incOrDec {
	INCREASE = 'asc',
	DECREASE = 'desc'
};
const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];
interface ID {
	id: number;
}
function sortArray<T extends ID>(data: T[], typeOfSort: incOrDec = incOrDec.INCREASE): T[] {
	if (typeOfSort == incOrDec.INCREASE || typeOfSort == incOrDec.INCREASE.toUpperCase()) {
		return data.sort((a, b) => { return a.id - b.id })
	}
	else if (typeOfSort == incOrDec.DECREASE || typeOfSort == incOrDec.DECREASE.toUpperCase()) {
		return data.sort((a, b) => { return b.id - a.id })
	}
	else {
		throw new Error('Данного типа сортировки не предусмотрено')
	}
}
console.log(sortArray(data));