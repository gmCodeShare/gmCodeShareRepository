const {
  ggb1,
  buttonGroup1,
  button1,
  select1,
  cc_submit_6003bec2b67f_textbox1: submitText1,
  cc_submit_6003bec2b67f_input1: submitInput1,
  cc_submit_6003bec2b67f_button1: submitButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setValue("showSliders", true);
    ggb1.instance.setValue("state5", true);
    ggb1.instance.showToolBar(false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    buttonGroup1.updateData({ visible: false });
    button1.updateData({ visible: false });
    submitText1.updateData({ visible: false });
    submitInput1.updateData({ visible: false });
    submitButton1.updateData({ visible: false, align: "right" });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected) {
    button1.updateData({ visible: true });
  }
});

button1.on("click", () => {
  button1.updateData({ disabled: true });
  buttonGroup1.updateData({ visible: true });
  submitText1.updateData({ visible: true });
  submitInput1.updateData({ visible: true });
  submitButton1.updateData({ visible: true, align: "right" });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.evalCommand("RunClickScript(opposite)");
});

buttonGroup1.on("click:1", () => {
  ggb1.instance.evalCommand("RunClickScript(opposite)");
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on("click:2", () => {
  ggb1.instance.setValue("numOfGroups", 2);
  ggb1.instance.setValue("sizeOfGroup", 4);
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("sliderTime", 0);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
});
