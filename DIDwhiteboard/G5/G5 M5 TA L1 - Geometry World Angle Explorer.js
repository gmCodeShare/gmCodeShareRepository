const { ggb1, buttonGroup1, buttonGroup2 } = components;

buttonGroup2.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 1);
buttonGroup1.updateSingleButton({ disabled: true }, 2);
buttonGroup1.updateSingleButton({ disabled: true }, 3);

autorun(() => {
	let isParallelogram = ggb1.innerData[`IsPgram`];
	let isTrapezoid = ggb1.innerData[`IsTrap`];
	let ParaLock = ggb1.innerData[`PgramLock`];
	let TrapLock = ggb1.innerData[`TrapLock`];

	console.log(isTrapezoid, isParallelogram);
	console.log("TrapLock: ", TrapLock);
	console.log("PgramLock: ", ParaLock);
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

buttonGroup1.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(AlwaysTrap)");
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(AlwaysPara)");
	buttonGroup1.updateSingleButton({ disabled: false }, 3);
});
buttonGroup1.on("click:3", () => {
	ggb1.instance.evalCommand("RunClickScript(UnlockPara)");
	ggb1.instance.evalCommand("RunClickScript(UnlockTrap)");
	buttonGroup1.updateSingleButton({ disabled: true }, 3);
});

buttonGroup2.on("click:1", () => {
	ggb1.instance.evalCommand("RunClickScript(Animate)");
	buttonGroup1.updateSingleButton({ disabled: true }, 1);
	buttonGroup1.updateSingleButton({ disabled: false }, 2);
	buttonGroup2.updateSingleButton({ disabled: true }, 1);
	buttonGroup2.updateSingleButton({ disabled: false }, 2);
});

buttonGroup2.on("click:2", () => {
	ggb1.instance.evalCommand("RunClickScript(FlyBack)");
	buttonGroup1.updateSingleButton({ disabled: true }, 2);
	buttonGroup1.updateSingleButton({ disabled: false }, 1);
	buttonGroup2.updateSingleButton({ disabled: true }, 2);
	buttonGroup2.updateSingleButton({ disabled: false }, 1);
});
