const {
  ggb1,
  feedback,
  cc_sharewithclass_90fa4945d858_textbox1,
  cc_sharewithclass_90fa4945d858_input1: shareInput1,
  cc_sharewithclass_90fa4945d858_button1: shareButton1,
  cc_sharewithclass_90fa4945d858_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

ggb1.instance.setSize(590, 590);
shareButton1.updateData({ align: 'right' });
ggb1.instance.setVisible('haloA', false);
ggb1.instance.setVisible('haloB', false);
ggb1.instance.setFixed('A', true, false);
ggb1.instance.setFixed('B', true, false);

ggb1.instance.setValue('addend1', '-2');
ggb1.instance.setValue('addend2', '7');
ggb1.instance.setValue('addendSum', '5');

/*
{"compTotals":{"geogebra":1,"textbox":1,"sharewithclass":1},"stage":"Learn","lessonInfo":"7 M2 TA L02 - Adding Integers","teacherView":false,"layout":"two col"}
*/
