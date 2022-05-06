const {
  ggb1,
  buttonGroup1,
  cc_sharewithclass_d76c14906bad_textbox1: shareText1,
  cc_sharewithclass_d76c14906bad_input1: shareInput1,
  cc_sharewithclass_d76c14906bad_button1: shareButton1,
} = components;

slide.on("firstload", () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

function runAnimation(play = false) {
  ggb1.instance.stopAnimation();
  ggb1.instance.setValue("time", 0);
  ggb1.instance.setAnimating("time", true);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (play) {
    ggb1.instance.startAnimation();
  }
}

buttonGroup1.on("click:1", () => {
  runAnimation(true);
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on("click:2", () => {
  runAnimation(false);
});
