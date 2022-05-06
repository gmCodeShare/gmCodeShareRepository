const {
  ggb1,
  text1,
  buttonGroup1,
  cc_sharewithclass_4f50d6f4b87e_textbox1: shareText1,
  cc_sharewithclass_4f50d6f4b87e_input1: shareInput1,
  cc_sharewithclass_4f50d6f4b87e_button1: shareButton1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setAxisLabels(1, "$\\mathit{x}$", "$\\mathit{y}$");

slide.on("firstload", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

onInit();
function onInit() {
  if (!ggb1.data.init) {
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  let time = ggb1.innerData["time"];
  if (time <= 20) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
  }
  if (time === 1) {
    ggb1.instance.setAnimating("time", false);
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  ggb1.instance.setValue("time", 30);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.setValue("time", 30);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
});
