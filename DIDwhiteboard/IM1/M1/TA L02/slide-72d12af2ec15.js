//slide-72d12af2ec15

const { table1, button1 } = components;
button1.updateData({ align: "right" });

let figureNumbers = [];
//if text in column 0 is a number, populate other values in the same row
//can be changed to on change when functionality becomes available
//table1.on("change",() => {

autorun(() => {
	figureNumbers = [];
	for (let i = 1, L = table1.data.rows.length; i < L; i++) {
		let figNum = table1.getCell(i, 0).value;
		if (figNum != "" && Math.floor(figNum) == figNum && figNum > 0) {
			figureNumbers.push(figNum);
			table1.updateCell(i, 1, {
				math: true,
				editable: false,
				value: `${6 + 5 * (figNum - 1)}`,
			});
			table1.updateCell(i, 2, {
				math: true,
				editable: false,
				value: `${1 + 5 * figNum}`,
			});
			table1.updateCell(i, 3, {
				math: true,
				editable: false,
				value: `${
					2 * parseFloat(figNum) +
					2 * parseFloat(figNum) +
					parseFloat(figNum) +
					1
				}`,
			});
		} else {
			table1.updateCell(i, 1, { math: true, editable: false, value: `` });
			table1.updateCell(i, 2, { math: true, editable: false, value: `` });
			table1.updateCell(i, 3, { math: true, editable: false, value: `` });
		}
	}
	button1.updateData({ disabled: false, text: "Submit" });
});

button1.on("click", () => {
	console.log(`Sending:${figureNumbers}`);
	button1.updateData({ disabled: true, text: "Submitted" });
	utils.RTS.sendData("slide-72d12af2ec15", {
		figureNumbers: figureNumbers,
	});
});
