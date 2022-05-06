const { ggb1, fib1, buttonGroup1 } = components;

buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(newangle)");
	fib1.clear();
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(flipangle)");
});
/*buttonGroup1.on("click:4", () => {
	ggb1.instance.evalCommand("RunClickScript(tryagain)");
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
//	buttonGroup1.updateSingleButton({ disabled: false }, 4);
});
*/
buttonGroup1.on("click:3", () => {
	ggb1.instance.setValue("angle", (fib1.getInput(0).text * Math.PI) / 180);
	ggb1.instance.evalCommand("RunClickScript(check)");
	//	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});

autorun(() => {
	console.log(fib1.getInput(0).text);
	console.log((fib1.getInput(0).text * Math.PI) / 180);
	if (fib1.getInput(0).text == "") {
		buttonGroup1.updateSingleButton({ disabled: true }, 3);
		//	buttonGroup1.updateSingleButton({ disabled: true }, 4);
	} else {
		buttonGroup1.updateSingleButton({ disabled: false }, 3);
		//	buttonGroup1.updateSingleButton({ disabled: false }, 4);
	}
});
