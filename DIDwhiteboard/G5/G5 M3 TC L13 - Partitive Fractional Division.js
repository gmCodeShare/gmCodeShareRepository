const { ggb1, text1 } = components;

autorun(() => {
	let groupNumber = ggb1.innerData["a"];
	let groupSize = ggb1.innerData["b"];
	console.log(groupNumber, groupSize);
	switch (true) {
		case groupNumber == 1:
			text1.updateData({
				align: "center",
				text: `$${
					groupNumber * groupSize
				}$ is $${groupNumber}$ group of $${groupSize}$`,
			});
			break;
		case groupNumber < 1:
			text1.updateData({
				align: "center",
				text: `$${groupNumber * groupSize}$ is $\\frac{1}{${
					1 / groupNumber
				}}$ of a group of $${groupSize}$`,
			});
			break;
		case groupNumber > 1:
			text1.updateData({
				align: "center",
				text: `$${
					groupNumber * groupSize
				}$ is $${groupNumber}$ groups of $${groupSize}$`,
			});
			break;
	}
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Would have been nice, didn't have time to develop///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { ggb1, fib1, fib2, fib3 } = components;

fib1.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
fib2.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
fib3.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });

fib1.setVisible(true);
fib2.setVisible(false);
fib3.setVisible(false);

fib1.on("change:0", ({ value }) => {
	ggb1.instance.setValue("FullNumber", fib1.getInput(0).text);
	fib2.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	fib3.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	ggb1.instance.setValue("GroupNumber", 1);
	fib1.setVisible(true);
	fib2.setVisible(false);
	fib3.setVisible(false);
});

fib2.on("change:0", ({ value }) => {
	ggb1.instance.setValue("FullNumber", fib2.getInput(0).text);
	fib1.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	fib3.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	ggb1.instance.setValue("GroupNumber", 1);
	fib1.setVisible(true);
	fib2.setVisible(false);
	fib3.setVisible(false);
});

fib3.on("change:0", ({ value }) => {
	ggb1.instance.setValue("FullNumber", fib3.getInput(0).text);
	fib2.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	fib1.updateInput(0, { text: ggb1.instance.getValue("FullNumber") });
	ggb1.instance.setValue("GroupNumber", 1);
	fib1.setVisible(true);
	fib2.setVisible(false);
	fib3.setVisible(false);
});

autorun(() => {
	let groupNumber = ggb1.innerData["a"];
	let groupSize = ggb1.innerData["b"];
	console.log(groupNumber, groupSize);
	fib1.updateInput(1, { text: `${groupNumber}` });
	fib1.updateInput(2, { text: `${groupSize}` });
	fib2.updateInput(1, { text: `${groupNumber}` });
	fib2.updateInput(2, { text: `${groupSize}` });
	fib3.updateInput(1, { text: `\\frac{1}{${1 / groupNumber}}` });
	fib3.updateInput(2, { text: `${groupSize}` });

	switch (true) {
		case groupNumber == 1:
			fib1.setVisible(false);
			fib2.setVisible(true);
			fib3.setVisible(false);
			break;
		case groupNumber < 1:
			fib1.setVisible(false);
			fib2.setVisible(false);
			fib3.setVisible(true);
			break;
		case groupNumber > 1:
			fib1.setVisible(true);
			fib2.setVisible(false);
			fib3.setVisible(false);
			break;
	}
});
