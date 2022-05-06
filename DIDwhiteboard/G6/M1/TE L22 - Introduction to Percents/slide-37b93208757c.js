const {
  text1,
  ggb1,
  feedback1,
  cc_submit_f3e0e2558b60_textbox1: submitText1,
  cc_submit_f3e0e2558b60_input1: submitInput1,
  cc_submit_f3e0e2558b60_button1: submitButton1,
  separator1,
  cc_sharewithclass_f7d81b3929e5_textbox1: shareText1,
  cc_sharewithclass_f7d81b3929e5_input1: shareInput1,
  cc_sharewithclass_f7d81b3929e5_button1: shareButton1,
  cc_sharewithclass_f7d81b3929e5_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);
ggb1.instance.registerObjectUpdateListener('numberOfPennies', update);

slide.on('firstload', () => {
  // set initial states
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

function update() {
  let num = ggb1.instance.getValue('numberOfPennies');
  text1.updateData({ text: `Number of Pennies: $${num}$` });
}

/*
{"compTotals":{"textbox":2,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M1 TE L22 - Introduction to Percents","teacherView":false,"layout":"two col"}
*/
