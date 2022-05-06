const {
  ggb1,
  feedback1,
  text1,
  radio1,
  separator1,
  buttonGroup1,
  text2,
  radio2,
  cc_sharewithclass_2d8faa22d5a2_textbox1: shareText1,
  cc_sharewithclass_2d8faa22d5a2_input1: shareInput1,
  cc_sharewithclass_2d8faa22d5a2_button1: shareButton1,
  cc_sharewithclass_2d8faa22d5a2_studentanswers1: shareAnswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    buttonGroup1.updateData({ visible: false });
    text2.updateData({ visible: false });
    radio2.updateData({ visible: false });
    shareText1.updateData({ visible: false });
    shareInput1.updateData({ visible: false });
    shareButton1.updateData({ visible: false });
    shareAnswers1.updateData({ visible: false });
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.instance.setValue("time", 0);
    ggb1.updateData({ init: true });
  }
}

autorun(() => {
  if (radio1.data.selected) {
    buttonGroup1.updateData({ visible: true });
  }
});

buttonGroup1.on("click:1", () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  ggb1.instance.setAnimating("time", true);
  ggb1.instance.startAnimation();
  // radio1.updateData({ visible: false });
});

buttonGroup1.on("click:2", () => {
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
  ggb1.instance.stopAnimation();
  ggb1.instance.setAnimating("time", false);
  ggb1.instance.setValue("time", 0);
});

autorun(() => {
  let time = ggb1.innerData["time"];
  if (time > 0 && time < 1) {
    buttonGroup1.updateData({ visible: true });
  }
  if (time == 1) {
    text2.updateData({ visible: true });
    radio2.updateData({ visible: true });
    buttonGroup1.updateSingleButton({ disabled: false }, 2);
  }
});

autorun(() => {
  var optionArray = ["True because ", "False because "];
  if (radio2.data.selected) {
    shareText1.updateData({ visible: true });
    shareInput1.updateData({ visible: true });
    shareButton1.updateData({ visible: true });
    shareAnswers1.updateData({ visible: true });
    /* if (radio2.data.selected != radio2.data.last) {
      let chosen = radio2.data.options[parseInt(radio2.data.selected)].label;
      let sentStart = chosen.replace('.', ',');
      //shareInput1.updateData({ text: optionArray[radio2.data.selected] });
      radio2.updateData({ last: radio2.data.selected });
    }*/
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":3,"radiogroup":2,"separator":1,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M2 TD L18 - Proving the Converse of the Pythagorean Theorem","teacherView":false,"layout":"two col"}
*/
