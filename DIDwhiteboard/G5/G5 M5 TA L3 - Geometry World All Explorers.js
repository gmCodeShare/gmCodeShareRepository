const { ggb1, buttonGroup1, buttonGroup2 } = components;

//set explorer type here
//ggb1.instance.setValue("WhateverBool",true);

//disable all buttons except Animate
buttonGroup2.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);

autorun(() => {
	//monitor shape booleans
	let isParallelogram = ggb1.innerData[`IsPgram`];
	let isTrapezoid = ggb1.innerData[`IsTrap`];
	let ParaLock = ggb1.innerData[`PgramLock`];
	let TrapLock = ggb1.innerData[`TrapLock`];

//set button states based on booleans
	if (isTrapezoid && !ParaLock && !TrapLock) {
		buttonGroup1.updateSingleButton({ disabled: false }, 1);
	}

	if (!isTrapezoid || ParaLock || TrapLock) {
		buttonGroup1.updateSingleButton({ disabled: true }, 1);
	}

	if (isParallelogram && !TrapLock && !ParaLock) {
		buttonGroup1.updateSingleButton({ disabled: false }, 2);
	}

	if (!isParallelogram || TrapLock || ParaLock) {
		buttonGroup1.updateSingleButton({ disabled: true }, 2);
	}
});

//lock into trapezoid state
buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(AlwaysTrap)");
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
//lock into paralellogram state
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(AlwaysPara)");
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
//unlock points
buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(UnlockPara)");
	ggb1.instance.evalCommand("RunClickScript(UnlockTrap)");
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

//animates sides/diagonals/angles to the left
buttonGroup2.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(Animate)");
	buttonGroup2.updateSingleButton({ disabled: true }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
});
//animates sides/diagonals/angles back to quad
buttonGroup2.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(FlyBack)");
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
});
