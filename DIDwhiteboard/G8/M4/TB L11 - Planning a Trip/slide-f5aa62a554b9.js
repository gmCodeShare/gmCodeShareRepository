const {
  ggb1,
  separator1,
  button1,
  feedback1,
  cc_submit_4bae8dd6cd53_textbox1: submitText1,
  cc_submit_4bae8dd6cd53_input1: submitInput1,
  cc_submit_4bae8dd6cd53_button1: submitButton1,
  separator2,
  cc_sharewithclass_308edb860d13_textbox1: shareText1,
  cc_sharewithclass_308edb860d13_input1: shareInput1,
  cc_sharewithclass_308edb860d13_button1: shareButton1,
  cc_sharewithclass_308edb860d13_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false, align: 'right' });
  submitText1.updateData({ visible: false });
  submitInput1.updateData({ visible: false });
  submitButton1.updateData({ visible: false, align: 'right' });
});

button1.on('click', () => {
  ggb1.instance.evalCommand('RunClickScript(button1)');
  button1.updateData({ disabled: true });
});

autorun(() => {
  if (ggb1.innerData['time'] > 0.749) {
    ggb1.instance.stopAnimation();
    submitText1.updateData({ visible: true });
    submitInput1.updateData({ visible: true });
    submitButton1.updateData({ visible: true });
    button1.updateData({ disabled: false });
  }
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"separator":2,"button":1,"textbox":1,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"8 M4 TB L11 - Planning a Trip","teacherView":false,"layout":"two col"}
*/
