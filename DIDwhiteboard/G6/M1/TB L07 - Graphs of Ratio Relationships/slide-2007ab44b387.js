const {
  ggb1,
  cc_submit_acd7af7dd292_textbox1: submitText1,
  cc_submit_acd7af7dd292_input1: submitInput1,
  cc_submit_acd7af7dd292_button1: submitButton1,
  cc_sharewithclass_8497d0b5232b_textbox1: shareText1,
  cc_sharewithclass_8497d0b5232b_input1: shareInput1,
  cc_sharewithclass_8497d0b5232b_button1: shareButton1,
  cc_sharewithclass_8497d0b5232b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  ggb1.instance.setAxisLabels(1, '$\\mathit{x}$', '$\\mathit{y}$');
});

submitButton1.on('click', () => {
  let pattern = /\\left\(\d+,\d+\\right\)/;
  if (pattern.test(submitInput1.data.text)) {
    ggb1.instance.evalLaTeX(`CheckPoint1=${submitInput1.data.text}`);
    ggb1.instance.setColor('CheckPoint1', 0, 0, 0);
    ggb1.instance.setPointStyle('CheckPoint1', 10);
    ggb1.instance.setFixed('CheckPoint1', true, false);
    ggb1.instance.setPointSize('CheckPoint1', 4);
    ggb1.instance.setLayer('CheckPoint1', 7);
    ggb1.instance.setVisible('CheckPoint1', true);
  }
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

/*
{"compTotals":{"geogebra":1,"submit":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"6 M1 TB L07 - Graphs of Ratio Relationships","teacherView":false,"layout":"two col"}
*/
