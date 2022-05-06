////////////////////////
//platform or GGB code//
////////////////////////

//create step variable in ggb, if
ggb1.registerObjectUpdateListener("step", "hup234");

function hup234() {
	if (ggb1.getValue("step") == 1) {
		//first button click function
	}
	if (ggb1.getValue("step") == 2) {
		//second button click function
	}
	if (ggb1.getValue("step") == 3) {
		//third button click function
	}
}

let ggb1 = ggbApplet;

/////////////////
//platform code//
/////////////////
const { ggb1, buttonGroup1 } = components;

ggb1.instance.setValue("step", 0);

buttonGroup1.on("click:1", () => {
	ggb1.instance.setValue("step", 1);
});

buttonGroup1.on("click:2", () => {
	ggb1.instance.setValue("step", 2);
});

buttonGroup1.on("click:3", () => {
	ggb1.instance.setValue("step", 3);
});
