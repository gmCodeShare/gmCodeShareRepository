const {
  ggb1,
  feedback1,
  cc_submit_c0c6ab2032bc_textbox1: submitText1,
  cc_submit_c0c6ab2032bc_input1: submitInput1,
  cc_submit_c0c6ab2032bc_button1: submitButton1,
  separator1,
  cc_sharewithclass_ad5c2893c82b_textbox1: shareText1,
  cc_sharewithclass_ad5c2893c82b_input1: shareInput1,
  cc_sharewithclass_ad5c2893c82b_button1: shareButton1,
  cc_sharewithclass_ad5c2893c82b_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

if (!ggb1.data.init) {
  ggb1.instance.setAnimating('time', false);
  ggb1.instance.setValue('time', 0);
  ggb1.instance.setAnimating('time', true);
  ggb1.instance.startAnimation();
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });

  ggb1.updateData({ init: true });
}

submitButton1.on('click', () => {
  show();
});

function show() {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
}

/*
{"compTotals":{"geogebra":1,"textbox":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"6 M2 TF L24 - Living on Mars","teacherView":false,"layout":"two col"}
*/
