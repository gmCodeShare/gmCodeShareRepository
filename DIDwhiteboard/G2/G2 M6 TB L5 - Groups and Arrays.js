const { ggb1, table1, button1 } = components;
let onPlates = true;
ggb1.instance.setValue("t1", 0);
button1.updateData({ align: "left" });

button1.on("click", () => {
	if (onPlates) {
		onPlates = false;
		button1.updateData({ text: "Send Back" });
	} else {
		onPlates = true;
		button1.updateData({ text: "Make an Array" });
	}
	ggb1.instance.evalCommand("RunClickScript(button2)");
});

autorun(() => {
	let number = table1.getCell(0, 0).value;
	let boundedNum = boundIt(table1, 0, 0, 1, 10);
	let size = table1.getCell(0, 1).value;
	let boundedSize = boundIt(table1, 0, 1, 1, 10);
	ggb1.instance.setValue("Ngroups", boundedNum);
	ggb1.instance.setValue("Sgroup", size);
});

autorun(() => {
	let number = boundIt(table1, 0, 0, 1, 10);
	let timer = ggb1.innerData["t1"];
	if (timer == 0 || timer == 1 + 0.1 * number) {
		button1.updateData({ disabled: false });
		table1.updateRow(0, { editable: true });
	} else {
		button1.updateData({ disabled: true });
		table1.updateRow(0, { editable: false });
	}
	if (timer == 0) {
		table1.updateRow(0, { editable: true });
	} else {
		table1.updateRow(0, { editable: false });
	}
});

function boundIt(tableComp, row, column, min, max) {
	const result = utils.math.evaluateLatex(
		tableComp.getCell(row, column).value
	);
	if (result.error) {
		table1.updateCell(row, column, {
			value: "1",
		}); // what should the text do/say if students input "cabbage"?
		return 1; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		table1.updateCell(row, column, {
			value: `${min}`,
		});
		return min;
	} else if (result.value > max) {
		table1.updateCell(row, column, {
			value: `${max}`,
		});
		return max;
	}
	return result.value;
}
