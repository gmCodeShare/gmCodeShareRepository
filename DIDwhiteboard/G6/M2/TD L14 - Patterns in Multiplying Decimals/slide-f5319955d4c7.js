const {
  ggb1,
  feedback1,
  buttonGroup1,
  cc_sharewithclass_36e7d2e2a946_textbox1,
  cc_sharewithclass_36e7d2e2a946_input1,
  cc_sharewithclass_36e7d2e2a946_button1,
  cc_sharewithclass_36e7d2e2a946_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  buttonGroup1.updateSingleButton({ disabled: true }, 1);
});

buttonGroup1.on('click:1', () => {
  ggb1.instance.setValue('k', ggb1.instance.getValue('k') + 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 2);
  if (ggb1.instance.getValue('k') == 4) {
    buttonGroup1.updateSingleButton({ disabled: true }, 1);
  }
});

buttonGroup1.on('click:2', () => {
  ggb1.instance.setValue('k', ggb1.instance.getValue('k') - 1);
  buttonGroup1.updateSingleButton({ disabled: false }, 1);
  if (ggb1.instance.getValue('k') == 1) {
    buttonGroup1.updateSingleButton({ disabled: true }, 2);
  }
});

/*
{"compTotals":{"geogebra":1,"textbox":1,"buttongroup":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M2 TD L14 - Patterns in Multiplying Decimals","teacherView":false,"layout":"two col"}
*/
