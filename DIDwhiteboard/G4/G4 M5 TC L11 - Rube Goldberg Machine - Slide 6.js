const { ggb6, buttonGroup1 } = components;
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: false }, 1);
/**
 * STEP 1: declare your earlier slide id as a variable
 * (optional, but a good practice)
 */
ggb6.instance.setVisible("eq1", false);
ggb6.instance.setVisible("RedBall_2", false);
ggb6.instance.setVisible("GreenBall_2", false);
ggb6.instance.setVisible("lake", true);
ggb6.instance.setValue("xMin", -10);
ggb6.instance.setValue("xMax", 60);
ggb6.instance.setValue("yMin", -14);
ggb6.instance.setValue("yMax", 9);
ggb6.instance.setValue("γ", 0);
ggb6.instance.setCoords("H_5", 107.75, -5.25);
buttonGroup1.updateSingleButton({ disabled: true }, 2);

const id1 = "slide-5a5305e12a6c";
const id2 = "slide-8ad343f417c7";
const id3 = "slide-3f1b0a13c893";
const id4 = "slide-0e89a0007f85";
const id5 = "slide-08b214ddb0be";

ggb6.instance.registerObjectUpdateListener("time", section1);
ggb6.instance.registerObjectUpdateListener("time_2", section2);
ggb6.instance.registerObjectUpdateListener("time_3", section3);
ggb6.instance.registerObjectUpdateListener("δ", pass);
// ggb6.instance.registerObjectUpdateListener("B_4", weighOptions);
// ggb6.instance.registerObjectUpdateListener("C_4", weighOptions);
ggb6.instance.registerObjectUpdateListener("Z_3", pew);
ggb6.instance.registerObjectUpdateListener("R_4", thump);
ggb6.instance.registerObjectUpdateListener("M_4", pew);
ggb6.instance.registerObjectUpdateListener("J_4", pew);
ggb6.instance.registerObjectUpdateListener("K_4", pew);
ggb6.instance.registerObjectUpdateListener("L_4", pew);
ggb6.instance.registerObjectUpdateListener("lean1", dominoes);
ggb6.instance.registerObjectUpdateListener("lean2", dominoes2);
ggb6.instance.registerObjectUpdateListener("lean3", dominoes3);
ggb6.instance.registerObjectUpdateListener("lean4", kickoff);
ggb6.instance.registerObjectUpdateListener("β", zoom);
ggb6.instance.registerObjectUpdateListener("H_5", sooperDooper);
ggb6.instance.registerObjectUpdateListener("γ", weeee);
ggb6.instance.registerObjectUpdateListener("I_5", drop);
ggb6.instance.registerObjectUpdateListener("U_5", boing);
ggb6.instance.registerObjectUpdateListener("N_5", kaboom);

/**
 * STEP 2: create a variable for your previous GGB
 *
 * * use getPrevGGB instead of getFromSlide
 *
 * * getPrevGGB takes four parameters/arguments:
 *    1. slide id
 *    2. component name on previous slide as a string
 *    3. an object (curly braces) - see STEP 3
 *    4. name of a component on this slide we can use to save data with updateData
 *      - NOT a string!
 *      - this can be any one of the following: button group, button, checkbox, geogebra,
 *        input, image, radio, table, textbox, submit textbox, submit input, submit button,
 *        share textbox, share input, share button
 *
 *
 * STEP 3: add default values for any data you need to reference inside the object
 *  from STEP 2
 *
 * * anything from the previous GGB that you need on this slide MUST have a default
 *    value in case the platform can't access the earlier slide
 */

const id1PrevGGB1 = getPrevGGB(
	id1,
	"ggb1",
	{ hangRight: true, hangLeft: false },
	ggb6
);
const id2PrevGGB1 = getPrevGGB(
	id2,
	"ggb2",
	{ L: [19, -11], C: [22, -11], G: [25, -11] },
	ggb6
);
const id3PrevGGB1 = getPrevGGB(
	id3,
	"ggb3",
	{ hangHeavy: true, hangLight: false, C_4: [92.5, -12], B_4: [84, -5.75] },
	ggb6
);
const id4PrevGGB1 = getPrevGGB(
	id4,
	"ggb4",
	{ J_4: [99, -5], K_4: [102, -5], L_4: [105, -5], M_4: [96, -5] },
	ggb6
);
const id5PrevGGB1 = getPrevGGB(
	id5,
	"ggb5",
	{ T_4: [142, -6], U_4: [156, -6], W_4: [161, -6.25], B_5: [150, -6] },
	ggb6
);

/**
 * STEP 4: use data from your previous GGB in your code
 */

//sets initial conditions
setUpSlide1();
setUpSlide2();
setUpSlide3();
setUpSlide4();
setUpSlide5();

buttonGroup1.on("click:1", () => {
	rollBall();
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
	reset();
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
});

//gets all data from slide 1 and sets conditions
function setUpSlide1() {
	console.log(
		id1PrevGGB1.innerData["hangRight"],
		id1PrevGGB1.innerData["hangLeft"]
	);
	if (
		id1PrevGGB1.innerData["hangRight"] == true &&
		id1PrevGGB1.innerData["hangLeft"] == false
	) {
		ggb6.instance.setCoords("BalanceWeightPointHeavy", 9, -3);
		ggb6.instance.setVisible("balanceWeightHeavy", true);
		ggb6.instance.setVisible("balanceWeightLight", false);
		ggb6.instance.setCoords("S", 1, -1);
	}
	if (
		id1PrevGGB1.innerData["hangRight"] == false &&
		id1PrevGGB1.innerData["hangLeft"] == true
	) {
		ggb6.instance.setCoords("BalanceWeightPointLight", 9, -1);
		ggb6.instance.setVisible("balanceWeightLight", true);
		ggb6.instance.setVisible("balanceWeightHeavy", false);
		ggb6.instance.setCoords("S", 1, -3);
	}
	if (
		id1PrevGGB1.innerData["hangRight"] == false &&
		id1PrevGGB1.innerData["hangLeft"] == false
	) {
		ggb6.instance.setVisible("balanceWeightLight", true);
		ggb6.instance.setVisible("balanceWeightHeavy", true);
		ggb6.instance.setCoords("BalanceWeightPointHeavy", 4.5, -11);
		ggb6.instance.setCoords("BalanceWeightPointLight", 8.5, -11);
		ggb6.instance.setCoords("S", 1, -2);
	}
}

//gets all data from slide 2 and sets conditions
function setUpSlide2() {
	ggb6.instance.setCoords(
		"LargePistonHandle",
		id2PrevGGB1.innerData["L"][0],
		id2PrevGGB1.innerData["L"][1]
	);
	ggb6.instance.setCoords(
		"MediumPistonHandle",
		id2PrevGGB1.innerData["C"][0],
		id2PrevGGB1.innerData["C"][1]
	);
	ggb6.instance.setCoords(
		"SmallPistonHandle",
		id2PrevGGB1.innerData["G"][0],
		id2PrevGGB1.innerData["G"][1]
	);
}

//gets all data from slide 3 and sets conditions
function setUpSlide3() {
	ggb6.instance.setVisible("B_4", true);
	ggb6.instance.setVisible("C_4", true);
	if (
		id3PrevGGB1.innerData["hangHeavy"] == true &&
		id3PrevGGB1.innerData["hangLight"] == false
	) {
		ggb6.instance.setCoords("B_4", 83.75, -8.75);
		ggb6.instance.setCoords("C_4", 91, -10);
		ggb6.instance.setCoords("T", 76, -4.75);
		ggb6.instance.setCoords("U", 84, -6.5);
	}
	if (
		id3PrevGGB1.innerData["hangHeavy"] == false &&
		id3PrevGGB1.innerData["hangLight"] == true
	) {
		ggb6.instance.setCoords("B_4", 87, -10);
		ggb6.instance.setCoords("C_4", 83.75, -8.25);
		ggb6.instance.setCoords("T", 76, -5.5);
		ggb6.instance.setCoords("U", 84, -6);
	}
	if (
		id3PrevGGB1.innerData["hangHeavy"] == false &&
		id3PrevGGB1.innerData["hangLight"] == false
	) {
		ggb6.instance.setCoords("B_4", 87, -10);
		ggb6.instance.setCoords("C_4", 91, -10);
		ggb6.instance.setCoords("T", 76, -5.75);
		ggb6.instance.setCoords("U", 84, -5.75);
	}
	/*ggb6.instance.setCoords(
		"C_4",
		id3PrevGGB1.innerData["C_4"][0],
		id3PrevGGB1.innerData["C_4"][1]
	);
	ggb6.instance.setCoords(
		"B_4",
		id3PrevGGB1.innerData["B_4"][0],
		id3PrevGGB1.innerData["B_4"][1]
	);*/
}

//gets all data from slide 4 and sets conditions
function setUpSlide4() {
	ggb6.instance.setCoords(
		"J_4",
		id4PrevGGB1.innerData["J_4"][0] - 3.25,
		id4PrevGGB1.innerData["J_4"][1]
	);
	ggb6.instance.setCoords(
		"K_4",
		id4PrevGGB1.innerData["K_4"][0] - 3.25,
		id4PrevGGB1.innerData["K_4"][1]
	);
	ggb6.instance.setCoords(
		"L_4",
		id4PrevGGB1.innerData["L_4"][0] - 3.25,
		id4PrevGGB1.innerData["L_4"][1]
	);
	ggb6.instance.setCoords(
		"M_4",
		id4PrevGGB1.innerData["M_4"][0] - 3.25,
		id4PrevGGB1.innerData["M_4"][1]
	);
}

//gets all data from slide 5 and sets conditions
function setUpSlide5() {
	ggb6.instance.setCoords(
		"T_4",
		id5PrevGGB1.innerData["T_4"][0],
		id5PrevGGB1.innerData["T_4"][1]
	);
	ggb6.instance.setCoords(
		"U_4",
		id5PrevGGB1.innerData["U_4"][0],
		id5PrevGGB1.innerData["U_4"][1]
	);
	ggb6.instance.setCoords(
		"W_4",
		id5PrevGGB1.innerData["W_4"][0],
		id5PrevGGB1.innerData["W_4"][1]
	);
	ggb6.instance.setCoords(
		"B_5",
		id5PrevGGB1.innerData["B_5"][0],
		id5PrevGGB1.innerData["B_5"][1]
	);
}

//sets all animation flags and starts time
function rollBall() {
	ggb6.instance.setValue("time", 0);
	ggb6.instance.setAnimating("time", true);
	ggb6.instance.setAnimating("δ", false);
	ggb6.instance.setAnimating("time_2", false);
	ggb6.instance.setAnimating("time_3", false);
	ggb6.instance.setAnimating("α", false);
	ggb6.instance.setAnimating("Z_3", false);
	ggb6.instance.setAnimating("lean1", false);
	ggb6.instance.setAnimating("lean2", false);
	ggb6.instance.setAnimating("lean3", false);
	ggb6.instance.setAnimating("lean4", false);
	ggb6.instance.startAnimation();
}

//resets everything back to starting positions
function reset() {
	ggb6.instance.stopAnimation();
	ggb6.instance.setVisible("T_5", true);
	ggb6.instance.setAnimating("δ", false);
	ggb6.instance.setAnimating("time_2", false);
	ggb6.instance.setAnimating("time_3", false);
	ggb6.instance.setAnimating("α", false);
	ggb6.instance.setAnimating("Z_3", false);
	ggb6.instance.setAnimating("lean1", false);
	ggb6.instance.setAnimating("lean2", false);
	ggb6.instance.setAnimating("lean3", false);
	ggb6.instance.setAnimating("lean4", false);
	ggb6.instance.setValue("time", 0);
	ggb6.instance.setVisible("eq1", false); //flattened ball
	ggb6.instance.setValue("length", 0);
	ggb6.instance.setValue("length2", 0);
	ggb6.instance.setValue("length3", 0);
	ggb6.instance.setValue("time_2", 0);
	ggb6.instance.setVisible("RedBall_2", false);
	ggb6.instance.setVisible("GreenBall_2", false);
	ggb6.instance.setVisible("GreenBall_3", true);
	ggb6.instance.setValue("α", 0);
	ggb6.instance.setAnimating("δ", false);
	ggb6.instance.setValue("δ", 0);
	ggb6.instance.setValue("γ", 0);
	ggb6.instance.setValue("lean1", 0);
	ggb6.instance.setValue("lean2", 0);
	ggb6.instance.setValue("lean3", 0);
	ggb6.instance.setValue("lean4", 0);
	ggb6.instance.setValue("time_3", 0);
	ggb6.instance.setValue("time_4", 0);
	ggb6.instance.setValue("time_5", 0);
	ggb6.instance.setValue("time_6", 0);
	ggb6.instance.setValue("Fire1", 0);
	ggb6.instance.setCoords("Z_3", 80, -10);
	ggb6.instance.setCoords("B_4", 87, -10);
	ggb6.instance.setCoords("C_4", 91, -10);
	ggb6.instance.setCoords("H_5", 107.75, -5.25);
	ggb6.instance.setCoords("R_4", 80, 0);
	ggb6.instance.setCoords("T_5", 124.43, -0.25);
	ggb6.instance.setCoords("U_5", 126, 1.75);
	ggb6.instance.setValue("β", -0.75);
	ggb6.instance.setValue("xMin", -10);
	ggb6.instance.setValue("xMax", 60);
	ggb6.instance.setValue("yMin", -14);
	ggb6.instance.setValue("yMax", 9);
	ggb6.instance.setAnimating("biggestLilyPad", false);
	ggb6.instance.setAnimating("bigMediumLilyPad", false);
	ggb6.instance.setAnimating("smallMediumLilyPad", false);
	ggb6.instance.setAnimating("smallestLilyPad", false);
	ggb6.instance.setValue("biggestLilyPad", 0);
	ggb6.instance.setValue("bigMediumLilyPad", 0);
	ggb6.instance.setValue("smallMediumLilyPad", 0);
	ggb6.instance.setValue("smallestLilyPad", 0);

	setUpSlide1();
	setUpSlide2();
	setUpSlide3();
	setUpSlide4();
	setUpSlide5();
}

//rolls the ball down the balance to the springs
function section1() {
	console.log("section1");
	if (
		ggb6.instance.getValue("time") == 1 &&
		ggb6.instance.getXcoord("BalanceWeightPointLight") == 9
	) {
		ggb6.instance.setVisible("eq1", true);
		ggb6.instance.setVisible("RedBall", false);
	} else {
		ggb6.instance.setVisible("eq1", false);
		ggb6.instance.setVisible("RedBall", true);
	}
	if (
		ggb6.instance.getValue("time") == 1 &&
		ggb6.instance.getXcoord("BalanceWeightPointHeavy") == 9 &&
		ggb6.instance.getYcoord("BalanceWeightPointHeavy") == -3 &&
		ggb6.instance.getYcoord("MediumPistonHandle") == -11 &&
		ggb6.instance.getYcoord("SmallPistonHandle") == -11 &&
		ggb6.instance.getYcoord("LargePistonHandle") == -11
	) {
		ggb6.instance.setVisible("RedBall", false);
		ggb6.instance.setVisible("RedBall_2", true);
		ggb6.instance.setAnimating("time_2", true);
		ggb6.instance.startAnimation();
	}
	if (
		ggb6.instance.getValue("time") == 1 &&
		(ggb6.instance.getYcoord("MediumPistonHandle") != -11 ||
			ggb6.instance.getYcoord("SmallPistonHandle") != -11 ||
			ggb6.instance.getYcoord("LargePistonHandle") != -11)
	) {
		ggb6.instance.setVisible("RedBall", true);
		ggb6.instance.stopAnimation();
	}
}

//rolls ball across springs and shoots last spring, moves view
function section2() {
	console.log("section2");
	if (
		ggb6.instance.getValue("Distance(H_1, RedBall_2)") < 0.4 &&
		ggb6.instance.getXcoord("LargePistonHandle") == 25 &&
		ggb6.instance.getYcoord("MediumPistonHandle") == -11 &&
		ggb6.instance.getYcoord("SmallPistonHandle") == -11 &&
		ggb6.instance.getYcoord("LargePistonHandle") == -11
	) {
		ggb6.instance.setAnimating("length2", true);
		ggb6.instance.setAnimating("length", false);
		ggb6.instance.setAnimating("length3", false);
	}
	if (
		ggb6.instance.getValue("Distance(K_1, RedBall_2)") < 0.4 &&
		ggb6.instance.getXcoord("MediumPistonHandle") == 25 &&
		ggb6.instance.getYcoord("MediumPistonHandle") == -11 &&
		ggb6.instance.getYcoord("SmallPistonHandle") == -11 &&
		ggb6.instance.getYcoord("LargePistonHandle") == -11
	) {
		ggb6.instance.setAnimating("length2", false);
		ggb6.instance.setAnimating("length", true);
		ggb6.instance.setAnimating("length3", false);
	}
	if (
		ggb6.instance.getValue("Distance(J_1, RedBall_2)") < 0.4 &&
		ggb6.instance.getXcoord("SmallPistonHandle") == 25 &&
		ggb6.instance.getYcoord("MediumPistonHandle") == -11 &&
		ggb6.instance.getYcoord("SmallPistonHandle") == -11 &&
		ggb6.instance.getYcoord("LargePistonHandle") == -11
	) {
		ggb6.instance.setAnimating("length2", false);
		ggb6.instance.setAnimating("length", false);
		ggb6.instance.setAnimating("length3", true);
	}
	ggb6.instance.startAnimation();
	if (ggb6.instance.getXcoord("RedBall_2") >= 50.8) {
		ggb6.instance.setValue("xMax", 120);
		ggb6.instance.setValue("xMin", 50);
		ggb6.instance.setValue("yMax", 9);
		ggb6.instance.setValue("yMin", -14);
		ggb6.instance.setAnimating("δ", true);
		ggb6.instance.startAnimation();
	}
}

//called when ferris wheel hits cup
function pass() {
	if (Math.abs(ggb6.instance.getValue("δ") - 3.36) < 0.2) {
		ggb6.instance.setAnimating("time_3", true);
		ggb6.instance.setAnimating("α", true);
		ggb6.instance.startAnimation();
	}
}

//tilts scales when green ball comes close while time_3 is running
function section3() {
	console.log("section3");
	/*if (ggb6.instance.getValue("Distance(GreenBall_3, (76, -9))") < 1) {
		ggb6.instance.setCoords("T", 76, -6.75);
		ggb6.instance.setCoords("U", 84, -4.75);
		ggb6.instance.setVisible("text2", true);
	} else {
		ggb6.instance.setCoords("T", 76, -5.75);
		ggb6.instance.setCoords("U", 84, -5.75);
		ggb6.instance.setVisible("text2", false);
	}*/
	if (ggb6.instance.getValue("time_3") == 1) {
		ggb6.instance.setVisible("GreenBall_3", false);
		ggb6.instance.setVisible("GreenBall_2", true);
		weighOptions();
	}
}

//if correct option is in correct spot, make flag green, otherwise, make red.  Run it up the flagpole.
function weighOptions() {
	console.log("weighOptions");
	//incorrect
	if (
		id3PrevGGB1.innerData["hangHeavy"] == false &&
		id3PrevGGB1.innerData["hangLight"] == true
	) {
		ggb6.instance.setColor("poly5", 217, 61, 31);
		ggb6.instance.setCoords("T", 76, -6.25);
		ggb6.instance.setCoords("U", 84, -5.25);
		ggb6.instance.setCoords("C_4", 83.75, -7.25);
		ggb6.instance.setCoords("GreenBall_2", 76.25, -8.75);
	}
	//correct
	if (
		id3PrevGGB1.innerData["hangHeavy"] == true &&
		id3PrevGGB1.innerData["hangLight"] == false
	) {
		ggb6.instance.setColor("poly5", 0, 129, 57);
		ggb6.instance.setCoords("T", 76, -5.75);
		ggb6.instance.setCoords("U", 84, -5.75);
		ggb6.instance.setCoords("B_4", 83.75, -8);
		ggb6.instance.setCoords("GreenBall_2", 76.25, -8.25);
		ggb6.instance.setAnimating("Z_3", true);
		ggb6.instance.setColor("poly5", 237, 178, 32);
	}
	ggb6.instance.startAnimation();
}

//shoots diamond off flagpole when flag gets close if dominoes are in the right place
function pew() {
	if (
		ggb6.instance.getValue("Distance(Z_3,R_4)") < 1 &&
		ggb6.instance.getYcoord("J_4") == -5 &&
		ggb6.instance.getYcoord("M_4") == -5 &&
		ggb6.instance.getYcoord("L_4") == -5 &&
		ggb6.instance.getYcoord("K_4") == -5
	) {
		ggb6.instance.stopAnimation();
		ggb6.instance.setAnimating("Z_3", false);
		ggb6.instance.setAnimating("time_4", true);
	}
	ggb6.instance.startAnimation();
}

//diamond lands on dominoes, start leaning
function thump() {
	if (
		ggb6.instance.getValue("Distance(R_4, G_4)") < 0.4 &&
		ggb6.instance.getYcoord("J_4") == -5 &&
		ggb6.instance.getYcoord("M_4") == -5 &&
		ggb6.instance.getYcoord("L_4") == -5 &&
		ggb6.instance.getYcoord("K_4") == -5
	) {
		ggb6.instance.setAnimating("lean1", true);
		ggb6.instance.startAnimation();
	}
}
////////////////////////////write so they lean in order///////////////////
//lean 3.68
function dominoes() {
	if (Math.abs(ggb6.instance.getValue("lean1") - 2.8) < 0.3) {
		ggb6.instance.setAnimating("lean2", true);
		ggb6.instance.startAnimation();
	}
}
//lean 3.86
function dominoes2() {
	if (Math.abs(ggb6.instance.getValue("lean2") - 2.8) < 0.3) {
		ggb6.instance.setAnimating("lean3", true);
		ggb6.instance.startAnimation();
	}
}
//lean 3.88
function dominoes3() {
	if (Math.abs(ggb6.instance.getValue("lean3") - 2.8) < 0.3) {
		ggb6.instance.setAnimating("lean4", true);
		ggb6.instance.startAnimation();
	}
}

//hits hammer
function kickoff() {
	if (Math.abs(ggb6.instance.getValue("lean4") - 1.41) < 0.3) {
		ggb6.instance.setValue("xMin", 100);
		ggb6.instance.setValue("xMax", 170);
		ggb6.instance.setAnimating("β", true);
		ggb6.instance.startAnimation();
	}
}

//kicks off car
function zoom() {
	if (ggb6.instance.getValue("β") == 0.5) {
		ggb6.instance.setAnimating("H_5", true);
		ggb6.instance.startAnimation();
	}
}

//spins car
function sooperDooper() {
	if (
		Math.abs(
			ggb6.instance.getXcoord("H_5") -
				ggb6.instance.getXcoord("LoopDeCenter") +
				2
		) < 0.1 &&
		ggb6.instance.getValue("γ") < 6.28
	) {
		ggb6.instance.stopAnimation();
		ggb6.instance.setAnimating("H_5", false);
		ggb6.instance.setAnimating("γ", true);
		ggb6.instance.startAnimation();
	}
}

//stops the loop and sends car straight - not firing
function weeee() {
	console.log(ggb6.instance.getValue("γ"));
	if (ggb6.instance.getValue("γ") >= 6.28) {
		ggb6.instance.setAnimating("γ", false);
		zoom();
	}
}

//drops fly trap
function drop() {
	if (
		Math.abs(
			ggb6.instance.getXcoord("I_5") - ggb6.instance.getXcoord("D_5")
		) < 0.2
	) {
		ggb6.instance.setAnimating("U_5", true);
		ggb6.instance.setAnimating("time_6", true);
		ggb6.instance.startAnimation();
	}
}

//////////////////write this to open in order ///////////////////
//sends frog leaping
function boing() {
	if (
		Math.abs(
			ggb6.instance.getYcoord("U_5") - ggb6.instance.getYcoord("D_5")
		) < 0.2
	) {
		ggb6.instance.setVisible("T_4", false);
		ggb6.instance.setVisible("U_4", false);
		ggb6.instance.setVisible("W_4", false);
		ggb6.instance.setVisible("B_5", false);
		ggb6.instance.setVisible("v", false);
		ggb6.instance.setVisible("w", false);
		ggb6.instance.setVisible("u_1", false);
		ggb6.instance.setVisible("v_1", false);
		ggb6.instance.setAnimating("biggestLilyPad", true);
		ggb6.instance.setAnimating("bigMediumLilyPad", true);
		ggb6.instance.setAnimating("smallMediumLilyPad", true);
		ggb6.instance.setAnimating("smallestLilyPad", true);
		ggb6.instance.setAnimating("time_5", true);
		ggb6.instance.startAnimation();
	}
}

//sets off fireworks
function kaboom() {
	if (ggb6.instance.getXcoord("N_5") > 175) {
		ggb6.instance.setValue("xMin", 170);
		ggb6.instance.setValue("xMax", 240);
	}
	if (ggb6.instance.getValue("time_5") > 180) {
		ggb6.instance.setVisible("T_5", false);
		ggb6.instance.setAnimating("Fire1", true);
		ggb6.instance.startAnimation();
	}
}

/**
 * STEP 5: copy the getPrevGGB function, paste it into your code
 * (putting it at the bottom keeps it out of the way as much as possible)
 */

function getPrevGGB(
	slideID,
	compName = "ggb1",
	innerData,
	storageComp = { data: false }
) {
	// find slide num of source
	const slideNum = ((slideId) => {
		if (
			typeof controls == "undefined" ||
			!controls.slidesNavigationData?.length
		) {
			return "missing slide!";
		}
		let allIds = controls.slidesNavigationData.map(
			({ slideId }) => slideId
		);
		return allIds.indexOf(slideId) + 1;
	})(slideID);
	// establish default in same data structure as original
	let defGGB = {
		data: {},
		innerData,
	};
	// get previous data
	let prevGGB = getFromSlide(slideID, compName, false) || false;
	// check previous data
	const hasData = !prevGGB
		? false
		: !Object.keys(prevGGB).includes("innerData")
		? false
		: !Object.keys(prevGGB.innerData).length
		? false
		: true;
	let returnGGB = hasData ? prevGGB : defGGB;
	// fill in other useful data
	returnGGB.data.goBackString = `$\\color{A0A0A0}\\text{\[no input yet on slide ${slideNum}\]}$`;
	returnGGB.data.hasData = hasData;
	returnGGB.data.slideNum = slideNum;
	// set text value
	returnGGB.data.flagText = hasData ? "" : returnGGB.data.goBackString;
	// record if there was already data so it doesn't wrongfully overwritten
	// make sure there is a storageComp and that it has a data property
	if (storageComp.data) {
		// maintain a record of whether we've had data
		const hadData =
			hasData ||
			storageComp.data[`oldData${slideID + compName}`]?.data?.hadData ||
			false;
		if (hasData) {
			// if we have new data, (over)write to save it
			returnGGB.data.hadData = hadData;
			// create a dummy object to pass to updateData
			const newData = {};
			newData[`oldData${slideID + compName}`] = { ...returnGGB };
			storageComp.updateData(newData);
		} else if (
			storageComp.data[`oldData${slideID + compName}`]?.data?.hasData
		) {
			// if we don't have new data but there is oldData, grab it
			returnGGB = { ...storageComp.data[`oldData${slideID + compName}`] };
		}
	}
	return { ...returnGGB };
}
let everything = ggb6.instance.getAllObjectNames();
for (let i = 0, L = everything.length; i < L; i++) {
	ggb6.instance.setFixed(everything[i], false, false);
}
