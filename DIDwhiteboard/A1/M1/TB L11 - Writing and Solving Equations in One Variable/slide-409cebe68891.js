const {
  text1,
  ggb1,
  feedback1,
  text2,
  cc_submit_edb04424cad4_textbox1: submitText1,
  cc_submit_edb04424cad4_input1: submitInput1,
  cc_submit_edb04424cad4_button1: submitButton1,
  separator2,
  cc_sharewithclass_16ecb474a61c_textbox1: shareText1,
  cc_sharewithclass_16ecb474a61c_input1: shareInput1,
  cc_sharewithclass_16ecb474a61c_button1: shareButton1,
  cc_sharewithclass_16ecb474a61c_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
  shareButton1.updateData({ visible: false });
});

submitButton1.on('click', () => {
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
});

shareButton1.on('click', () => {
  ggb1.instance.setValue('show10by10blank', false);
  ggb1.instance.setValue('show10by10filled', true);
  ggb1.instance.evalCommand('status=status2');
  ggb1.instance.evalCommand('ReadText(status2)');
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"submit":1,"separator":1,"sharewithclass":1},"stage":"Launch","lessonInfo":"9 M1 TB L11 - Writing and Solving Equations in One Variable","teacherView":false,"layout":"T layout"}
*/
