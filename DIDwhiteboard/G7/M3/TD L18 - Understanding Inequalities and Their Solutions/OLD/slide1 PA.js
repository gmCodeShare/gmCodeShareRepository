const { ggb1, ggb2, text1, buttonGroup1 } = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener("timePump", keepGoing);

onInit();
function onInit() {
	if (!ggb1.data.init) {
		// set initial states
		ggb1.updateData({ balloonNum: 0, pumpNumbers: [] });
		// create/update a dummy variable to keep track of whether the slide has initialized
		ggb1.updateData({ init: true });
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
}

const pumpNumbers = ggb1.data.pumpNumbers;

function keepGoing() {
	if (
		ggb1.instance.getValue("pumpCount") <
			ggb2.instance.getValue("pumpChoice") &&
		ggb1.instance.getValue("timePump") == 0.5
	) {
		ggb1.instance.stopAnimation();
		ggb1.instance.setAnimating("timeStep", false);
		ggb1.instance.setValue("time", ggb1.instance.getValue("time+timeStep"));
		ggb1.instance.setValue("timeStep", 0);
		ggb1.instance.setValue("timePump", 0);
		ggb1.instance.setAnimating("timeStep", true);
		ggb1.instance.setValue(
			"pumpCount",
			ggb1.instance.getValue("pumpCount+1")
		);
		ggb1.instance.startAnimation();
	}
}

//click through to pump button
buttonGroup1.on("click:1", () => {
	if (ggb2.instance.getValue("pumpChoice") != 0) {
		ggb2.instance.setFixed("pumpChoice", true, false);
		ggb1.instance.stopAnimation();
		ggb1.instance.setAnimating("timeStep", false);
		ggb1.instance.setValue("time", ggb1.instance.getValue("time+timeStep"));
		ggb1.instance.setValue("timeStep", 0);
		ggb1.instance.setValue("timePump", 0);
		ggb1.instance.setAnimating("timeStep", true);
		ggb1.instance.setValue(
			"pumpCount",
			ggb1.instance.getValue("pumpCount+1")
		);
		ggb1.instance.startAnimation();
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
		if (ggb2.instance.getValue("pumpChoice") < 5) {
			pumpNumbers.push(ggb2.instance.getValue("pumpChoice"));
		}
	}
});

//click through to new balloon button
buttonGroup1.on("click:2", () => {
	ggb2.instance.setFixed("pumpChoice", true, true);
	ggb1.instance.evalCommand("RunClickScript(button2)");
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	ggb1.updateData({ balloonNum: ggb1.data.balloonNum + 1 });
	ggb1.instance.setValue("balloonNum", ggb1.data.balloonNum);
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

//align text above GGB
text1.updateData({ align: "center" });

autorun(() => {
	let num = ggb1.innerData["pumpCount"];
	let timer = ggb1.innerData["timeStep"];
	text1.updateData({ text: `Number of pumps: $${num}$` });
});
