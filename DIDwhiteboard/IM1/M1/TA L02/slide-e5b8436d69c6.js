//slide-e5b8436d69c6

const { table2 } = components;
utils.RTS.on("datachange", "slide-72d12af2ec15", (register) => {
	// Don't do anything if we don't have data
	if (!register || !register.length) {
		return;
	}

	const numArray = register
		.map(({ data, info }) => {
			const { figureNumbers } = data; // destructuring assignment, like for components
			return [...figureNumbers];
		})
		.flat()
		.sort((a, b) => a - b);

	const numSet = new Set(numArray);

	let index = 0;
	for (let item of numSet) {
		index++;
		if (table2.data.rows.length <= numSet.size) {
			table2.addRow(table2.data.rows.length);
		}
		let figNum = item;
		console.log(`Row ${index} of ${table2.data.rows.length} is ${figNum}`);
		table2.updateCell(index, 0, {
			math: true,
			editable: false,
			value: `${parseFloat(figNum)}`,
		});
		table2.updateCell(index, 1, {
			math: true,
			editable: false,
			value: `${6 + 5 * parseFloat(figNum - 1)}`,
		});
		table2.updateCell(index, 2, {
			math: true,
			editable: false,
			value: `${1 + 5 * parseFloat(figNum)}`,
		});
		table2.updateCell(index, 3, {
			math: true,
			editable: false,
			value: `${
				2 * parseFloat(figNum) +
				2 * parseFloat(figNum) +
				parseFloat(figNum) +
				1
			}`,
		});
	}
});
