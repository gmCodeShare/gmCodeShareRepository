const { ggb1, fib1, fib2, fib3, fib4, buttonGroup1, text1 } = components;

let num1 = 4;
let num2 = 23;
let num2tens = 10 * Math.floor(num2 / 10);
let num2ones = num2 % 10;
console.log(num1, num2, num2tens, num2ones);

ggb1.instance.setVisible("button1", false);
ggb1.instance.setVisible("button3", false);
ggb1.instance.setVisible("button4", false);
ggb1.updateData({ count: 0 });

slide.on("firstload", () => {
	ggb1.instance.setValue("time", 0);
	ggb1.instance.setValue("input1FillSlider", 0);
	ggb1.instance.setValue("input2FillSlider", 0);
	fib1.setVisible(false);
	fib2.setVisible(false);
	fib3.setVisible(false);
	fib4.setVisible(false);
	ggb1.instance.setVisible("NumberHalo", true);
	ggb1.instance.setVisible("BHalo", true);
});

autorun(() => {
	let number = ggb1.innerData["Number"];
	let horiz = Math.abs(number[0]);
	let vert = Math.abs(number[1]);
	let horizTens =
		Math.floor(Math.abs(ggb1.instance.getXcoord("Number")) / 10) * 10;
	let horizOnes = Math.abs(ggb1.instance.getXcoord("Number")) % 10;
});

buttonGroup1.on("click:1", () => {
	let currentCount = ggb1.data.count;
	switch (currentCount) {
		case 0:
			ggb1.updateData({ count: currentCount + 1 });
			fib1.setVisible(true);
			fib2.setVisible(true);
			fib3.setVisible(true);
			fib4.setVisible(true);
			text1.updateData({ visible: false });
			break;
		case 1:
			buttonGroup1.updateSingleButton(
				{ text: "Submitted", disabled: true },
				1
			);
			break;
	}
});

fib1.on("change:0", () => {
	boundIt(fib1, 0, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

fib1.on("change:1", () => {
	boundIt(fib1, 1, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

fib1.on("change:2", () => {
	boundIt(fib1, 2, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

//distributive prop fib comp (_+_)x(_+_)
fib2.on("change:0", () => {
	boundIt(fib2, 0, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});
fib2.on("change:1", () => {
	boundIt(fib2, 1, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});
fib2.on("change:2", () => {
	boundIt(fib2, 2, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});
fib2.on("change:3", () => {
	boundIt(fib2, 3, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

//partial products fib comp _+_
fib3.on("change:0", () => {
	boundIt(fib3, 0, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});
fib3.on("change:1", () => {
	boundIt(fib3, 1, 0, 99);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

fib4.on("change", () => {
	boundIt(fib4, 0, 0, 199);
	buttonGroup1.updateSingleButton({ text: "Submit", disabled: false }, 1);
});

function boundIt(inputComp, position, min, max) {
	const result = utils.math.evaluateLatex(inputComp.getInput(position).text);
	if (result.error) {
		inputComp.updateInput(position, { text: "0" }); // what should the text do/say if students input "cabbage"?
		return 0; // whatever you go with here, make sure it's inside of your min and max!
	} else if (result.value < min) {
		inputComp.updateInput(position, { text: `${min}` });
		return min;
	} else if (result.value > max) {
		inputComp.updateInput(position, { text: `${max}` });
		return max;
	}
	// you can add things like floor or toFixed to validate only integers, or something similar
	//let flooredNum = Math.floor(result.value);
	//inputComp.updateInput(position, { text: `${flooredNum}` });
	//return flooredNum;
	return result.value;
}
