const {
  text1,
  ggb1,
  separator2,
  button1,
  feedback1,
  text2,
  cc_sharewithclass_1ff8e22ed745_textbox1: shareText1,
  cc_sharewithclass_1ff8e22ed745_input1: shareInput1,
  cc_sharewithclass_1ff8e22ed745_button1: shareButton1,
  cc_sharewithclass_1ff8e22ed745_studentanswers1,
} = components;

ggb1.instance.setErrorDialogsActive(false);

slide.on('firstload', () => {
  shareButton1.updateData({ visible: false });
  shareText1.updateData({ visible: false });
  shareInput1.updateData({ visible: false });
});

let data = getFromSlide('slide-7793d711ccda', 'ggb2', false || false);
if (data.innerData) {
  ggb1.instance.setValue('a', data.innerData['a']);
  ggb1.instance.setValue('b', data.innerData['b']);
}

//ggb1.instance.setValue("a",2);
//ggb1.instance.setValue("b",5);
ggb1.instance.setValue('step', 8);
ggb1.instance.setValue('separation', -3);
ggb1.instance.setValue('separationDirection', 1);
ggb1.instance.setValue('waitUp', 0);
ggb1.instance.setValue('time1a', Math.PI / 2);
ggb1.instance.setValue('time2a', Math.PI / 2);
ggb1.instance.setValue('time3a', Math.PI / 2);
ggb1.instance.setValue('time1b', Math.PI / 2);
ggb1.instance.setValue('time2b', Math.PI / 2);
ggb1.instance.setValue('time3b', Math.PI / 2);
ggb1.instance.setValue('time4', 0);
ggb1.instance.setValue('time5', 1);

ggb1.instance.setCoords(
  'C',
  ggb1.instance.getValue('x(TriLeft)+a'),
  ggb1.instance.getValue('y(TriLeft)+a')
);
ggb1.instance.setCoords(
  'B',
  ggb1.instance.getValue('x(TriLeft)+a'),
  ggb1.instance.getValue('y(TriLeft)+b')
);

//show angle measures
button1.on('click', () => {
  ggb1.instance.setValue('step', 8);
  ggb1.instance.setValue('time1a', Math.PI / 2);
  ggb1.instance.setValue('time2a', Math.PI / 2);
  ggb1.instance.setValue('time3a', Math.PI / 2);
  ggb1.instance.setValue('time1b', Math.PI / 2);
  ggb1.instance.setValue('time2b', Math.PI / 2);
  ggb1.instance.setValue('time3b', Math.PI / 2);
  ggb1.instance.setValue('time4', 0);
  ggb1.instance.setValue('time5', 1);
  // console.log(ggb1.instance.getValue("step"));
  ggb1.instance.setValue('separation', -3);
  ggb1.instance.setCoords(
    'C',
    ggb1.instance.getValue('x(TriLeft)+a'),
    ggb1.instance.getValue('y(TriLeft)+a')
  );
  ggb1.instance.setCoords(
    'B',
    ggb1.instance.getValue('x(TriLeft)+a'),
    ggb1.instance.getValue('y(TriLeft)+b')
  );
  ggb1.instance.evalCommand('RunClickScript(button2)');
  text2.updateData({ visible: true });
  shareButton1.updateData({ visible: true });
  shareText1.updateData({ visible: true });
  shareInput1.updateData({ visible: true });
  //button1.updateData({disabled:true});
});

/*
{"compTotals":{"textbox":3,"geogebra":1,"separator":1,"button":1,"sharewithclass":1},"stage":"Land","lessonInfo":"8 M2 TD L17 - Proving the Pythagorean Theorem","teacherView":false,"layout":"T layout"}
*/
