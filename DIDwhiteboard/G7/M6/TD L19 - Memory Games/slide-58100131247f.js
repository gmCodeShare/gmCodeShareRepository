const {
  ggb1,
  feedback1,
  text1,
  buttonGroup1,
  separator2,
  cc_sharewithclass_fe87942ee900_textbox1: text2,
  cc_sharewithclass_fe87942ee900_input1: input1,
  cc_sharewithclass_fe87942ee900_button1: button2,
  cc_sharewithclass_fe87942ee900_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  text2.updateData({ visible: false });
  input1.updateData({ visible: false });
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  button2.updateData({ visible: false, align: "right" });
  ggb1.instance.setValue("state", 2);
  ggb1.updateData({ init: true });
}

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  text2.updateData({ visible: true });
  input1.updateData({ visible: true });
  button2.updateData({ visible: true });
  ggb1.instance.setValue("show", true);
  ggb1.instance.setFixed("DragPoint", false, false);
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("show", false);
  ggb1.instance.setFixed("DragPoint", false, true);
});

utils.RTS.on("datachange", "slide-bbe966e158c4", (register) => {
  if (!register || !register.length) {
    return;
  }
  ggb1.instance.evalCommand("l2={}");
  const lastRegister = discardOldResponses(register);
  lastRegister.forEach(({ data, info }) => {
    if (data.my20Val) {
      ggb1.instance.evalCommand(`SetValue(l2,Append(l2,${data.my20Val}))`);
    }
  });
});

function discardOldResponses(register) {
  const devices = new Set();

  return register
    .sort((a, b) => b.info.timestamp - a.info.timestamp) // Sort by timestamp (descending)
    .filter(({ info: { device } }) => {
      const deviceHasPreviousAnswer = devices.has(device); // Has device appeared before?
      devices.add(device); // Mark device as appeared

      return !deviceHasPreviousAnswer;
    });
}

/*
{"compTotals":{"geogebra":1,"textbox":2,"buttongroup":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M6 TD L19 - Memory Games","teacherView":false,"layout":"two col"}
*/
