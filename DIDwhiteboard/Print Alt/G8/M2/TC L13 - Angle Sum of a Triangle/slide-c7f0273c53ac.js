const { buttongroup1, ggb1, separator5 } = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttongroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttongroup1.on("click:1", () => {
  alert("button1 clicked!");
  ggb1.instance.evalCommand("RunClickScript(split)");
  buttongroup1.updateSingleButton({ disabled: true }, 1);
  buttongroup1.updateSingleButton({ disabled: false }, 2);
});

buttongroup1.on("click:2", () => {
  alert("button2 clicked!");
  ggb1.instance.evalCommand("RunClickScript(button1)");
  buttongroup1.updateSingleButton({ disabled: false }, 1);
  buttongroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"buttongroup":1,"geogebra":1,"separator":1},"stage":"Launch","lessonInfo":"8 M2 TC L13 - Print Alt: Angle Sum of a Triangle","teacherView":false,"layout":"one col"}
*/
