const {
  ggb1,
  separator1,
  buttonGroup1,
  feedback1,
  cc_sharewithclass_d7ea66cbde85_textbox1,
  cc_sharewithclass_d7ea66cbde85_input1,
  cc_sharewithclass_d7ea66cbde85_button1,
  cc_sharewithclass_d7ea66cbde85_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

onInit();
function onInit() {
  if (!ggb1.data.init) {
    ggb1.instance.setVisible('q', false);
    ggb1.instance.setVisible('angle', false);
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
    ggb1.updateData({ init: true });
  }
}

buttonGroup1.on('click:1', () => {
  ggb1.instance.setVisible('q', true);
  ggb1.instance.setVisible('angle', true);
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setVisible('q', false);
  ggb1.instance.setVisible('angle', false);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  buttonGroup1.updateSingleButton({ disabled: true }, 2);
});

/*
{"compTotals":{"geogebra":1,"separator":1,"buttongroup":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M5 TC L09 - Properties of Solids","teacherView":false,"layout":"two col"}
*/
