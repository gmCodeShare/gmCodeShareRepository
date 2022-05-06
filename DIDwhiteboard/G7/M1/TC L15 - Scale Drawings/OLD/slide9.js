const { ggb1, text1, select1 } = components;

ggb1.instance.setErrorDialogsActive(false);

components.cc_sharewithclass_27a64de001ed_button1.updateData({
  align: "right",
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    // set initial states
    ggb1.instance.setValue("picSet", 2);
    ggb1.instance.setValue("picWidth1", 5);
    ggb1.instance.setValue("scaleFactor", 0.5);
    ggb1.instance.setValue("clickCount", -1);
    ggb1.instance.setValue("time", 1);
    // create/update a dummy variable to keep track of whether the screen has initialized
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (select1.data.selected == "") {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: false,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: false,
    });
  } else {
    components.cc_sharewithclass_27a64de001ed_textbox1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_input1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_button1.updateData({
      visible: true,
    });
    components.cc_sharewithclass_27a64de001ed_studentanswers1.updateData({
      visible: true,
    });
  }
});
