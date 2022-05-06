const { ggb1, fib2, fib3, fib4, buttonGroup1, text1 } = components;

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
	text1.updateData({
		text: `$${vert} \\times ${horiz} = ${vert} \\times \\Big(${horizTens}\\thinspace+ ${horizOnes}\\Big)$`,
	});
});

buttonGroup1.on("click:1", () => {
	let currentCount = ggb1.data.count;
	console.log(currentCount);
	switch (currentCount) {
		case 0: //lock in area model and show fib2, no input yet
			ggb1.instance.setCoords("Number", num2, -num1);
			ggb1.instance.setCoords("B", num2tens, 0);
			ggb1.instance.setVisible("Number", false);
			ggb1.instance.setVisible("NumberHalo", false);
			ggb1.instance.setVisible("B", false);
			ggb1.instance.setVisible("BHalo", false);
			ggb1.instance.setValue("input3", num1);
			ggb1.instance.setValue("input4", num1);
			ggb1.updateData({ count: currentCount + 1 });
			fib2.setVisible(true);
			break;
		//they input numbers here, fib2 on change is called
		case 1:
			ggb1.instance.setValue("showGreen", true);
			ggb1.instance.setAnimating("input1FillSlider", true);
			ggb1.instance.startAnimation(true);
			console.log();
			if (
				ggb1.instance.getValue("input1") == num2tens &&
				ggb1.instance.getValue("input2") == num2ones &&
				ggb1.instance.getValue("input3") == num1 &&
				ggb1.instance.getValue("input4") == num1
			) {
				ggb1.updateData({ count: currentCount + 1 });
				fib3.setVisible(true);
			}
			break;
		case 2:
			//feedback?
			if (
				(ggb1.instance.getValue("area1") == num1 * num2tens &&
					ggb1.instance.getValue("area2") == num1 * num2ones) ||
				(ggb1.instance.getValue("area1") == num1 * num2ones &&
					ggb1.instance.getValue("area2") == num1 * num2tens)
			) {
				ggb1.updateData({ count: currentCount + 1 });
				fib4.setVisible(true);
			}
			break;
		case 3:
			let fib4Input1 = boundIt(fib4, 0, 0, 199);
			ggb1.instance.setValue(
				"difference",
				fib4Input1 - ggb1.instance.getValue("area1+area2")
			);
			ggb1.instance.setValue("shiftDownSlider", 0);
			ggb1.instance.setAnimating("shiftDownSlider", true);
			ggb1.instance.startAnimation();
			break;
		default:
			break;
	}
	//ggb1.updateData({ count: currentCount + 1 });
});

//distributive prop fib comp (_+_)x(_+_)
fib2.on("change:0", () => {
	ggb1.instance.setValue("input1FillSlider", 0);
	ggb1.instance.setValue("input2FillSlider", 0);
	let fib2Input1 = boundIt(fib2, 0, 0, 99);
	ggb1.instance.setValue("input3", fib2Input1);
});
fib2.on("change:1", () => {
	ggb1.instance.setValue("input1FillSlider", 0);
	ggb1.instance.setValue("input2FillSlider", 0);
	let fib2Input2 = boundIt(fib2, 1, 0, 99);
	ggb1.instance.setValue("input1", fib2Input2);
});
fib2.on("change:2", () => {
	ggb1.instance.setValue("input1FillSlider", 0);
	ggb1.instance.setValue("input2FillSlider", 0);
	let fib2Input3 = boundIt(fib2, 2, 0, 99);
	ggb1.instance.setValue("input4", fib2Input3);
});
fib2.on("change:3", () => {
	ggb1.instance.setValue("input1FillSlider", 0);
	ggb1.instance.setValue("input2FillSlider", 0);
	let fib2Input4 = boundIt(fib2, 3, 0, 99);
	ggb1.instance.setValue("input2", fib2Input4);
});

//partial products fib comp _+_
fib3.on("change:0", () => {
	let fib3Input1 = boundIt(fib3, 0, 0, 99);
	ggb1.instance.setValue("area2", fib3Input1);
	ggb1.instance.setVisible("D5", true);
	ggb1.instance.setVisible("D6", true);
});
fib3.on("change:1", () => {
	let fib3Input2 = boundIt(fib3, 1, 0, 99);
	ggb1.instance.setValue("area1", fib3Input2);
	ggb1.instance.setVisible("D5", true);
	ggb1.instance.setVisible("D6", true);
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
